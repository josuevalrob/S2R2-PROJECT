import React from 'react'
import Regulation from './Regulation'
import Create from './Create'
import Talking from './Talking'
import After from './After'
import Affective from './Affective'
import Future from './Future'

function getStepContent(step, callback, data) {
  switch (step) {
    case 0: //* Create
      return <Create fn={callback} recording={data}/>;
    case 1: //* Before talking
      return <Regulation fn={callback}/>;
    case 2: //* After talking
      return <Talking fn={callback}/>;
    case 3: //* Talking
      return <After fn={callback}/>;      
    case 4: //* Socio Afective
      return <Affective fn={callback}/>;
    case 5: //* Future
      return <Future fn={callback}/>;
    default:
      throw new Error('Unknown step');
  }
}

export default getStepContent