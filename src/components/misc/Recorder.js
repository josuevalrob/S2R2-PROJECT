import React from 'react'
import useStyles from './../../styles/recorderStyles';
import { ReactMic } from 'react-mic';
import blue from '@material-ui/core/colors/blue';
// import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Stop from '@material-ui/icons/MicOff';
import Eq from '@material-ui/icons/GraphicEq';
import Save from '@material-ui/icons/Save';
import Delete from '@material-ui/icons/Delete';
import Mic from '@material-ui/icons/Mic';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Recorder({handleSave, title}) {
  const classes = useStyles();
  const [isRecording, setIsRecording] = React.useState(false)
  const [uploading, setUploading] = React.useState(false)
  const [blob, setBlob] = React.useState(new Blob())

  const onSave = async () => {
    setUploading(true)
    let isSaved = await handleSave(blob)
    console.log(isSaved)
    setUploading(false)
  }

  const handleStop = (audio) => {
    setBlob(audio);
  } 

  const handleCancel = ()=> setBlob(new Blob())

  const handlePreview = () => {
    const tmp = new Audio(blob.blobURL);
    tmp.play()
  }
  return (
    <React.Fragment>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {title}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton onClick={() => setIsRecording(!isRecording)}  aria-label="play/pause">
            { ! isRecording
              ? <Mic className={classes.playIcon} />
              : <Stop className={classes.playIcon} />}
          </IconButton>
          <IconButton aria-label="previous" onClick={handlePreview} disabled={blob.blobURL ? false : true} >
            <Eq className={classes.playIcon} />
          </IconButton>
        </div>
      </div>
      { ! blob.blobURL //is there is not BloUrl
        ? <ReactMic
            className={classes.cover} //sound-wave
            record={isRecording} //Boolean
            onStop={handleStop}
            strokeColor="#ffffff"
            backgroundColor={blue[800]} />
        : <SaveHanlder {...{onSave, uploading, handleCancel, classes}} />
      }
    </React.Fragment>
  );
}

const SaveHanlder = ({onSave, uploading, handleCancel, classes}) => {
  return (
    <div className={classes.cover}>
      <div className={classes.saveIcon} >
        <IconButton  onClick={onSave} aria-label="previous" >
          { ! uploading
            ? <Save   className={classes.saveIcon} />
            : <CircularProgress className={classes.progress} />}
        </IconButton>
        <IconButton onClick={handleCancel} aria-label="previous" >
          <Delete  />
        </IconButton>
      </div>
    </div>
  )
}