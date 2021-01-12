import React from 'react'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import validations from './../../utils/validations'; //{...}
import UserService from '../../services/Users.Services';
import { emptyRecording } from './Checkout';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import LinearProgress from '@material-ui/core/LinearProgress';

class Settings extends React.Component { //update to hooks. 
  state = {
    content : this.props.recording.id ? this.props.recording : emptyRecording,
    users: [],
    loading: true,
    errors: {
      name: this.props.recording.name ? undefined : validations.name(),
      studentA: this.props.recording.studentA ? undefined : validations.studentA(),
      studentB: this.props.recording.studentB ? undefined : validations.studentB(),
    }
  }

  componentDidMount() {
    UserService.getData()
      .then(users => {
        this.setState({users, loading:false});
      })
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
    const {content, users, loading} = this.state;
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
            { !!loading ? <LinearProgress /> :
              !users.length ? <div style={{textAlign:'center'}}> First, please add some users </div> :
            <>
            <Grid item xs={12} sm={6}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel id="studentA-label" style={{background:'#fff'}}>
                  First Student
                </InputLabel>
                <Select
                  labelId="studentA-label"
                  id="studentA"
                  name="studentA"
                  value={content.studentA}
                  onChange={this.handleChange}
                  label="First Student"
                  required
                >
                  {users.map(({id, name, lastName}) =>
                    <MenuItem key={id} value={id} >{`${name} ${lastName}`}</MenuItem>
                  )}

                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel id="studentB-label" style={{background:'#fff'}}>Second Student</InputLabel>
                <Select
                  labelId="studentB-label"
                  id="studentB"
                  name="studentB"
                  value={content.studentB }
                  onChange={this.handleChange}
                  label="Second Student"
                  required
                >
                  {users.map(({id, name, lastName}) =>
                    <MenuItem key={id} value={id} >{`${name} ${lastName}`}</MenuItem>
                  )}
                </Select>
              </FormControl>
            </Grid>
            </>
            }
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