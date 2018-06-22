import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

class Rules extends Component {
  render() {
    return (
      <div>
        <Typography variant="display1">How To Play</Typography>
        <Typography variant="subheading">Role Playing Unlimited (RoPU) is a storytelling game where the Director controls the story and the Actors control the characters in the story.</Typography>
        <Typography variant="display1">Game Flow</Typography>
        <Typography variant="subheading">The Director describes the Story, The Actors then decide how their Character's take action, Actors Roll to determine the outcome of the Action, Resolve Conflicts if any</Typography>
        <Typography variant="display1">Actions</Typography>
        <Typography variant="subheading">Actions are when characters DO something. When an action is taken and the outcome is uncertain, make a roll and add the related ability and other modifiers. Determines the best related ability and modifiers that apply. If the action has no opposition, the roll is compared against a number decided by the Director. When two or more characters are competing against each other for an outcome a conflict ensues.</Typography>
        <Typography variant="display1">Stories</Typography>
        <Typography variant="subheading">Contains information about the name of the world, the locations that make up the world, the charcters that inhabit them, and the plots that ensues within it, and the interables that charcters can interact with. Go to direct a story for details.</Typography>
        <Typography variant="display1">Rolling</Typography>
        <Typography variant="subheading">A roll is a random number from 1-10 inclusively. Determine ability values or other modifiers that change the value of the roll. (ex. Someone tries to break down a door, Make a roll and add strength). Round down to the nearest whole number when necessary. If a roll is made against another roll (Competition Roll) then the higher number is successful. The Reaction is successful in ties.</Typography>
        <Typography variant="display1">Interactables</Typography>
        <Typography variant="subheading">Interactables are anything that a character may use to effect the outcome of an action, this includes things such as equipment, weapons, magic, skills. These are provided for in the story module or determined by the director. When using interactables follow the edscription of the interactble.</Typography>
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
      </div>
    );
  }
}

export default Rules;