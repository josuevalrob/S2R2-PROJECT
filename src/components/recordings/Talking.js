import React, { useEffect } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Recorder from './../misc/Recorder'
import './../../styles/player.css';
import ReactH5AudioPlayer from "react-h5-audio-player";
import readAndUploadFileAsAudio from '../../utils/audioFile'
import Delete from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { v4 } from 'uuid';
import Card from '@material-ui/core/Card';
import RecordingService from './../../services/recordingServices'

export default function Talking ({recording, fn}) {
  const {id, audioId} =  recording;
  const recordingRef = React.useRef(recording)
  useEffect(() => {
    recordingRef.current = recording
  })
  const handleSave = async (urlAudio) => {
    const audioName = v4()
    try {
      const newRecording = await readAndUploadFileAsAudio(id, audioName, urlAudio)
      fn({...newRecording, hasError:false, errors:{}})
      return true
    } catch (e) {
      console.log(e);
      return false
    }
  }

  const handleDelete = async (audioName) => {
    RecordingService.deleteSingleAudio(id, {audioName})
      .then(
        fn({...recording, audioId:'', hasError: true, 
        errors:{x:'We need an audio recording'}}), 
        (error)=>{
          console.error(error)
        })
      }
      
  useEffect(() => {
    !recordingRef.current.audioId && fn({
      ...recordingRef.current, 
      hasError: true, 
      errors:{x:'We need an audio recording'}
    })
  }, [fn]);
  
  
  return <TabContainer newAudio={handleSave} deleteAudio={handleDelete} audio={audioId}/>
}
/**
 * wrapper the recording & player
 * @param {newAudio, student, audios} props callback, idtab, array
 */
const TabContainer = ({newAudio, deleteAudio, audio}) => (
    <Container component="main">
    <CssBaseline />
    <Card style={{display:'flex', height:'100%'}}>
        <Recorder handleSave={({blob})=>newAudio(blob)}/>
        <AudioPlayer onDelete={()=>deleteAudio(audio)} audio={audio} />
      </Card>
    </Container>
  )

export const AudioPlayer = ({audio, onDelete}) => {
  const API = process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_PRO_API
    : process.env.REACT_APP_API_URL
  return !!audio &&
    <div style={{width:'100%', alignSelf: 'center', overflow:'scroll'}}>
        <div style={{display:'flex'}}>
          <ReactH5AudioPlayer
            src={`${API}/messages/${audio}`} />
          {onDelete && 
          <IconButton style={{margin:'.5em 0'}}
              onClick={onDelete}
              aria-label="delete audio" >
            <Delete  />
          </IconButton>}
        </div>
    </div>
}
export const addIds = (audioName, ids, student) =>
  ids.map( (e,i) => i === student //update an specific tab
    ? !!ids[student] //if that students has any ids
      ? [...ids[student], audioName] //clone one, or
      : [audioName] // create a new one
    : e || [] //if there is not e, return an array
  )

export const deleteId = (ids, student, audID) =>
  ids.map((e, i)=> i === student
    ? ids[student].filter(e=>e!==audID)
    : e
  )