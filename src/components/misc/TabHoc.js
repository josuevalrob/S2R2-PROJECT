import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import useStyles from '../../styles/forms'
import Tabs from '@material-ui/core/Tabs';
import AppBar from '@material-ui/core/AppBar';
// import {useRenderCounter} from '../../utils/useRenderCounter'

// const  a11yProps = i => ({ id: `simple-tab-${i}`, 'aria-controls': `simple-tabpanel-${i}`});

const Regulation = (Component, label, Content) => {  
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
              {/* //* EXAMPLE */}
              {/* <Tab label={studentA} {...a11yProps(0)}  /> */}
            </Tabs>
          </AppBar>
          {/* //* EXAMPLE */}
          {/* <TabPanel value={student} index={0}>
            <Grid container spacing={3}>
              <Form student='A' elem={itemsArr[0]} handle={handleChange} />
            </Grid>
          </TabPanel> */}
        </div>  
    </Container>  
  )
}


export default React.memo(Regulation) //from 6 to 4 renders... 🧐