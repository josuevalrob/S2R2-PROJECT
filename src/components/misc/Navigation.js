import React from 'react';
import Button from '@material-ui/core/Button';


const Navigation = ({step, classes, back, next, steps, blocked}) => (
    <div className={classes.buttons}>
      {step !== 0 && (
        <Button onClick={back} className={classes.button}>
          Back
        </Button>
      )}
      <Button
        disabled={blocked} //if the recording object is empty. 
        variant="contained"
        color="primary"
        onClick={next}
        className={classes.button}>
        {step === steps.length - 1 ? 'Resume' : 'Next'}
      </Button>
    </div> 
)

export default Navigation