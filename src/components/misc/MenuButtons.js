import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Settings from '@material-ui/icons/Settings';
import AudioTrack from '@material-ui/icons/Audiotrack';
import AdapterLink from './Enlace'
const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  leftIcon: {
    marginRight: theme.spacing(1),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  iconSmall: {
    fontSize: 20,
  },
}));

export default function MenuBUttons() {
  const classes = useStyles();

  return (
    <div>
      
      <Button  to="/new-record" component={AdapterLink}  variant="contained" color="primary" className={classes.button}>
        New Record
        <Settings className={classes.rightIcon} />
      </Button>
      <Button to="/recordins" component={AdapterLink} variant="contained" color="default" className={classes.button}>
        Check Recordins
        <AudioTrack className={classes.leftIcon} />
      </Button>

      
    </div>
  );
}