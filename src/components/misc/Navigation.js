import React from 'react';
import Button from '@material-ui/core/Button';


const Navigation = ({step, classes, back, next, steps}) => (    
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
        className={classes.button}>
        {step === steps.length - 1 ? 'Place order' : 'Next'}
      </Button>
    </div> 
)

export default Navigation