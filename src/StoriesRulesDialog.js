import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';

class RulesStories extends Component {
  
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
        <Button onClick={this.handleClickOpen} >Stories</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <Typography variant="display1">Stories</Typography>
          <Typography variant="subheading">Contains information about the name of the world, the locations that make up the world, the charcters that inhabit them, and the plots that ensues within it, and the interables that charcters can interact with. Go to direct a story for details.</Typography>
        </Dialog>
      </div>
    )
  }
}

export default RulesStories;