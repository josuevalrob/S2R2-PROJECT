import React from 'react';
import useStyles from '../../styles/stepForm'
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import getStepContent from './getStepContent'
import AdapterLink from './../misc/Enlace'
import Navigation from './../misc/Navigation'
import Link from '@material-ui/core/Link'
// import recordingServices from './../../services/recordingServices'
const steps = ['Settings', 'Before talking', 'Talking', 'After talking', 'Socio Affective', 'Future Recordings'];

export default function Checkout(props) {
  console.log(props)
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [created, wasCreated] =  React.useState(false);
  // * RECORDING DEFINITION. 
  const [recording, setRecording] = React.useState({})

  const handleNext = () => {
    if(activeStep === 0 && !created) { //first step, first time. 
          wasCreated(true)
          setRecording(recording)
          setActiveStep(activeStep + 1)
    }   
  };

  const handleBack = () => setActiveStep(activeStep - 1);

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            {steps[activeStep]}
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            { activeStep === steps.length 
              ? <Thanks /> //last element. 
              : <React.Fragment>
                  {/* {error && error.message} */}
                  {getStepContent(activeStep, setRecording, recording)}
                  <Navigation 
                  steps={steps}
                  step={activeStep} classes={classes} 
                  back={handleBack} next={handleNext} />
                </React.Fragment>
            }
          </React.Fragment>
        </Paper>
        <MadeWithLove />
      </main>
    </React.Fragment>
  );
}


const Thanks = () => (
  <React.Fragment>
    <Typography variant="h5" gutterBottom>
      Thank you for your order.
    </Typography>
    <Typography variant="subtitle1">
      Your order number is #2001539. We have emailed your order confirmation, and will
      send you an update when your order has shipped.
    </Typography>
  </React.Fragment>
)



function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"If you don't wanna be here, "}
      <Link color="inherit" component={AdapterLink} to="/">
        Click here
      </Link>
      {', and Go back to the main menu.'}
    </Typography>
  );
}