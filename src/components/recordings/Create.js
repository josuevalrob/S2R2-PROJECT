import React from 'react'
import useStyles from './../../styles/forms'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

export default function Create (props) {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>      
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="comment"
                label="Some extra coments"
                name="comment"
                rows = "4"
                multiline={true}
                autoComplete="fcomment"
              />
            </Grid>            
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fstudent"
                name="firstStudent"
                variant="outlined"
                required
                fullWidth
                id="firstStudent"
                label="First Student"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="secondStudent"
                label="Second Student"
                name="secondStudent"
                autoComplete="sstudent"
              />
            </Grid>            
          </Grid>
        </form>
      </div>
    </Container>
  );
}
