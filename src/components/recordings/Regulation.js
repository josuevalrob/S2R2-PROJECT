import React from 'react'
import FormList from './../misc/FormList'
import {cognitiveValues} from '../../utils/cognitiveTest'//arry with keys. 
import TabHoc from './../misc/TabHoc'

export const arrToObj = (arr) => arr.reduce((obj, item) => {
  obj[item.key] = item.value //[,before, after]
  return obj
}, {})

const Regulation = ({recording, fn, before, after}) => {  
  const {cognitive, studentA, studentB} =  recording; //[{},{}]  
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
    fn({...recording, cognitive: newState}) //update the recording from the parent. 🎶
    return newState;
  }, [arrToObj(cognitiveValues), arrToObj(cognitiveValues)]); // [{...studentA}, {...studentB}] 👣 

  React.useEffect(()=>{ //!test 🧐
    if(cognitive && cognitive.length && !isLoad){ 
      dispatch({type: 'fill', payload: cognitive})
    }
  }, [cognitive, isLoad])

  const handleChange = (name, type) => event => {    
    const beforeAndAfter = (n) => {
      if(before)  return [value, itemsArr[n][name][0]]
      if(after)   return [ itemsArr[n][name][1], value]
    }
    const value = event.target.checked
    dispatch({
      type, 
      payload:{
        [name]:beforeAndAfter(name === 'A' ? 0 : 1)
      }});
  };

  const tabContent = [
    {student:'A', obj:itemsArr[0], handle:handleChange, arr: cognitiveValues, before},
    {student:'B', obj:itemsArr[1], handle:handleChange, arr: cognitiveValues, before},
  ]

  const tabLabel = [{label:studentA},{label:studentB}]
  return TabHoc(FormList, tabLabel, tabContent)
}

export default Regulation //4 renders... 🧐