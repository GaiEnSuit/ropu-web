import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';

class RulesActions extends Component {
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
        <Button onClick={this.handleClickOpen} >Actions</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
        <Typography variant="display1">Actions</Typography>
        <Typography variant="subheading">Actions are when characters DO something. When an action is taken and the outcome is uncertain, make a roll and add the related ability and other modifiers. Determines the best related ability and modifiers that apply. If the action has no opposition, the roll is compared against a number decided by the Director. When two or more characters are competing against each other for an outcome a conflict ensues.</Typography>
        </Dialog>
      </div>
    )
  }
}

export default RulesActions;