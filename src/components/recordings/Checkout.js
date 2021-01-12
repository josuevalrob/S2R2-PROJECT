import React from 'react';
import useStyles from '../../styles/stepForm'
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import getStepContent from './getStepContent'
import Navigation from '../misc/Navigation'
import GoBack from '../misc/GoBack'
import Thanks from './Thanks'
import AdapterLink from '../misc/Enlace'
import Link from '@material-ui/core/Link'
import recordingServices from '../../services/recordingServices'
import { SnackbarProvider, useSnackbar } from 'notistack';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withAuthConsumer } from './../../contexts/AuthStore';

export const emptyRecording = {id:'',name: '',comments: '', studentA: '', studentB:  '',} //? should be an exteranl object. More complete
const constSteps = ['Set-Up', 'Before talking', 'Talking', 'After talking', 'How about you?', 'Future Recordings']

function Checkout(props) {
  const classes = useStyles();
  const id = props.match.params.id;
  const isStudent = props.user.data.role === 'student';
  const [activeStep, setActiveStep] = React.useState(isStudent ? 1 :0); //*
  const [created, wasCreated] =  React.useState(false);
  const [recording, setRecording] = React.useState({})
  const [steps, setSteps] = React.useState(constSteps)
  const [loading, setLoader] = React.useState(true)
  const [isSaving, saving] = React.useState(false)
  const { enqueueSnackbar } = useSnackbar(); // 🍿

  const handleErrors = (error) => enqueueSnackbar(error, {variant : 'warning'});

  React.useEffect(() => { //? async & await 🤔
    if (id){ //edit page
      recordingServices.read(id)
        .then(r => {
          setSteps([r.name, ...constSteps.slice(1, constSteps.length)]);
          setRecording(r);
          wasCreated(true);
          setLoader(false);
          if(!!r.complete)
            setActiveStep(steps.length)
        })
    } else { 
      setLoader(false)
      setRecording(emptyRecording)
      setSteps(constSteps)
      wasCreated(false)
    }
  }, [id, steps.length])

  const handleNext = () => {
    //* if the recording obj comes with an error key, it wont proceed. 
    if(recording.hasError) {
      Object.values(recording.errors).forEach(e => e && handleErrors(e))
      return
    }
    enqueueSnackbar('Saving...', {variant : 'success', autoHideDuration: 800,})
    if(activeStep === 0 && !created) { // * Create the new record in the backend.
      saving(true);
      recordingServices.create(recording).then(
        (data) => { // * If everything goes well
          wasCreated(true)// ? change Create status
          setRecording(data)// ? update the recording into the checkout component.
          props.history.push(`/record/${data.id}`);//?change the route
          setActiveStep(activeStep + 1)// ? go to the next page
          saving(false);
        },
        (error) => {
          if(error.response) {
            saving(false);
            handleErrors(error.response.data.message)
          } else {
            console.error(error)
          }
        }
      )
    } else if(created) { //* update content
      //session is a variable that can be set as a middleware. And before going to the back, set custom variables.
      const session = activeStep + 1 < steps.length ? {...recording} : {...recording, complete:true}
      recordingServices.update(id, session).then(
        (data) => { // setRecording(data) //? do i need to update it 🤔?
          setSteps([data.name, ...constSteps.slice(1, constSteps.length)])
          setActiveStep(activeStep + 1)
        },
        (error) => {
          if(error.response) {
            handleErrors(error.response.data.message)
          } else {
            console.error(error)
          }
        }
      )
    }
  };

  const handleBack = () => {
    enqueueSnackbar('Okey, we won´t save that...', {autoHideDuration: 1000,})
    setRecording({...recording, hasError:false, errors:{}}) //clean possible errors
    setActiveStep(activeStep - 1)
  };

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
              ? <Thanks data={recording} /> //last element.
              : <React.Fragment>
                  {
                    loading
                    ? <LinearProgress />
                    : getStepContent(activeStep, setRecording, recording)
                  }
                  <Navigation
                  steps={steps}
                  isStudent={isStudent}
                  blocked = {isSaving}
                  step={activeStep} classes={classes}
                  back={handleBack} next={handleNext} />
                </React.Fragment>
            }
          </React.Fragment>
        </Paper>
        {!isStudent && id && activeStep < 1  && <GoToCreate/>}
        <GoBack />
      </main>
    </React.Fragment>
  );
}

export function GoToCreate() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"This is not what you are looking for?, "}
      <Link color="primary" component={AdapterLink} to="/new-record" >
        Click here
      </Link>
      {', and Go to create a new recording.'}
    </Typography>
  );
}

function IntegrationNotistack(props) {
  return (
    <SnackbarProvider maxSnack={3}>
      <Checkout {...props}/>
    </SnackbarProvider>
  );
}

export default withAuthConsumer(IntegrationNotistack)