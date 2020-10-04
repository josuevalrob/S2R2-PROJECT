import React, { useEffect } from 'react';
import withFormPage from './withFormPage';
import formsService from '../../services/forms.services'
import { withAuthConsumer } from '../../contexts/AuthStore';
import useStyles from '../../styles/forms';
import {useForm} from '../../hooks';
import Form from './form';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
const Strategies = ({user}) => {
  const {data:{id}} = user;
  const classes = useStyles();
  const update = formsService.updateStr(1)(id);
  const get = formsService.readStr(1)(id);
  const { fetchData, ...fields } = useForm({update, get});
  const options = [
    '1 es “nunca o casi nunca”',
    '2 “generalmente no lo hago” (menos de la mitad de las veces),',
    '3 “a veces” (más o menos), ',
    '4 “a menudo” (más de la mitad de las veces) ',
    '5 “siempre o casi siempre”',
  ]
  useEffect(()=>{fetchData();}, []);

  return (
  <React.Fragment>
    <Typography variant="body1" gutterBottom >
      {'Este cuestionario ha sido diseñado para estudiantes de inglés como lengua extranjera que participan en conversaciones por pareja. Por favor lee cada enunciado y selecciona la respuesta marcando con una X la casilla (1,2,3,4,5) que más se acerque a tu realidad.'}
    </Typography>
    <List component="nav" aria-label="secondary mailbox folders" style={flexContainer}>
      {options.map((item, i)=>(
        <ListItem key={i}>
          <ListItemText primary={item} />
        </ListItem>
      ))}
    </List>
    <Typography variant="body1" gutterBottom >
      {'Las respuestas en cada enunciado te describen sólo a ti. No hay respuestas correctas ni incorrectas. Tómate el tiempo necesario para resolver cada ítem. Usualmente deberías tardar entre 15-20 minutos para rellenarlo. Si tienes alguna pregunta consulta con el investigador.'}
    </Typography>
    <Typography variant="h6">
      {'Durante una conversación por parejas yo…'}
    </Typography>
    <Form {...fields} classes={classes} />
  </React.Fragment>
  )
}

const flexContainer = {
  display: 'flex',
  alignItems: 'baseline',
  padding: 0,
};


export default withAuthConsumer(withFormPage(Strategies));