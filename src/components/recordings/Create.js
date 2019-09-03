import React from 'react'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import validations from './../../utils/validations'
// import {isEmpty} from 'lodash'
import { emptyRecording } from './Checkout';

class Settings extends React.Component {
  state = {
    content : this.props.recording.id ? this.props.recording : emptyRecording, 
    errors: {
      name: validations.name(''), 
      studentA: validations.studentA(''), 
      studentB: validations.studentB(''), 
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
    console.log(this.props.recording.id, prevProps.recording.id)
    if(this.props.recording.id !== prevProps.recording.id) { //handling server response. 
      this.setState({content:this.props.recording}) // fill&clean
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
      ! this.hasErrors() 
      ? this.props.fn({...content, students : [content.studentA, content.studentB]})
      : this.props.fn(emptyRecording)
    })
  }

  render () {
    const {content} = this.state;
    return (
      <Container component="main" maxWidth="xs">
      <div >      
        <form  noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                onChange={this.handleChange}
                value={content.name}
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
                label="Some extra coments"
                name="comments"
                rows = "4"
                multiline={true}
                autoComplete="fcomments"
              />
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
    );
  }
}

export default Settings