import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import useStyles from '../../styles/forms'
import Tabs from '@material-ui/core/Tabs';
import AppBar from '@material-ui/core/AppBar';
import TabPanel from '../misc/TabPanel'
import Grid from '@material-ui/core/Grid';
import Tab from '@material-ui/core/Tab';
const a11yProps = i => ({ id: `simple-tab-${i}`, 'aria-controls': `simple-tabpanel-${i}`});

const TabHoc = (Component, labels, content) => {  //* </> [...] [...]
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
              {labels.map((l, i) => (
                <Tab key={i} label={l} {...a11yProps(i)}  />
              ))}
            </Tabs>
          </AppBar>
          {content.map((f, i) => (
            <TabPanel value={student} index={i} key={i} style={{width:'100%'}}>
              <Grid container spacing={3}>
                {/* weird problem with audio recorder */}
                {i === student && <Component {...f}  index = {i}  />}
                {/* <Component {...f}  index = {i}/> */}
              </Grid>
            </TabPanel>
          ))}
        </div>
    </Container>
  )
}

export default TabHoc