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
// import { isEmpty } from 'lodash'
import AdapterLink from './../misc/Enlace'
import Link from '@material-ui/core/Link'
import recordingServices from './../../services/recordingServices'

const steps = ['Set-Up', 'Before talking', 'Talking', 'After talking', 'Socio Affective', 'Future Recordings'];
export const emptyRecording = {id:'',name: '',comments: '', studentA: '', studentB:  '',}

function Checkout(props) {
  const classes = useStyles();
  const id = props.match.params.id
  
  React.useEffect(()=>{
    if (id){ //edit page
      recordingServices.read(id)
        .then(setRecording)
        .then(wasCreated(true))
    } else { 
      setRecording(emptyRecording)
      wasCreated(false)
    }
  }, [id])

  // ! cant go backward the steps didnt update. 
  steps[0] = id ? `Edit ${id}` : steps[0]; //? it should be an state?
  
  const [activeStep, setActiveStep] = React.useState(0);
  
  const [error, showError] = React.useState(false);

  const [created, wasCreated] =  React.useState(false);
  // * RECORDING DEFINITION. 
  const [recording, setRecording] = React.useState({})

  const handleNext = () => {
    if(activeStep === 0 && !created) { //first step, first time. 
      // * Create the new record in the backend. 
      recordingServices.create(recording).then(
        ({data}) => { // * If everything goes well
          wasCreated(true)// ? change Create status
          setRecording(data)// ? update the recording into the checkout component. 
          props.history.push(`/record/${data.id}`);//?change the route
          setActiveStep(activeStep + 1)// ? go to the next page
        },
        (error) => { // * If something goes wrong. 
            showError(error.response.data.message)
        }
      )
    } else if(created) {
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
                  {getStepContent(activeStep, setRecording, recording)}
                  <Navigation 
                  steps={steps}
                  // blocked = {}
                  step={activeStep} classes={classes} 
                  back={handleBack} next={handleNext} />
                </React.Fragment>
            }
          </React.Fragment>
        </Paper>
        {id && <GoToCreate/>}
        <GoBack />
      </main>
      <Alert 
        message={error} 
        open={error ? true : false} 
        ok={()=>setRecording({...emptyRecording, id:'fck'})}
        handleClose={showError} />
    </React.Fragment>
  );
}

export function GoToCreate() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"This is not what you are looking for?, "}
      <Link color="inherit" component={AdapterLink} to="/new-record">
        Click here
      </Link>
      {', and Go to create a new recording.'}
    </Typography>
  );
}

export default  Checkout