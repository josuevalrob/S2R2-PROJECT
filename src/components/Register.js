import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import FormGroup from '@material-ui/core/FormGroup';
import useStyles from '../styles/forms';
import AdapterLink from './misc/Enlace';
import authService from '../services/AuthServices';
import userService from '../services/Users.Services';
import { Redirect } from 'react-router-dom';
import { withAuthConsumer } from '../contexts/AuthStore';


function Signin({match:{params:{id}}}) {
  const classes = useStyles();

  const [isAuthenticated, setAuth] = useState(false)

  const [error, setError] = React.useState('')

  const [visiblePass, setVisiblePass] = useState(false)

  const [user, setUser] = useState({email: '', password: '', name:'', lastName:'', role: 'student'})

  const fetchUser = async (id) => {
    const response = await userService.read(id);
    setUser(response);
  }

  useEffect(() => {
    if(id)
      fetchUser(id)
  }, [id])

  const handleUser = name => event => setUser({...user, [name]: event.target.value})

  const handleSubmit = (event) => {
    event.preventDefault();
    const UserRequest = !!id ?  userService.update(id) : authService.register;
    UserRequest(user)
      .then(
        (user) => setAuth(true),
        (error) => {
          const { response:{data:message} } = error;
          setError(message.message);
        }
      )
  }

  if (isAuthenticated) {
    return <Redirect to={'/students'} />
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} autoComplete="off">
          <Grid container spacing={2}>
            <Grid item xs={12}>
             <FormGroup row>
              <RadioGroup row
                name={user.role} 
                value={user.role} 
                onChange={handleUser('role')} >
                <FormControlLabel value={'teacher'} control={<Radio />} label="Teacher" />
                <FormControlLabel value={'student'} control={<Radio />} label="Student" />
              </RadioGroup>
            </FormGroup>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="off"
                name="name"
                onChange={handleUser('name')}
                value={user.name || ''}
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={handleUser('lastName')}
                value={user.lastName || ''}
                variant="outlined"
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="off"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField 
                disabled={!!id}
                onChange={handleUser('email')}
                value={user.email || ''}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="none"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleUser('password')}
                value={user.password || ''}
                variant="outlined"
                required={!id}
                fullWidth
                name="password"
                label="password"
                type={visiblePass ? "text" : "password"}
                id="password"
                autoComplete="none"
                InputProps={{
                  endAdornment: visiblePass
                    ? <Visibility onClick={()=>setVisiblePass(false)} />
                    : <VisibilityOff onClick={()=>setVisiblePass(true)} />
                 }}
              />
            </Grid>
          </Grid>
          { !!error && <div> {error} </div> }
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {!!id
              ? `Update ${user.name}`
              : `Register a new ${user.role}`
            }
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href={"/"} variant="body2" color={'secondary'}>
                {'Cancel and go back'}
              </Link>
            </Grid>
            {!id &&
              <Grid item>
                <Link to="/students" component={AdapterLink}  variant="body2">
                  {"Do you wanna check if the user exist?"}
                </Link>
              </Grid>
            }
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default withAuthConsumer(Signin)