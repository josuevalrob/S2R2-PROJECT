import React from 'react'
import AdapterLink from './../misc/Enlace'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography';

function GoBack() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"If you don't wanna be here, "}
      <Link color="inherit" component={AdapterLink} to="/">
        Click here
      </Link>
      {', and Go back to the main menu.'}
    </Typography>
  );
}

export default GoBack