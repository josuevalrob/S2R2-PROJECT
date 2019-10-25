import { makeStyles } from '@material-ui/core/styles';

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

export default useStyles