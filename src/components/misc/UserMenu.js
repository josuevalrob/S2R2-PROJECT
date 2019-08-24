import React from 'react';
import AdapterLink from './Enlace'
import Typography from '@material-ui/core/Typography';
import { withAuthConsumer } from '../../contexts/AuthStore';
import Link from '@material-ui/core/Link';

function UserMenu({user, onUserChange}) {
  const {data} = user
  return (
    <Typography variant="body2" color="textSecondary">
      {`Hello ${data.name}, here you can `}
      <Link color="inherit" to={`/profile/${data.id}`} component={AdapterLink}>
        edit your profile
      </Link>
      {' or simply  '}
      <Link color="inherit" to={'/'} onClick={()=> onUserChange()} component={AdapterLink}>
        logout
      </Link>
      {' from the site'}
    </Typography>
  );
}

export default withAuthConsumer(UserMenu)