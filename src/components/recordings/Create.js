import React from 'react'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import validations from './../../utils/validations'
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
  
  componentDidMount(){
    const {name, students, comments} = this.props.recording
    if(students && students.length >= 2)
      this.setState({name, comments, studentA: students[0], studentB: students[1]})
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      content: {
        ...this.state.content,
        [name]: value
      },
      errors: {
        ...this.state.errors,
        [name]: validations[name] && validations[name](value)
      }
    })
  }

  render () {
    console.log(this)
    return (
      <Container component="main" maxWidth="xs">
      <div >      
        <form  noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                onChange={this.handleChange}
                value={this.state.name}
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
                value={this.state.studentA}
                autoComplete="fstudent"
                name="firstStudent"
                variant="outlined"
                required
                fullWidth
                id="firstStudent"
                label="First Student"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={this.handleChange}
                value={this.state.studentB}
                variant="outlined"
                required
                fullWidth
                id="secondStudent"
                label="Second Student"
                name="secondStudent"
                autoComplete="sstudent"
              />
            </Grid>            
            <Grid item xs={12}>
              <TextField
                onChange={this.handleChange}
                value={this.state.comments}
                variant="outlined"
                fullWidth
                id="comment"
                label="Some extra coments"
                name="comment"
                rows = "4"
                multiline={true}
                autoComplete="fcomment"
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