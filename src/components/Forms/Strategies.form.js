import React, { useEffect } from 'react';
import withFormPage from './withFormPage';
import formsService from '../../services/forms.services'
import { withAuthConsumer } from '../../contexts/AuthStore';
import useStyles from '../../styles/forms';
import {useForm} from '../../hooks';
import Form from './form';

const Strategies = ({user}) => {
  const {data:{id}} = user;
  const classes = useStyles();
  const update = formsService.updateStr(1)(id);
  const get = formsService.readStr(1)(id);
  const { fetchData, ...fields } = useForm({update, get});

  useEffect(()=>{fetchData();}, []);

  return <Form {...fields} classes={classes}  />
}


export default withAuthConsumer(withFormPage(Strategies));