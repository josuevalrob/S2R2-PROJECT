import React from 'react'
import Typography from '@material-ui/core/Typography';
import TabHoc from './../misc/TabHoc'
import {cognitiveValues, affectivesValues} from './../../utils/cognitiveTest'
import {findLabel} from './../../utils/handlingData'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {AudioPlayer} from './Talking'
const findLabelInCgntVal = findLabel(cognitiveValues)
// const findLabelInAffectVal = findLabel(affectivesValues)

const Thanks = ({data}) => {
  const {name, labels} =  data; //[{},{}] 
  const tabContent = treatData(data)
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        {`Thank you for your participation in ${name}.`}
      </Typography>
      <Typography variant="subtitle1">
        Here you will see all your inputs and have a discussion with your teacher and partner
      </Typography>
      {TabHoc(TabBody, labels, tabContent)}
    </React.Fragment>
  )
}
export default Thanks

const TabBody = ({before_talking, talking, help, after_talking, socio_affective, future}) => (
  <Container >
  <Grid container >
    <GridItem data={before_talking} />
    <Grid item xs={12} >
      <h3 style={{marginBottom:0}}>{talking.label}</h3>
      <AudioPlayer audio={talking.content} />
    </Grid>
    <GridItem data={after_talking} />
    <GridItem data={socio_affective} />
    <GridItem data={help} />
    <GridItem data={future} />
  </Grid>
  </Container>
)

const GridItem = ({data:{label, content}}) => (
  <Grid item xs={12} >
    <h3 style={{marginBottom:0}}>{label}</h3>
    <List style={{paddingTop:0}} dense>
      {content.map((e, i) => 
        <ListItem key={i}>
          <ListItemText primary={e}/>
        </ListItem>,
      )}
    </List>
  </Grid>
)

const treatData = (data) => 
  data.students.map((std, i) => {
    let findLabelPerStepWithCgntVal = findLabelInCgntVal(data.cognitive, i)
    let feelingKey = data.socioAffective[i].feel
    return {
      before_talking: {
        label: 'The strategies you chose before talking 🧐',
        content: findLabelPerStepWithCgntVal(0)
      },
      talking: {
        label: "Let's play your recording 🎶",
        content: data.audioId
      }, 
      after_talking : {
        label: 'The strategies you really applied',
        content: findLabelPerStepWithCgntVal(1)
      },
      socio_affective : {
        label: 'How did you feel when using strategies?',
        content: [affectivesValues.find(o => o.key === feelingKey).label]
      },
      help : {
        label: 'Did they help you to talk to your partner?',
        content: !!data.socioAffective[0].help
          ? ['Yes, they did']
          : ["No, they didn't"]
      },
      future: {
        label: 'What is the plan for the next time?',
        content: findLabelPerStepWithCgntVal(2)
      }
    }
  })