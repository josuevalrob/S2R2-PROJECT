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
// import recordingServices from './../../services/recordingServices'

const steps = ['Settings', 'Before talking', 'Talking', 'After talking', 'Socio Affective', 'Future Recordings'];

export const ThemeContext = React.createContext('light');

function Checkout(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [created, wasCreated] =  React.useState(false);
  // * RECORDING DEFINITION. 
  const [recording, setRecording] = React.useState({})

  const handleNext = () => {
    if(activeStep === 0 && !created) { //first step, first time. 
      // * Create the new record in the backend. 
      // * If everything goes well, 
        // ? change Create status
        // ? go to the next page
        // ! update the recording into the recording Context Api. 
        wasCreated(true)
        setActiveStep(activeStep + 1)
        setRecording(recording)
        // ? update the route in the browser
      // * If something goes wrong. 
        // ? show errors. 
        // ? disable the navigation. 
    
    }   
  };
  
  console.log(props)
  
  const handleBack = () => setActiveStep(activeStep - 1);

  return (
    <ThemeContext.Provider value="dark">
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
    </ThemeContext.Provider>
  );
}

export const RecordingConsumer = (WrappedComponent) => {
  return (props) => {
    return (
      <ThemeContext.Consumer>
        {(consumerProps) => (<WrappedComponent {...consumerProps} {...props} />)}
      </ThemeContext.Consumer>
    )
  }
}


export default  Checkout