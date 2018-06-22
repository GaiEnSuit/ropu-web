import React, { Component } from 'react';

//Material-Ui
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import IconButton from '@material-ui/core/IconButton';

//Icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CloseIcon from '@material-ui/icons/Close';

class Rules extends Component {
  render() {
    return (
      <Dialog
        open={this.props.guideDialog}
        fullScreen
        aria-labelledby="dynamic dialog"
      >
        <DialogActions>
          <IconButton onClick={()=>this.props.update({guideDialog: false})}>
            <CloseIcon />
          </IconButton>
        </DialogActions>
        <DialogTitle>
          <Typography variant="display1">How To Play</Typography>
          <Typography variant="subheading">Role Playing Unlimited (RoPU) is a storytelling game where the Director controls the story and the Actors control the characters in the story.</Typography>
        </DialogTitle>
        {/* Game Flow */}
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Game Flow</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              The Director describes the Story, The Actors then decide how their Character's take action, Actors Roll to determine the outcome of the Action, Resolve Conflicts if any
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        {/* Actions */}
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Actions</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Actions are when characters DO something. When an action is taken and the outcome is uncertain, make a roll and add the related ability and other modifiers. Determines the best related ability and modifiers that apply. If the action has no opposition, the roll is compared against a number decided by the Director. When two or more characters are competing against each other for an outcome a conflict ensues.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        {/* Stories */}
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Stories</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Contains information about the name of the world, the locations that make up the world, the charcters that inhabit them, and the plots that ensues within it, and the interables that charcters can interact with. Go to direct a story for details.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        {/* Rolling */}
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Rolling</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              A roll is a random number from 1-10 inclusively. Determine ability values or other modifiers that change the value of the roll. (ex. Someone tries to break down a door, Make a roll and add strength). Round down to the nearest whole number when necessary. If a roll is made against another roll (Competition Roll) then the higher number is successful. The Reaction is successful in ties.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        {/* Interactables */}
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Interactables</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Interactables are anything that a character may use to effect the outcome of an action, this includes things such as equipment, weapons, magic, skills. These are provided for in the story module or determined by the director. When using interactables follow the edscription of the interactble.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        {/* Conflicts */}
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Conflicts</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Conflicts are either physical or mental
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        {/* Physical Conflicts */}
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Physical Conflicts</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Everyone works together to keep track of the general location of involved characters and the environment
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        {/* Positioning Guide */}
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Positioning</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Everyone works together to keep track of the general location of involved characters and the environment
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        {/* Turn Order */}
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Turn Order</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Turn order is determined by the Characters' AGI from hgihest to lowest. In the case of ties a competition roll is made and whomever succeeds goes first
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        {/* On Player's Turn */}
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>On Your Turn</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Characters can take action by spending 1 SP on their turn Inconsequential actions cost 0 SP (breathing, closing your eyes etc.), completely replenish SP at the beggining of your turn
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        {/* On Other PLayers' Turns */}
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>On Other Player's Turns'</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Actions can be made on other characters' turns in response to another character’s action Spend 1 Stamina Point (SP), this usually ends up in a competition roll.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        {/* On Other PLayers' Turns */}
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Social Conflicts</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              The character(s) must present a logical argument towards the opposing character(s). Make an INT competition roll. On success reduce your opponents MP by your character’s INT. Repeat until a character’s MP is reduced to 0 or no more arguments can be made.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Dialog>
    );
  }
}

export default Rules;