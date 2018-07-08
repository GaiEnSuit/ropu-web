import React from 'react';

// Material-UI Components
import AppBar from '@material-ui/core/AppBar';

// Material-UI Styles
import { withStyles } from '@material-ui/core/styles';

// Custom Components
import AppBarIcons from './AppBarIcons';

// Style Classes
import styles from '../styles';

//App Bar Layout
const RopuAppBar = (props) => {
  
  const { classes } = props;
  
  return (
    <AppBar
      classes={{
        root: classes.root,
      }}
    >
      <AppBarIcons
        {...props}
      />
    </AppBar>
  )
}

export default withStyles(styles)(RopuAppBar);