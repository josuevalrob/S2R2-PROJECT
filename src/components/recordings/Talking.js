import React from 'react'
import TabHoc from './../misc/TabHoc'
import { ReactMic } from 'react-mic';
import { makeStyles } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Stop from '@material-ui/icons/Stop';
import Save from '@material-ui/icons/Save';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

//* real component
export default function Talking ({recording, fn}) {
  const {studentA, studentB} =  recording; //[{},{}]  
  const tabLabel = [{label:studentA},{label:studentB}]
  return TabHoc(Recorder, tabLabel, tabLabel)
} 
function Recorder({label}) {
  const classes = useStyles();
  const [recording, setRecording] = React.useState(false)
  const [audio, setAudio] = React.useState(new Audio()) 
  const handleStop = (recordedBlob) => { 
    const audioUrl = URL.createObjectURL(recordedBlob.blob);
    const tmpAudio = new Audio(audioUrl);
    tmpAudio.play()
    setAudio(tmpAudio)
  }
  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Track # 1
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {label}
          </Typography>
        </CardContent>
        <div className={classes.controls}>                    
          <IconButton onClick={() => setRecording(!recording)}  aria-label="play/pause">
            { ! recording 
              ? <PlayArrowIcon className={classes.playIcon} />
              : <Stop className={classes.playIcon} />}
          </IconButton>          
          <IconButton aria-label="previous" disabled={recording} >
            <Save /> 
          </IconButton>
        </div>
      </div>
      <ReactMic
        className={classes.cover} //sound-wave
        record={recording} //Boolean
        onStop={handleStop}
        // onData={onData}
        strokeColor="#ffffff"
        backgroundColor={blue[800]} />
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
    width: 151,
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
}));

