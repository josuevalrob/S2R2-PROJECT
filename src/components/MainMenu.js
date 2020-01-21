import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import MenuBUttons from './misc/MenuButtons'
import useStyles from '../styles/mainMenu'
import UserMenu from './misc/UserMenu'


export default function MainMenu() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          S<sup>2</sup>R<sup>2</sup> PROJECT
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'A simple App for voice recording and speech recognition analysis.'}
        </Typography>
        <Typography variant="body1">What do you want to do now.</Typography>
        <MenuBUttons />
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
