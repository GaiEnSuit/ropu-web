import React from 'react';

// Material UI
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

// Style Classes
import styles from '../styles';

// Package.Json
import packageJSON from '../package.json';

const Version = (props) => {
  return (
    <div id="version" className="display-flex justify-center direction-column text-center">
      <Typography
        variant="title"
        className={props.classes.title}
      >
        {props.footerText.version}
      </Typography>
      <Typography variant="body1" className={props.classes.footerText}>
       {packageJSON.version}
      </Typography>
    </div>
  )
}

export default withStyles(styles)(Version);