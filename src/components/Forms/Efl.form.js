import React, {useState, useEffect} from 'react';
import withFormPage from './withFormPage';
import formsService from '../../services/forms.services'
import { withAuthConsumer } from '../../contexts/AuthStore';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import FormGroup from '@material-ui/core/FormGroup';
import useStyles from '../../styles/forms';

export const fieldsMapper = data => data.labels.map(label => ({...label, value: data.questions[label.key]}))

const Efl = ({user}) => {
  const {data:{id}} = user;
  const classes = useStyles();
  const [isLoading, setLoader] = useState(false)

  const [data, setData] = useState([]);
  const [error, setError] = useState('Fetching field forms')

  const fetchData = async () => {
    setLoader(true);
    const response= await formsService.readElf(id);
    const fields = fieldsMapper(response)
    if(!fields.length) {
      setError('We can not fetch the field forms')
    } else {
      setData(fields);
      setLoader(false);
    }
  }

  const handleSubmit = (event) => {
    setLoader(true);
    event.preventDefault();
    const questions = data.reduce((ac, cr) => ({...ac, ...{ [cr.key] : cr.value } }), {})
    debugger
    formsService.updateElf(id)(questions)
      .then(response => {
        const fields = fieldsMapper(response)
        setData(fields);
        setLoader(false);
      })
      .catch(error => {
        debugger
      })
  }

  const handleChange = name => event => {
    const index = data.findIndex(x => x.key === name);
    const update = [...data];
    update[index].value = event.target.value;
    setData(update)
  }

  useEffect(()=>{fetchData();}, [])

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      { isLoading
      ? <LinearProgress className={classes.progress} color="secondary" />
      : !data.length
        ? !!error && <div> {error} </div>
        : <div className={classes.paper}>
          <form className={classes.form} onSubmit={handleSubmit} autoComplete="off">
          <Grid container spacing={2}>
            {
              data.map(obj => (
                  <Grid item xs={12} key={obj.key}>
                    {
                      obj.options && !!obj.options.length
                      ? <FormGroup row>
                          <FormLabel component="legend">{obj.label}</FormLabel>
                          <RadioGroup row name={user.role} value={obj.value} onChange={handleChange(obj.key)} >
                            {obj.options.map((option) => (
                              <FormControlLabel key={option} value={option} control={<Radio />} label={option} />
                            ))}
                          </RadioGroup>
                        </FormGroup>
                      : <TextField
                          autoComplete="off"
                          name={obj.key}
                          onChange={handleChange(obj.key)}
                          value={obj.value}
                          variant="outlined"
                          // required
                          fullWidth
                          id={obj.key}
                          label={obj.label}
                          autoFocus
                        />
                    }
                  </Grid>
                )
              )
            }
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {'Save'}
          </Button>
          </form>
          </div>
      }
    </Container>
  )
}


export default withAuthConsumer(withFormPage(Efl));