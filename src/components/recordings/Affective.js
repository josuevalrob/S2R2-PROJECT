import React from 'react'
import TabHoc from './../misc/TabHoc'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import {affectivesValues} from '../../utils/cognitiveTest'
import Grid from '@material-ui/core/Grid';
import Talking from './Talking'
import { v4 } from 'uuid';

const Affective = ({recording, fn}) => {
  const {socioAffective, labels} =  recording; //[{},{}]  
  const [isLoad, load] = React.useState(false)

  const [itemsArr, dispatch] = React.useReducer((state, {type, payload})=>{
    let newState = null 
    switch (type){
      case 'A':
        newState = [{...state[0], ...payload }, state[1]]
        break
      case 'B': 
        newState = [state[0],{...state[1], ...payload }]
        break
      case 'fill': 
        newState = payload //from  parent. 👴🏾
        load(true)
        break
      default: 
        newState = state;
    }
    fn({...recording, socioAffective: newState}) //update the recording from the parent. 🎶
    return newState;
  }, [{feel: '', help : undefined}, {feel: '', help: undefined}]); // [{...studentA}, {...studentB}] 👣 

  React.useEffect(()=>{ //!test 🧐
    if(socioAffective && socioAffective.length && !isLoad){ 
      dispatch({type: 'fill', payload: socioAffective})
    }
  }, [socioAffective, isLoad])

  const handleChange = (event, student, type) => {    
    const name = event.target.value
    dispatch({
      type: student, 
      payload: type === 'feel' 
        ? {[type]: name}
        : {[type]: name === 'yes' ? true: false}
    })
  }    
  
  const questions = {
    feel: 'How did you feel when using strategies?', 
    help: 'Did they help you to talk to your partner?'
  }
  const tabContent = recording.students.map((std, i) => ({
    questions,
    feel : {
      arr: affectivesValues, 
      student:!!i?'B':'A', 
      value: itemsArr[i].feel, 
      handle: handleChange
    }, 
    help: {
      value: typeof itemsArr[i].help !== "undefined" && (itemsArr[i].help ? 'yes' : 'no'),
      handle: handleChange
    },
    callback: fn,
    data: recording
  }));
  return TabHoc(Questions, labels, tabContent)
}

const Questions = (props) => (
  <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
      <h3>{props.questions.feel}</h3>
      <OptionList {...props.feel}/>
    </Grid>
    <Grid item xs={12} sm={6}>
      <h3>{props.questions.help}</h3>
      <FormGroup row>
        <RadioGroup 
          name={props.feel.student} 
          value={props.help.value} 
          onChange={(e)=> props.help.handle(e, props.feel.student, 'help')} >
          <FormControlLabel value='yes' control={<Radio />} label="Yes, they did" />
          <FormControlLabel value='no' control={<Radio />} label="No, they didn't" />
        </RadioGroup>
      </FormGroup>
    </Grid>
    <Grid item xs={12} sm={6}>
      <FormGroup row>
          <Talking 
            fn={props.callback}
            recording={props.data}
            updateQuery={{
              ...props.data.socioAffective,
              audioId: v4()
            }}
          />
        </FormGroup>
    </Grid>
  </Grid>
)
const OptionList = ({arr, value, handle, student}) => (
  <FormGroup row>
    <RadioGroup name={student} value={value} onChange={(e)=>handle(e, student, 'feel')}>
      {arr.map( (e, i) => (
        <FormControlLabel key={i} value={e.key} control={<Radio />} label={e.label} />
      ))}
    </RadioGroup>
  </FormGroup>
)

export default Affective
