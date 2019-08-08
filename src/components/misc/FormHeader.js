import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

export default function FormHeader ({IconProp, title, style}) {
  return (
    <React.Fragment>
      <Avatar className={style}>
        <IconProp />
      </Avatar>
      <Typography component="h1" variant="h5">
        {title}
      </Typography>
    </React.Fragment>
  )
} 