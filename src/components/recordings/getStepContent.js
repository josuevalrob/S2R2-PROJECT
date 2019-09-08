import React from 'react'
import Regulation from './Regulation'
import Create from './Create'
import Talking from './Talking'
import Affective from './Affective'
import Future from './Future'

function getStepContent(step, callback, data) {
  switch (step) {
    case 0: //* Create
      return <Create fn={callback} recording={data}/>;
    case 1: //* Before talking
      return <Regulation before fn={callback} recording={data}/>;
    case 2: //* Talking
      return <Talking fn={callback} recording={data}/>;
    case 3: //* After talking
      return <Regulation after fn={callback} recording={data}/>;
    case 4: //* Socio Afective
      return <Affective fn={callback}/>;
    case 5: //* Future
      return <Future fn={callback}/>;
    default:
      throw new Error('Unknown step');
  }
}

export default getStepContent