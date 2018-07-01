import React from 'react';

// Materil-Ui Components
import AppBar from '@material-ui/core/AppBar';

// Custom Components
import AppBarIcons from './AppBarIcons';

const RopuAppBar = (props) => {
  return (
    <AppBar 
      position="static"
      color="default"
    >
      <AppBarIcons 
        {...props}
      />
    </AppBar>
  )
}

export default RopuAppBar;