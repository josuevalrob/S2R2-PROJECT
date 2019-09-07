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

const arrToObj = cognitiveValues.reduce((obj, item) => {
  obj[item.key] = item.value[0] //[before, after]
  return obj
}, {})

const  a11yProps = i => ({ id: `simple-tab-${i}`, 'aria-controls': `simple-tabpanel-${i}`});

export default function Regulation(props) {  
  const classes = useStyles();  
  const [student, setStudent] = React.useState(0);
  //first element => A student 👩‍🎓, second element => B student 👨🏼‍🎓
  const [cognitives, setCogn] = React.useState([arrToObj, arrToObj]);

  const handleChange = name => event => {
    debugger
    setCogn([...cognitives, {[name]: event.target.checked}]);
  };

  function handleTab(event, newValue) { 
    setStudent(newValue);
  }
    console.log(cognitives)
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
              <Tab label={props.recording.studentA} {...a11yProps(0)}  />
              <Tab label={props.recording.studentB} {...a11yProps(1)} />
            </Tabs>
          </AppBar>
          <TabPanel value={student} index={0}>
            <Grid container spacing={3}>
              <Form elem={cognitives[0]} handle={handleChange} />
            </Grid>
          </TabPanel>
          <TabPanel value={student} index={1}>
            <Grid container spacing={3}>
              <Form elem={cognitives[1]} handle={handleChange} />
            </Grid>
          </TabPanel>
        </div>  
    </Container>  
  )
}

const Form = ({elem, handle}) => (
  <FormGroup row>
    {cognitiveValues.map((e,i) => (        
      <Grid item xs={6} key={i}>
        <FormControlLabel
        control={
          <Switch
            checked={elem[e.key] ? true : false}
            value={elem[e.key] ? true : false}
            onChange={handle(e.key)}
            color="primary"
          />
        }
        label={e.label}/>
        {/* labelPlacement="start" */}
      </Grid>
    ))}
  </FormGroup>
)