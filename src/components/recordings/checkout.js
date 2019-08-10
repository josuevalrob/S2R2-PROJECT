import React from 'react';
import useStyles from './../../styles/stepForm'
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import getStepContent from './getStepContent'

const steps = ['Create it', 'Before talking', 'Talking', 'After talking', 'Socio Affective', 'Future Recordings'];

export default function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => setActiveStep(activeStep + 1);;

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
              : <Navigation 
                step={activeStep} classes={classes} 
                back={handleBack} next={handleNext} />
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

const Navigation = ({step, classes, back, next}) => (
    <React.Fragment>
    {getStepContent(step)}
    <div className={classes.buttons}>
      {step !== 0 && (
        <Button onClick={back} className={classes.button}>
          Back
        </Button>
      )}
      <Button
        variant="contained"
        color="primary"
        onClick={next}
        className={classes.button}
      >
        {step === steps.length - 1 ? 'Place order' : 'Next'}
      </Button>
    </div>
  </React.Fragment> 
)

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Extra space for extra  '}
      {/* <Link color="inherit" href="https://material-ui.com/">
        Content
      </Link> */}
      {' Content.'}
    </Typography>
  );
}