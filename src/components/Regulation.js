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
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Box from '@material-ui/core/Box';
// import Typography from '@material-ui/core/Typography';


export default function Regulation() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = name => event => {
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
                    <Grid item xs={12} sm={6}>
                      <FormGroup row>
                        <FormControlLabel
                          control={
                            <Switch
                              checked={state.checkedB}
                              onChange={handleChange('checkedB')}
                              value="checkedB"
                              color="primary"
                            />
                          }
                          label="Primary"
                          labelPlacement="start"/>                        
                      </FormGroup>
                    </Grid>
                  </Grid>
          </form>
        </div>  
    </Container>  
  )
}