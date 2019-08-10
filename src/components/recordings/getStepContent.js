import React from 'react'
import Regulation from './Regulation'
import Create from './Create'
import Talking from './Talking'
import After from './After'
import Affective from './Affective'
import Future from './Future'

function getStepContent(step) {
  switch (step) {
    case 0: //* Create
      return <Create />;
    case 1: //* Before talking
      return <Regulation />;
    case 2: //* After talking
      return <Talking />;
    case 3: //* Talking
      return <After />;      
    case 4: //* Socio Afective
      return <Affective />;
    case 5: //* Future
      return <Future />;
    default:
      throw new Error('Unknown step');
  }
}

export default getStepContent