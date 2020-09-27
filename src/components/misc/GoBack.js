import React from 'react'
import AdapterLink from './../misc/Enlace'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography';

function GoBack() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"If you don't wanna be here, "}
      <Link color="inherit" component={AdapterLink} to="/" color={'secondary'}>
        Go back
      </Link>
      {' to the main menu.'}
    </Typography>
  );
}

export default GoBack