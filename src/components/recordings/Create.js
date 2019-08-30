import React from 'react'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import validations from './../../utils/validations'
import {isEqual, isEmpty} from 'lodash'
// import { ThemeContext } from './Checkout';

class Settings extends React.Component {
  // static contextType = ThemeContext
  state = {
    content : {
      name: '',
      comments: '',
      studentA: '', 
      studentB:  '',
    }, 
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
  componentDidMount(){
    const {name, students, comments} = this.props.recording  
    if(students &&  students.length >= 2)
      this.setState({content:{name, comments, studentA: students[0], studentB: students[1]}})
  }

  componentDidUpdate(prevProps) {    
    if(!isEqual(this.props.recording, prevProps.recording) && isEmpty(this.props.recording)) {
      this.setState({
        content : {
          name: '',
          comments: '',
          studentA: '', 
          studentB:  '',
        } 
      })
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
      : this.props.fn({})
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

// Settings.contextType = ThemeContext

export default Settings