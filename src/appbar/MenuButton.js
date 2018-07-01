import React from 'react';

// Material-UI Components
import IconButton from '@material-ui/core/IconButton';

// Icons
import MenuIcon from '@material-ui/icons/Menu';

// Higher Order Components
import withDialogControl from '../hoc/withDialogControl';

const MenuButton = (props) => {
  return (
    <IconButton color="inherit" aria-label="MenuButton" onClick={props.openMenuDialog}>
      <MenuIcon />
    </IconButton>
  )
}

export default withDialogControl(MenuButton);