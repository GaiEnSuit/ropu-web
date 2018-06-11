import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';

class RollingRulesDialog extends Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  
  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen} >Rolling</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
           <Typography variant="display1">Rolling</Typography>
           <Typography variant="subheading">A roll is a random number from 1-10 inclusively. Determine ability values or other modifiers that change the value of the roll. (ex. Someone tries to break down a door, Make a roll and add strength). Round down to the nearest whole number when necessary. If a roll is made against another roll (Competition Roll) then the higher number is successful. The Reaction is successful in ties.</Typography>
        </Dialog>
      </div>
    )
  }
}

export default RollingRulesDialog;