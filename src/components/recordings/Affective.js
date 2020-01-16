import React from 'react'
import TabHoc from './../misc/TabHoc'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import {affectivesValues} from '../../utils/cognitiveTest'
import Grid from '@material-ui/core/Grid';

const Affective = ({recording, fn}) => {
  const {socioAffective, studentA, studentB} =  recording; //[{},{}]  
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
  }, [{feel: '', help : undefined}, {feel: '', help: false}]); // [{...studentA}, {...studentB}] 👣 

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
  const tabContent = [{ // this should be done with a .map()
    feel : {arr: affectivesValues, student:'A', value: itemsArr[0].feel, handle: handleChange}, 
    questions,
    help: {value: itemsArr[0].help, handle: handleChange}
  }, {
    feel : {arr: affectivesValues, student:'B', value: itemsArr[1].feel, handle: handleChange}, 
    questions,
    help: {value: itemsArr[1].help, handle: handleChange}    
  }]
  const tabLabel = [{label:studentA},{label:studentB}]
  return TabHoc(Questions, tabLabel, tabContent)
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
          value={props.help.value ? 'yes' : 'no'} 
          onChange={(e)=> props.help.handle(e, props.feel.student, 'help')} >
          <FormControlLabel value='yes' control={<Radio />} label="Yes, they did" />
          <FormControlLabel value='no' control={<Radio />} label="No, they didn't" />
        </RadioGroup>
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
