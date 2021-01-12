import React from 'react'
import FormList from './../misc/FormList'
import {cognitiveValues} from '../../utils/cognitiveTest'//arry with keys. 
import TabHoc from './../misc/TabHoc'

export const arrToObj = (arr) => arr.reduce((obj, item) => {
  obj[item.key] = item.value //[,before, after]
  return obj
}, {})

const Regulation = ({recording, fn, stage}) => {
  const {cognitive, labels} =  recording; //[{},{}]
  const [isLoad, load] = React.useState(false)

  const [itemsArr, dispatch] = React.useReducer((state, {type, payload})=>{
    let cognitiveSkills = null
    switch (type){
      case 0: //student A
        cognitiveSkills = [{...state[0], ...payload }, state[1]]
        break
      case 1: //student B
        cognitiveSkills = [state[0],{...state[1], ...payload }]
        break
      case 'fill':
        cognitiveSkills = payload //from  parent. 👴🏾
        load(true)
        break
      case 'preFill':
        cognitiveSkills = state //everything is false, forcing the error
        break
      default:
        cognitiveSkills = state;
    }
    //update the recording from the parent. 🎶
    fn(updateParent(recording, cognitiveSkills, stage))
    return cognitiveSkills;
  }, [arrToObj(cognitiveValues), arrToObj(cognitiveValues)]); // [{...studentA}, {...studentB}] 👣
  
  React.useEffect(()=>{ //!test 🧐
    if(cognitive && cognitive.length && !isLoad){
      dispatch({type: 'fill', payload: cognitive})
    } else {
      dispatch({type: 'preFill', payload: []})
    }
  }, [cognitive, isLoad])

  const handleChange = (key, student) => event => {
    dispatch({
      type: student,
      payload:{
        [key]:itemsArr[student][key].map((e, i)=>i===stage ? !e : e)
      }});
  };

  const tabContent = [
    {student:0, obj:itemsArr[0], handle:handleChange, arr: cognitiveValues, stage},
    {student:1, obj:itemsArr[1], handle:handleChange, arr: cognitiveValues, stage},
  ];
  return TabHoc(FormList, labels, tabContent)
}

export default Regulation //4 renders... 🧐

const hasCornitivesErrors = (cognitive, stage) => 
  cognitive
    .map(obj => delete obj._id && obj) //clean _id prop. 
    .map(obj => Object.values(obj).some(ar => ar[stage]))
    .some(bool => !bool) //check if one boolean is false

const updateParent = (recording, cognitiveSkills, stage ) => ({
  ...recording,
  ...(hasCornitivesErrors(cognitiveSkills, stage) 
    ? { hasError:true, 
        errors: {
        cognitive: 'At least one value should be selected for both students.'
      }}
    : { hasError:false, cognitive: cognitiveSkills})
}) 