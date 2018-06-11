import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';

class ConflictsRulesDialog extends Component {
  
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
        <Button onClick={this.handleClickOpen} >Conflicts</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <Typography variant="display3">Conflicts</Typography>
          <Typography variant="subheading">Conflicts are either physical or mental</Typography>
          <Typography variant="display2">Physical Conflicts</Typography>
          <Typography variant="display1">Setting</Typography>
          <Typography variant="subheading">Everyone works together to keep track of the general location of involved characters and the environment</Typography>
          <Typography variant="display1">Turn Order</Typography>
          <Typography variant="subheading">Turn order is determined by the Characters' AGI from hgihest to lowest. In the case of ties a competition roll is made and whomever succeeds goes first</Typography>
          <Typography variant="display1">On Your Turn</Typography>
          <Typography variant="subheading">Characters can take action by spending 1 SP on their turn Inconsequential actions cost 0 SP (breathing, closing your eyes etc.), completely replenish SP at the beggining of your turn</Typography>
          <Typography variant="display1">On Other PLayer's Turns'</Typography>
          <Typography variant="subheading">Actions can be made on other characters' turns in response to another character’s action Spend 1 Stamina Point (SP), this usually ends up in a competition roll.</Typography>
          <Typography variant="display2">Social Conflicts</Typography>
          <Typography variant="subheading">The character(s) must present a logical argument towards the opposing character(s). Make an INT competition roll. On success reduce your opponents MP by your character’s INT. Repeat until a character’s MP is reduced to 0 or no more arguments can be made.</Typography>
        </Dialog>
      </div>
    )
  }
}

export default ConflictsRulesDialog;