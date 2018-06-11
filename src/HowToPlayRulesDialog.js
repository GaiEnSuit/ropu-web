import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';

class HowToPlayRulesDialog extends Component {
  
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
        <Button onClick={this.handleClickOpen} >Game Flow</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <Typography variant="display1">Game Flow</Typography>
          <Typography variant="subheading">The Director describes the Story, The Actors then decide how their Character's take action, Actors Roll to determine the outcome of the Action, Resolve Conflicts if any</Typography>
        </Dialog>
      </div>
    )
  }
}

export default HowToPlayRulesDialog;