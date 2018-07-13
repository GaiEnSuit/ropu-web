import React from 'react';

// Material-UI Components
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';

// Custom Components
import AppBarIcons from './appbaricons/AppBarIcons';

// Style Classes
import styles from '../styles';

//App Bar Layout
const RopuAppBar = (props) => {
  return (
    <AppBar
      className={props.classes.root}
    >
      <AppBarIcons
        {...props}
      />
    </AppBar>
  )
}

export default withStyles(styles)(RopuAppBar);