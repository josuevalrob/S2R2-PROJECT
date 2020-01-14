import React from 'react'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import validations from './../../utils/validations'; //{...}
// import {isEmpty} from 'lodash'
import { emptyRecording } from './Checkout';

class Settings extends React.Component { //update to hooks. 
  state = {
    content : this.props.recording.id ? this.props.recording : emptyRecording, 
    errors: {
      name: this.props.recording.name ? undefined : validations.name(), 
      studentA: this.props.recording.studentA ? undefined : validations.studentA(), 
      studentB: this.props.recording.studentB ? undefined : validations.studentB(), 
    }
  }
  
  hasErrors = () => {
    const { content } = this.state;
    return Object.keys(content)
      .some(name => {
        let value = content[name];
        return validations[name] && validations[name](value)
      })
  }

  componentDidUpdate(prevProps, prevState) { // TODO: testing!
    if(this.props.recording.id !== prevProps.recording.id) { //handling server response. 
      this.setState({content:this.props.recording, errors:{}}) // fill&clean
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    const {content, errors} = this.state;
    this.setState({
      content: {
        ...content,
        [name]: value
      },
      errors: {
        ...errors,
        [name]: validations[name] && validations[name](value)
      }
    }, () => {
      const {content, errors} = this.state; 
      ! this.hasErrors() //if doesn't have errors. 
      ? this.props.fn({...content, students : [content.studentA, content.studentB]})
      : this.props.fn({...content, hasError: true, errors}) //should be removed this key?
    })
  }

  render () {
    const {content} = this.state;
    console.log(content)
    return (
      <Container component="main" maxWidth="xs">
      <div >      
        {/* <form  noValidate> */}
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                onChange={this.handleChange}
                value={content.name}
                error={this.state.errors.name ? true : false}
                variant="outlined"
                fullWidth
                id="name"
                name="name"
                label="Recording Name"
                autoComplete="fname"
              />
            </Grid>            
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={this.handleChange}
                value={content.studentA}
                error={this.state.errors.studentA ? true : false}
                autoComplete="fstudent"
                name="studentA"
                variant="outlined"
                required
                fullWidth
                id="studentA"
                label="First Student"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={this.handleChange}
                value={content.studentB}
                error={this.state.errors.studentB ? true : false}
                variant="outlined"
                required
                fullWidth
                id="studentB"
                label="Second Student"
                name="studentB"
                autoComplete="sstudent"
              />
            </Grid>            
            <Grid item xs={12}>
              <TextField
                onChange={this.handleChange}
                value={content.comments}
                variant="outlined"
                fullWidth
                id="comments"
                label="Some extra comments"
                name="comments"
                rows = "4"
                multiline={true}
                autoComplete="fcomments"
              />
            </Grid>
          </Grid>
        {/* </form> */}
      </div>
    </Container>
    );
  }
}

export default Settings