import React from 'react'
import TabHoc from './../misc/TabHoc'
import Recorder from './../misc/Recorder'
import './../../styles/player.css';
import ReactH5AudioPlayer from "react-h5-audio-player";
import readUploadedFileAsAudio from '../../utils/audioFile'
import Delete from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { v4 } from 'uuid';
import Card from '@material-ui/core/Card';
import RecordingService from './../../services/recordingServices'

export default function Talking ({recording, fn}) {
  const {studentA, studentB, id, audioIds} =  recording;
  const tabLabel = [{label:studentA},{label:studentB}]
  const [ids, setIds] = React.useState([[],[]]) //[[],[]]

  const handleSave = async (student, url) => {
    const audioName = v4()
    const newIds = addIds(audioName, ids, student)
    try {
      const newRecording = await readUploadedFileAsAudio(id, audioName, newIds, url);
      fn(newRecording)
      return true
    } catch (e) {
      console.log(e);
      return false
    }
  }

  const handleDelete = async (student, audioName) => {
    const newIds = deleteId(ids, student, audioName)
    RecordingService.deleteAudio(id,{audioName, audioIds:newIds})
      .then(setIds(newIds), (error)=>{
        //handling de error al borrar
        debugger
      })
  }

  React.useEffect(()=>{
    audioIds && setIds([audioIds[0], audioIds[1]])
  }, [audioIds])

  const tabContent = [
    {student:0, newAudio: handleSave, deleteAudio:handleDelete, audios:ids[0]},
    {student:1, newAudio: handleSave, deleteAudio:handleDelete, audios:ids[1]},
  ]
  return TabHoc(TabContainer, tabLabel, tabContent)
}
/**
 * wrapper de recording y player
 * @param {newAudio, student, audios} props callback, idtab, array
 */
const TabContainer = ({newAudio, deleteAudio, student, audios=[]}) => {
  const {REACT_APP_API_URL} = process.env
  return (
    <Card style={{display:'flex'}}>
      <Recorder handleSave={({blob})=>newAudio(student, blob)}/>
      { !!audios.length &&
        <div style={{minWidth:300, maxHeight:200, overflow:'scroll'}}>
          {audios.reverse().map((id, i) => (
            <div style={{display:'flex'}} key={i}>
              <ReactH5AudioPlayer
                src={`${REACT_APP_API_URL}/messages/${id}`} />
              <IconButton style={{margin:'.5em 0'}}
                  onClick={()=>deleteAudio(student, id)}
                  aria-label="delete audio" >
                <Delete  />
              </IconButton>
            </div>
          ))}
        </div>
      }
    </Card>
  )
}

const addIds = (audioName, ids, student) =>
  ids.map( (e,i) => i === student //update an specific tab
    ? !!ids[student] //if that students has any ids
      ? [...ids[student], audioName] //clone one, or
      : [audioName] // create a new one
    : e || [] //if there is not e, return an array
  )

const deleteId = (ids, student, audID) =>
  ids.map((e, i)=> i === student
    ? ids[student].filter(e=>e!==audID)
    : e
  )