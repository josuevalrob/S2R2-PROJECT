import React from 'react'
import TabHoc from './../misc/TabHoc'
import Recorder from './../misc/Recorder'

export default function Talking ({recording, fn}) {
  const {studentA, studentB} =  recording; //[{},{}]
  const tabLabel = [{label:studentA},{label:studentB}]
  // const [isLoad, load] = React.useState(false)
  const [blobs, setBlob] = React.useState([new Blob(), new Blob()])

  const handleSave = (student, blob) => {
    // const audioUrl = new Audio(url)
    const reader = new FileReader();
    console.log(blob)
    reader.readAsDataURL(blob.blob);
    reader.onload = () => {
      const base64AudioMessage = reader.result.split(',')[1];
      debugger
    //   fetch('/messages', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ message: base64AudioMessage })
    //   }).then(res => {
    //     if (res.status === 201) {
    //       return populateAudioMessages();
    //     }
    //     console.log('Invalid status saving audio message: ' + res.status);
    };
  }

  const tabContent = [
    {student:0, handle: handleSave, audio: blobs[0]},
    {student:1, handle: handleSave, audio: blobs[1]},
  ]
  return TabHoc(Recorder, tabLabel, tabContent)
}

