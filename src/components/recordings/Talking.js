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
  // const {audio, setAudio} = useState()
  // const tabLabel = [{label:studentA},{label:studentB}]
  // const [ids, setIds] = React.useState([[],[]]) //[[],[]]

  const handleSave = async (urlAudio) => {
    const audioName = v4()
    // const newIds = addIds(audioName, ids, student)
    try {
      // const newRecording = await readUploadedFileAsAudio(id, audioName, newIds, urlAudio);
      const newRecording = await readAndUploadFileAsAudio(id, audioName, urlAudio)
      fn({...newRecording, hasError:false, errors:{}})
      return true
    } catch (e) {
      console.log(e);
      return false
    }
  }

  const handleDelete = async (audioName) => {
    // const newIds = deleteId(ids, student, audioName)
    RecordingService.deleteSingleAudio(id, {audioName})
      .then(
        fn({...recording, audioId:''}), 
        (error)=>{
          console.error(error)
        })
      }
      
  useEffect(() => {
    !audioId && fn({
      ...recording, 
      hasError: true, 
      errors:{x:'We need an audio recording'}
    })
  }, []);
  
  // const tabContent = [
  //   {student:0, newAudio: handleSave, deleteAudio:handleDelete, audios:ids[0]},
  //   {student:1, newAudio: handleSave, deleteAudio:handleDelete, audios:ids[1]},
  // ]
  // return TabHoc(TabContainer, tabLabel, tabContent)
  return <TabContainer newAudio={handleSave} deleteAudio={handleDelete} audio={audioId}/>
}
/**
 * wrapper the recording & player
 * @param {newAudio, student, audios} props callback, idtab, array
 */
const TabContainer = ({newAudio, deleteAudio, audio}) => {
  const API = process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_PRO_API
    : process.env.REACT_APP_API_URL
  return (
    <Container component="main">
    <CssBaseline />
    <Card style={{display:'flex', height:'100%'}}>
        <Recorder handleSave={({blob})=>newAudio(blob)}/>
        { !!audio &&
          <div style={{width:'100%', alignSelf: 'center', overflow:'scroll'}}>
            {/* {audios.reverse().map((id, i) => ( */}
              <div style={{display:'flex'}}>
                <ReactH5AudioPlayer
                  src={`${API}/messages/${audio}`} />
                <IconButton style={{margin:'.5em 0'}}
                    onClick={()=>deleteAudio(audio)}
                    aria-label="delete audio" >
                  <Delete  />
                </IconButton>
              </div>
            {/* ))} */}
          </div>
        }
      </Card>
    </Container>
  )
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