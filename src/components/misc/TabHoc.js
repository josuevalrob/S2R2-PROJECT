import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import useStyles from '../../styles/forms'
import Tabs from '@material-ui/core/Tabs';
import AppBar from '@material-ui/core/AppBar';
import TabPanel from '../misc/TabPanel'
import Grid from '@material-ui/core/Grid';
import Tab from '@material-ui/core/Tab';

const  a11yProps = i => ({ id: `simple-tab-${i}`, 'aria-controls': `simple-tabpanel-${i}`});

const TabHoc = (Component, label, content) => {  //* </> [...] [...]
  const classes = useStyles();  
  const [student, setStudent] = React.useState(0); //Tabs navigation 🚢  
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
              {label.map((l, i) => (
                <Tab key={i} label={l.label} {...a11yProps(i)}  />
              ))}
            </Tabs>
          </AppBar>
          {content.map((f, i) => (
            <TabPanel value={student} index={i} key={i}>
              <Grid container spacing={3}>
                <Component {...f} />
              </Grid>
            </TabPanel>
          ))}
        </div>  
    </Container>  
  )
}


export default TabHoc