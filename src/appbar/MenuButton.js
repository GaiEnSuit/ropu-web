import React, { Component } from 'react';

// Material-UI Components
import IconButton from '@material-ui/core/IconButton';

// Icons
import MenuIcon from '@material-ui/icons/Menu';

class MenuButton extends Component {
  
  render() {
    return (
      <IconButton color="inherit" aria-label="MenuButton" onClick={() => {this.props.update({menuDialog: true})}}>
        <MenuIcon />
      </IconButton>
    );
  }
}

export default MenuButton;