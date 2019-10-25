import React from 'react'
import TabHoc from './../misc/TabHoc'
import Recorder from './../misc/Recorder'
import ReactAudioPlayer from "react-h5-audio-player";
import readUploadedFileAsAudio from '../../utils/audioFile'
import { v4 } from 'uuid';
import Card from '@material-ui/core/Card';

export default function Talking ({recording, fn}) {
  const {studentA, studentB, id, audioIds} =  recording; //[{},{}]
  const tabLabel = [{label:studentA},{label:studentB}]
  const [ids, setIds] = React.useState([[],[]]) //[[],[]] 🦉

  const handleSave = async (student, url) => {
    const audioName = v4()
    const newIds = ids.map((e,i)=>i===student?[...ids[student], audioName]:e)
    try {
      const newRecording = await readUploadedFileAsAudio(id, audioName, newIds, url);
      fn(newRecording)
      return true
    } catch (e) {
      console.log(e);
      return false
    }
  }
  React.useEffect(()=>{
    audioIds && setIds([audioIds[0], audioIds[1]])
  }, [audioIds])

  const tabContent = [
    {student:0, newAudio: handleSave, audios:ids[0]},
    {student:1, newAudio: handleSave, audios:ids[1]},
  ]
  return TabHoc(TabContainer, tabLabel, tabContent)
}

const TabContainer = ({newAudio, student, audios}) => {
  // console.log(audios)
  return (
    <Card style={{display:'flex'}}>
      <Recorder handleSave={({blob})=>newAudio(student, blob)}/>
      <div style={{minWidth:300, maxHeight:200, overflow:'scroll'}}>
        {!!audios.length && audios.reverse().map((id, i) => (
          <ReactAudioPlayer key={i}
            src={`${process.env.REACT_APP_API_URL}/messages/${id}`} />
        ))}
      </div>
    </Card>
  )
}