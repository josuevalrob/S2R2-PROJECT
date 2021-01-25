import React from 'react'
import Regulation from './Regulation'
import Create from './Create'
import Talking from './Talking'
import Affective from './Affective'
import { v4 } from 'uuid';

function getStepContent(step, callback, data) {
  switch (step) {
    case 0: //* Create
      return <Create fn={callback} recording={data}/>;
    case 1: //* Before talking
      return <Regulation stage={0} fn={callback} recording={data}/>;
    case 2: //* Talking
      const audioName = v4();
      return <Talking fn={callback} recording={data} updateQuery={{audioId:audioName}}/>;
    case 3: //* After talking
      return <Regulation stage={1} fn={callback} recording={data}/>;
    case 4: //* Socio Afective
      return data.students && <Affective fn={callback} recording={data}/>;
    case 5: //* Future
      return <Regulation stage={2} fn={callback} recording={data}/>;
    default:
      throw new Error('Unknown step');
  }
}

export default getStepContent