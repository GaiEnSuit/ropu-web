import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';

class InteractablesRulesDialog extends Component {
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
        <Button onClick={this.handleClickOpen} >Interactables</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <Typography variant="display1">Interactables</Typography>
          <Typography variant="subheading">Interactables are anything that a character may use to effect the outcome of an action, this includes things such as equipment, weapons, magic, skills. These are provided for in the story module or determined by the director. When using interactables follow the edscription of the interactble.</Typography>
        </Dialog>
      </div>
    )
  }
}

export default InteractablesRulesDialog;