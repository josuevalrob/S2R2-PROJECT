import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import useStyles from './../styles/forms'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import FormHeader from './misc/FormHeader'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import cognitiveValues from './../utils/cognitiveTest'

export default function Regulation() {
  
  const classes = useStyles();
  
  const arrToObj = cognitiveValues.reduce((obj, item) => {
    obj[item.key] = item.value[0] //[before, after]
    return obj
  }, {})

  const [state, setState] = React.useState({arrToObj});

  const handleChange = name => event => {
    console.log(name, event.target.checked)
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <FormHeader 
            IconProp={LockOutlinedIcon} 
            title='Before talking' 
            style={classes.avatar} />
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormGroup row>
                  {cognitiveValues.map((e,i) => (
                    <FormControlLabel
                    key={i}
                    control={
                      <Switch
                        checked={state[e.key]}
                        value={state[e.key]}
                        onChange={handleChange(e.key)}
                        color="primary"
                      />
                    }
                    label={e.label}
                    labelPlacement="start"/>
                  ))}
                </FormGroup>
              </Grid>
            </Grid>
          </form>
        </div>  
    </Container>  
  )
}