import React from 'react';
import useStyles from '../../styles/stepForm'
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import getStepContent from './getStepContent'
import Navigation from './../misc/Navigation'
import GoBack from './../misc/GoBack'
import Thanks from './Thanks'
import Alert from './../misc/Alert'
import { Redirect } from 'react-router-dom'

// import recordingServices from './../../services/recordingServices'

const steps = ['Set-Up', 'Before talking', 'Talking', 'After talking', 'Socio Affective', 'Future Recordings'];


function Checkout(props) {
  const classes = useStyles();
  
  if(props.match.params.id) steps[0] = `Edit ${props.match.params.id}`;

  const [activeStep, setActiveStep] = React.useState(0);
  
  const [hasError, showError] = React.useState(false);

  const [created, wasCreated] =  React.useState(false);
  // * RECORDING DEFINITION. 
  const [recording, setRecording] = React.useState({})

  const handleNext = () => {
    if(activeStep === 0 && !created) { //first step, first time. 
      // * Create the new record in the backend. 
      // * If everything goes well, 
        // ? change Create status
          wasCreated(true)
        // ? update the recording into the checkout component. 
          setRecording(recording)
        // ! update the route in the browser
          props.history.push(`/record/var`);
        // ? go to the next page
          setActiveStep(activeStep + 1)
      // * If something goes wrong. 
        // ? show errors and dont go forward. 
          showError(true)    
    }   
  };
  
  console.log(props)
  
  const handleBack = () => setActiveStep(activeStep - 1);
  
  // if (created) return <Redirect to={`record/${created}`} />;
  
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
        <GoBack />
      </main>
      <Alert open={hasError} handleClose={()=>showError(false)} />
    </React.Fragment>
  );
}

export default  Checkout