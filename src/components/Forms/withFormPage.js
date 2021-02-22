import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import S2R2 from './../misc/s2r2'
import useStyles from '../../styles/mainMenu'
import { withAuthConsumer } from '../../contexts/AuthStore';
import {buttonsProps} from '../../utils/helpers';
import AdapterLink from './../misc/Enlace'
import Link from '@material-ui/core/Link';
import {upperFirst} from 'lodash'


const withFormPage  = (WrappedForm) => {
  return (props) => {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <CssBaseline />
        <Container component="main" className={classes.main} maxWidth="sm">
          <S2R2 />
          <Typography variant="h5" gutterBottom>
            {'What do you want to do now?'}
          </Typography>
          <Typography variant="h6">
            {'Please fill out the form according to the instructions of the investigator'}
          </Typography>
          <WrappedForm {...props}/>
        </Container>
        <StudentFooter classes={classes} />
      </div>
    );
  }
}

const CustomFooter = ({user, classes}) => {
  const {data:{role, name}} = user;
  return (
    <footer className={classes.footer}>
      <Container maxWidth="sm">
        <Typography variant="body1">Navigation</Typography>
        <Typography variant="body2" color="textSecondary">
          {`${upperFirst(name)}, Remember that you can also go to `}
          {
            buttonsProps(role).slice(1).reverse().map((button, i) => (
              <React.Fragment key={i}>
              { !!i && ' or '}
              <Link to={button.link} component={AdapterLink} color={'primary'}>
                {button.label}
              </Link>
              </React.Fragment>
            ))
          }
        {' to specify the general configurations, or simply '}
        <Link color="secondary" to={'/'} component={AdapterLink}>
          {'go back'}
        </Link>
        </Typography>
      </Container>
    </footer>
  )
}

const StudentFooter = withAuthConsumer(CustomFooter);

export default withFormPage;