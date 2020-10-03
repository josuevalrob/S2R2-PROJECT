import React, {useState, useEffect} from 'react';
import withFormPage from './withFormPage';
import formsService from '../../services/forms.services'
import { withAuthConsumer } from '../../contexts/AuthStore';

const Efl = ({user}) => {
  const {data:{id}} = user;

  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await formsService.readElf(id)
    setData(response.labels.map( label => ({...label, value: response.questions[label.key]})))
  }

  React.useEffect(()=>{fetchData()}, [])
  console.log(data)
  return <div>{'id'}</div>
}


export default withAuthConsumer(withFormPage(Efl));