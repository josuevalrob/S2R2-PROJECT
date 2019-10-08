import React from 'react'
import TabHoc from './../misc/TabHoc'
import { ReactMic } from 'react-mic';
import { makeStyles } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Stop from '@material-ui/icons/MicOff';
import Eq from '@material-ui/icons/GraphicEq';
import Save from '@material-ui/icons/Save';
import Delete from '@material-ui/icons/Delete';
import Mic from '@material-ui/icons/Mic';
import ReactAudioPlayer from "react-h5-audio-player";


//* real component
export default function Talking ({recording, fn}) {
  const {studentA, studentB} =  recording; //[{},{}]
  const tabLabel = [{label:studentA},{label:studentB}]
  const tabContent = [
    {student:0, },
    {student:1,},
  ]
  return TabHoc(Recorder, tabLabel, tabContent)
}

function Recorder({audio}) {
  const classes = useStyles();
  const [isRecording, setIsRecording] = React.useState(false)
  const [src, setSrc] = React.useState(undefined)

  const handleStop = (recordedBlob) => {
    // const url = URL.createObjectURL(recordedBlob.blob);
    setSrc('url')
  }

  const handleSave = () => {
    debugger
  }

  const handlePreview = () => {
    const tmp = new Audio(src);
    tmp.play()
  }
  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Track # 1
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {src}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton onClick={() => setIsRecording(!isRecording)}  aria-label="play/pause">
            { ! isRecording
              ? <Mic className={classes.playIcon} />
              : <Stop className={classes.playIcon} />}
          </IconButton>
          <IconButton aria-label="previous" onClick={handlePreview} disabled={src ? false : true} >
            <Eq className={classes.playIcon} />
          </IconButton>
        </div>
      </div>
      { ! src
        ? <ReactMic
            className={classes.cover} //sound-wave
            record={isRecording} //Boolean
            onStop={handleStop}
            strokeColor="#ffffff"
            backgroundColor={blue[800]} />
        // ? <button onClick={handleStop}>fuck</button>
        : <div className={classes.cover}>
            <div className={classes.saveIcon} >
              <IconButton  onClick={handleSave} aria-label="previous" >
                <Save   className={classes.saveIcon} />
              </IconButton>
              <IconButton onClick={handleSave} disabled={audio?false:true} aria-label="previous" >
                <Delete  />
              </IconButton>
            </div>
            {audio && <ReactAudioPlayer
              src={src}
              />}
          </div>
      }
    </Card>
  );
}

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    backgroundColor: '#1565c0',
    width: 160,
    display: 'flex',
    justifyContent:'flex-end',
    flexDirection:'column'
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  saveIcon: {
    // height: 76,
    // width: 76,
    margin:'auto',
    color:'#fff'
  },
}));

