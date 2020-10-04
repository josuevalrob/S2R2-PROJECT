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
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import FormGroup from '@material-ui/core/FormGroup';
import useStyles from '../../styles/forms';
import {useForm, fieldsMapper} from '../../hooks';



const Efl = ({user}) => {
  const {data:{id}} = user;
  const classes = useStyles();
  const update = formsService.updateElf(id);
  const get = formsService.readElf(id);
  const { values, error, isLoading, handleChange, handleSubmit, fetchData } = useForm({update, get});

  useEffect(()=>{fetchData();}, [])

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      { isLoading
      ? <LinearProgress className={classes.progress} color="secondary" />
      : !values.length
        ? !!error && <div> {error} </div>
        : <div className={classes.paper}>
          <form className={classes.form} onSubmit={handleSubmit} autoComplete="off">
          <Grid container spacing={2}>
            {
              values.map(obj => (
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