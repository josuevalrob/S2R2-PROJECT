import React from 'react'
import TabHoc from './../misc/TabHoc'
import Recorder from './../misc/Recorder'
import recordingServices from '../../services/recordingServices'
import { v4 } from 'uuid';

export default function Talking ({recording, fn}) {
  const {studentA, studentB, id} =  recording; //[{},{}]
  const tabLabel = [{label:studentA},{label:studentB}]
  const [uploading, setUploading] = React.useState(false)
  const [ids, setIds] = React.useState([["355c71ed-be90-438f-8554-806d7f01da88"], []])

  const handleSave = async (student, audio) => {
    const audioName = v4()
    const newIds = ids.map((e,i)=>i===student?[...ids[student], audioName]:e)
    setUploading(true)
    try {
      const newRecording = await readUploadedFileAsAudio(id, audioName, newIds, audio.blob);
      debugger
      setUploading(false)
      fn(newRecording)
      return true
    } catch (e) {
      console.log(e);
      setUploading(false)
      return false
    }
  }

  const tabContent = [
    {student:0, handle: handleSave, audio: ids[0]},
    {student:1, handle: handleSave, audio: ids[1]},
  ]
  return TabHoc(Recorder, tabLabel, tabContent)
}
const readUploadedFileAsAudio = (id, audioName, audioIds, audioUrl) =>{
  const reader = new FileReader();
  reader.readAsDataURL(audioUrl);
  return new Promise((resolve, reject)=>{
    reader.onerror = () => {
      reader.abort()
      debugger
      reject(new DOMException('Problem parsing file'))
    }
    reader.onload = async () => {
      const base64AudioMessage = reader.result.split(',')[1];
      const audioObj = {audioName,audioIds, audio: base64AudioMessage}
      debugger
      //! i am losing the .then why???
      recordingServices.createAudio(id, audioObj).then( response =>{
            debugger
            resolve(response) //*returned value
            // populateAudioMessages();
          }, response => {
            debugger
            console.error('Invalid status saving audio message: ' + response.status)
            reject(response)
          }
        )
        .catch(error=>{
          debugger
        })
    };
  })
}