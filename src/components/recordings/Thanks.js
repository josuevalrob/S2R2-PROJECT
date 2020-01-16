import React from 'react'
import Typography from '@material-ui/core/Typography';
import TabHoc from './../misc/TabHoc'
import {cognitiveValues} from './../../utils/cognitiveTest'

const Thanks = ({data}) => {
  const {studentA, studentB, name, students, cognitive} =  data; //[{},{}]  
  const tabLabel = [{label:studentA},{label:studentB}]
  const tabContent = treatData(students, cognitive)
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        {`Thank you for your participation in ${name}.`}
      </Typography>
      <Typography variant="subtitle1">
        Here you will see all your inputs and have a discussion with your teacher and partner
      </Typography>
      {TabHoc(Questions, tabLabel, tabContent)}
    </React.Fragment>
  )
}
export default Thanks


const Questions = (props) => (
  'hello world'
)

const findLabel = neddle => (values, i) => pst => 
  Object.keys(values[i])
    .filter(k => Array.isArray(values[i][k]))
    .filter(k => values[i][k][pst])
    .map(bftk => neddle
      .filter(cgnVl => cgnVl.key === bftk)
      .map(obj => obj.label)
    )

const findLabelInCgntVal = findLabel(cognitiveValues)

const treatData = (students, cognitive) => 
  students.map((std, i) => {
    let findLabelPerStepWithCgntVal = findLabelInCgntVal(cognitive,i)
    return {
      before_talking: {
        label: 'Which strategies did you evaluate before start talking',
        content: findLabelPerStepWithCgntVal(0)
      },
      talking: {
        label: "Let's play your recording",
        content: data.audioId
      }, 
      after_talking : {
        label: 'Check the student strategies that really did',
        content: findLabelPerStepWithCgntVal(1)
      },
      socio_affective : {
        label: 'How did you feel?',
        content: ['sad', 'haooy']
      },
      future: {
        label: 'What is the plan for the next time?',
        content: findLabelPerStepWithCgntVal(3)
      }
    }
  })