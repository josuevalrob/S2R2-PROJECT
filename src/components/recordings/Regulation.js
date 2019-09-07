import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import useStyles from '../../styles/forms'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from '../misc/TabPanel'
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import cognitiveValues from '../../utils/cognitiveTest'//arry with keys. 
// import {useRenderCounter} from '../../utils/useRenderCounter'

const  a11yProps = i => ({ id: `simple-tab-${i}`, 'aria-controls': `simple-tabpanel-${i}`});

const arrToObj = cognitiveValues.reduce((obj, item) => {
    obj[item.key] = item.value[0] //[before, after]
    return obj
  }, {})

const Regulation = ({recording, fn}) => {  
  const classes = useStyles();  
  const [student, setStudent] = React.useState(0); //Tabs navigation 🚢
  const {cognitive, studentA, studentB} =  recording; //[{},{}]  
  const [isLoad, load] = React.useState(false)
  
  const [itemsArr, dispatch] = React.useReducer((state, action)=>{
    //first element => A student 👩‍🎓, second element => B student 👨🏼‍🎓
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
    if(cognitive && !isLoad){ //generate one render more 🤔
      dispatch({type: 'fill', value: cognitive})
    }
  }, [cognitive, isLoad])

  const handleChange = (name, type) => event => {
    dispatch({type, name, value:event.target.checked});
  };

  const handleTab = (event, newValue) => setStudent(newValue);

  return (
    <Container component="main">
        <CssBaseline />
        <div className={classes.paper}>
          <AppBar position="static" color="default" >
            <Tabs
              value={student}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              onChange={handleTab}
            >
              <Tab label={studentA} {...a11yProps(0)}  />
              <Tab label={studentB} {...a11yProps(1)} />
            </Tabs>
          </AppBar>
          <TabPanel value={student} index={0}>
            <Grid container spacing={3}>
              <Form student='A' elem={itemsArr[0]} handle={handleChange} />
            </Grid>
          </TabPanel>
          <TabPanel value={student} index={1}>
            <Grid container spacing={3}>
              <Form student='B' elem={itemsArr[1]} handle={handleChange} />
            </Grid>
          </TabPanel>
        </div>  
    </Container>  
  )
}

const Form = ({elem, handle, student}) => (
  <FormGroup row>
    {cognitiveValues.map((e,i) => {
      return (        
      <Grid item xs={6} key={i}>
        <FormControlLabel
        control={
          <Switch
            checked={elem[e.key][0] ? true : false}
            value={elem[e.key][0] ? true : false}
            onChange={handle(e.key, student)}
            color="primary"
          />
        }
        label={e.label}/>
      </Grid>
    )})}
  </FormGroup>
)

export default React.memo(Regulation) //from 6 to 4 renders... 🧐