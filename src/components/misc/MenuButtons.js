import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AdapterLink from './Enlace'
const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  leftIcon: {
    marginRight: theme.spacing(1),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  iconSmall: {
    fontSize: 20,
  },
}));

export default function MenuBUttons({buttons}) {
  const classes = useStyles();

  return (
    <div>
      {
        buttons.map(({label,Icon,link}, index) => (
          <Button
            to={link}
            key={index}
            component={AdapterLink}
            variant="contained"
            color={!index ? "primary" : "default" }
            className={classes.button}
          >
            {label}
            <Icon className={classes.rightIcon} />
          </Button>
        ))
      }
    </div>
  );
}

MenuBUttons.defaultProps = {
  buttons : []
}