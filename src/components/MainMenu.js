import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import MenuBUttons from './misc/MenuButtons'
import S2R2 from './misc/s2r2'
import useStyles from '../styles/mainMenu'
import UserMenu from './misc/UserMenu'
import { withAuthConsumer } from '../contexts/AuthStore';
import {buttonsProps} from '../utils/helpers';


function MainMenu({user}) {
  const classes = useStyles();
  const {data:{role}} = user 

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        <S2R2 />
        <Typography variant="h5" component="h2" gutterBottom>
          {'A simple App for voice recording and speech recognition analysis.'}
        </Typography>
        <Typography variant="body1">What do you want to do now.</Typography>
        <MenuBUttons buttons={buttonsProps(role)} />
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">Customization</Typography>
          <UserMenu />
        </Container>
      </footer>
    </div>
  );
}



export default withAuthConsumer(MainMenu);