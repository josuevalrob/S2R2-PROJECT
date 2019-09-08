import React from 'react'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';

const FormList = ({arr, obj, handle, student}) => ( // [...], {...}, fn(), '...'
  <FormGroup row>
    {arr.map((e,i) => { //? can I loop with obj?? 🤔
      return (        
      <Grid item xs={6} key={i}>
        <FormControlLabel
        control={
          <Switch
            checked={obj[e.key][0] ? true : false}
            value={obj[e.key][0] ? true : false}
            onChange={handle(e.key, student)}
            color="primary"
          />
        }
        label={e.label}/>
      </Grid>
    )})}
  </FormGroup>
)

export default FormList