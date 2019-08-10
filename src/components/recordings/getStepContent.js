import React from 'react'
import Regulation from './Regulation'

function getStepContent(step) {
  switch (step) {
    case 0: //* Create
      return <Regulation />;
    case 1: //* Before talking
      return <Regulation />;
    case 2: //* After talking
      return <Regulation />;
    case 3: //* Talking
      return <Regulation />;      
    case 4: //* Socio Afective
      return <Regulation />;
    case 5: //* Future
      return <Regulation />;
    default:
      throw new Error('Unknown step');
  }
}

export default getStepContent