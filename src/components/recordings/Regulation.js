import React from 'react'
import FormList from './../misc/FormList'
import cognitiveValues from '../../utils/cognitiveTest'//arry with keys. 
import TabHoc from './../misc/TabHoc'
// import {useRenderCounter} from '../../utils/useRenderCounter'

const arrToObj = cognitiveValues.reduce((obj, item) => {
    obj[item.key] = item.value[0] //[before, after]
    return obj
  }, {})

const Regulation = ({recording, fn}) => {  
  const {cognitive, studentA, studentB} =  recording; //[{},{}]  
  const [isLoad, load] = React.useState(false)
  
  const [itemsArr, dispatch] = React.useReducer((state, action)=>{
    let newState = null
    switch (action.type){
      case 'A': 
        newState = [{...state[0], [action.name]: [action.value] }, state[1]]
        break
      case 'B': 
        newState = [state[0],{...state[1], [action.name]: [action.value] }]
        break
      case 'fill': 
        newState = action.value //from  parent. 👴🏾
        load(true)
        break
      default: 
        newState = state;
    }
    fn({...recording, cognitive: newState}) //update the recording from the parent. 🎶
    return newState;
  }, [arrToObj, arrToObj]); // [{...studentA}, {...studentB}] 👣 

  

  React.useEffect(()=>{
    if(cognitive && cognitive.length && !isLoad){ //generate one render more 🤔
      dispatch({type: 'fill', value: cognitive})
    }
  }, [cognitive, isLoad])

  const handleChange = (name, type) => event => {
    dispatch({type, name, value:event.target.checked});
  };

  const tabContent = [
    {student:'A', obj:itemsArr[0], handle:handleChange, arr: cognitiveValues },
    {student:'A', obj:itemsArr[1], handle:handleChange, arr: cognitiveValues },
  ]

  const tabLabel = [{label:studentA},{label:studentB}]
  return TabHoc(FormList, tabLabel, tabContent)
}


export default Regulation //4 renders... 🧐