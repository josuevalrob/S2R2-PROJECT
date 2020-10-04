import React from 'react';
import withFormPage from './withFormPage';
import formsService from '../../services/forms.services'
import { withAuthConsumer } from '../../contexts/AuthStore';
import useStyles from '../../styles/forms';
import {useForm} from '../../hooks';
import Typography from '@material-ui/core/Typography';
import Form from './form';


const Efl = ({user}) => {
  const {data:{id}} = user;
  const classes = useStyles();
  const update = formsService.updateElf(id);
  const get = formsService.readElf(id);
  const { ...fields } = useForm({update, get});


  return (
    <React.Fragment>
      <Typography component="h1" variant="h5">
        {'Este cuestionario ha sido diseñado para estudiantes de inglés como lengua extranjera que participan en conversaciones por pareja. Por favor lee cada enunciado y selecciona la respuesta marcando con una X la casilla (1,2,3,4,5) que más se acerque a tu realidad.'}
      </Typography>
      <Form {...fields} classes={classes} />
    </React.Fragment>
  )
}


export default withAuthConsumer(withFormPage(Efl));