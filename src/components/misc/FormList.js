import React from 'react'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';

const FormList = ({arr, obj, handle, student, stage}) => ( // [{...}], {...}, fn(), '...' 
  <FormGroup row>
    {arr.map((e,i) => { 
      let val = obj[e.key][stage] ? true : false
      return (        
      <Grid item xs={6} key={i}>
        <FormControlLabel
        control={
          <Switch
            checked={val}
            value={val}
            onChange={handle(e.key, student, stage)}
            color="primary"
          />
        }
        label={e.label}/>
      </Grid>
    )})}
  </FormGroup>
)

export default FormList