import React, { Component } from 'react';

// Material-UI Components
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class AccountButton extends Component {
  
  handleClose = () => {
    this.props.update({anchorEl: null});
  }
  
  render() {
    return (
      <Menu
        anchorEl={this.props.anchor}
        open={Boolean(this.props.anchor)}
        onClose={this.handleClose}
      >
        <MenuItem onClick={this.handleClose}>My Account</MenuItem>
        <MenuItem onClick={this.handleClose}>Logout</MenuItem>
      </Menu>
    );
  }
}

export default AccountButton;