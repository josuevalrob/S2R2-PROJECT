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
  }, [
      {feel: '', help : undefined, audioId: undefined},
      {feel: '', help: undefined, audioId: undefined}
    ]); // [{...studentA}, {...studentB}] 👣

  React.useEffect(()=>{ //!test 🧐
    if(socioAffective && socioAffective.length && !isLoad){
      dispatch({type: 'fill', payload: socioAffective})
    }
  }, [socioAffective, isLoad])

  const handleChange = (event, student, type) => {
    const name = event.target.value
    dispatch({
      type: student,
      payload : {
        [type]: type === 'help'
          ? name === 'yes' //help value can only be yes or no
          : name
      }
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
      value: itemsArr[i] && itemsArr[i].feel,
    },
    handle: handleChange,
    help: {
      value: itemsArr[i] && typeof itemsArr[i].help !== "undefined" && (itemsArr[i].help ? 'yes' : 'no'),
    },
    callback: fn,
    data: recording
  }));
  return TabHoc(Questions, labels, tabContent)
}

const Questions = ({ questions, feel, handle, help, callback, data, index}) =>{
  return (
    <>
      <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
          <h3>{questions.feel}</h3>
          <OptionList {...{...feel, handle}}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <h3>{questions.help}</h3>
          <FormGroup row>
            <RadioGroup 
              name={feel.student} 
              value={help.value} 
              onChange={(e)=> handle(e, feel.student, 'help')} >
              <FormControlLabel value='yes' control={<Radio />} label="Yes, they did" />
              <FormControlLabel value='no' control={<Radio />} label="No, they didn't" />
            </RadioGroup>
          </FormGroup>
        </Grid>
      </Grid>
      <Grid >
        <FormGroup row>
            <Talking
              recording={data}
              {...affectiveTalking(data, index, handle)}
            />
          </FormGroup>
      </Grid>
    </>
  )
}

const affectiveTalking = (data, index, handle) => {
  const getQuery = (i, audioName) => {
    const {socioAffective} = data;
    return {
      audioName,
      query: {
        socioAffective : !!i
        // Student B
        ? [socioAffective[0], {...socioAffective[1], ...{audioId:audioName} }]
        // Student A
        : [{...socioAffective[0], ...{audioId:audioName} }, socioAffective[1]]
      },
    }
  }

  return {
    audioId: data.socioAffective.length && data.socioAffective[index] && data.socioAffective[index].audioId,
    title: `Feedback: \n ${data.labels[index]}`,
    error : {...data, socioAffective: {}, hasError: false, errors:{}},
    updateQuery: getQuery(index, v4()),
    deleteQuery: data.socioAffective.length && data.socioAffective[index] && getQuery(index, data.socioAffective[index].audioId),
    callback: (newRecor) => {
      handle(
        { target: { value: newRecor.socioAffective[index].audioId } },
        !!index?'B':'A',
        'audioId'
      )
    },
  }
}

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
