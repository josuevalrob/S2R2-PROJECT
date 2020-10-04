import React, { useEffect } from 'react';
import withFormPage from './withFormPage';
import formsService from '../../services/forms.services'
import { withAuthConsumer } from '../../contexts/AuthStore';
import useStyles from '../../styles/forms';
import {useForm} from '../../hooks';
import Form from './form';
import Typography from '@material-ui/core/Typography';

const Emotions = ({user}) => {
  const {data:{id}} = user;
  const classes = useStyles();
  const update = formsService.updateEmotion(id);
  const get = formsService.readEmotion(id);
  const { fetchData, ...fields } = useForm({update, get});

  useEffect(()=>{fetchData();}, []);

  return (
  <React.Fragment>
    <Typography variant="body1" gutterBottom >
      {'Scenario 1: You and your partner have to talk in English AND your teacher will check what you are saying.'}
    </Typography>
    <Form {...fields} classes={classes} />
  </React.Fragment>
  )
}


export default withAuthConsumer(withFormPage(Emotions));