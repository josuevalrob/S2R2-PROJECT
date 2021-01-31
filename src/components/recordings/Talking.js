import React, { useEffect } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Recorder from './../misc/Recorder'
import './../../styles/player.css';
import ReactH5AudioPlayer from "react-h5-audio-player";
import readAndUploadFileAsAudio from '../../utils/audioFile'
import Delete from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import RecordingService from './../../services/recordingServices'
const {NODE_ENV, REACT_APP_API_URL, REACT_APP_DEV_API} = process.env 

export default function Talking ({recording, callback, updateQuery, title}) {
  const {id, audioId} =  recording;
  const recordingRef = React.useRef(recording)
  useEffect(() => {
    recordingRef.current = recording
  })
  const handleSave = async (urlAudio) => {
    try {
      const newRecording = await readAndUploadFileAsAudio(id, updateQuery, urlAudio)
      callback({...newRecording, hasError:false, errors:{}})
      return true
    } catch (e) {
      console.log(e);
      return false
    }
  }

  const handleDelete = async (audioName) => {
    RecordingService.deleteSingleAudio(id, {audioName})
      .then(
        callback({...recording, audioId:'', hasError: true, 
        errors:{x:'We need an audio recording'}}), 
        (error)=>{
          console.error(error)
        })
      }

  useEffect(() => {
    !recordingRef.current.audioId && callback({
      ...recordingRef.current, 
      hasError: true, 
      errors:{x:'We need an audio recording'}
    })
  }, [callback]);


  return <TabContainer {...{handleSave, handleDelete, audioId}} title={title || recording.name}/>
}
/**
 * wrapper the recording & player
 * @param {handleSave, student, audios} props callback, idtab, array
 */
const TabContainer = ({handleSave, handleDelete, audioId, title}) => (
    <Container component="main">
    <CssBaseline />
    <Card style={{display:'flex', height:'100%'}}>
        <Recorder handleSave={({blob})=>handleSave(blob)} title={title}/>
        <AudioPlayer onDelete={()=>handleDelete(audioId)} audioId={audioId} />
      </Card>
    </Container>
  )

export const AudioPlayer = ({audioId, onDelete}) => {
  const API = NODE_ENV === "development" ? REACT_APP_DEV_API : REACT_APP_API_URL;
  return !!audioId &&
    <div style={{width:'100%', alignSelf: 'center', overflow:'scroll'}}>
        <div style={{display:'flex'}}>

          <ReactH5AudioPlayer src={`${API}/messages/${audioId}`} />

          {onDelete && 
          <IconButton style={{margin:'.5em 0'}}
              onClick={onDelete}
              aria-label="delete audio" >
            <Delete  />
          </IconButton>}
        </div>
    </div>
}