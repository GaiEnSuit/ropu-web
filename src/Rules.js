import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

import HowToPlayRulesDialog from './HowToPlayRulesDialog';
import StoriesRulesDialog from './StoriesRulesDialog';
import ActionsRulesDialog from './ActionsRulesDialog';
import RollingRulesDialog from './RollingRulesDialog';
import InteractablesRulesDialog from './InteractablesRulesDialog';
import ConflictsRulesDialog from './ConflictsRulesDialog';


class Rules extends Component {
  
  render() {
    
    return (
      <div>
        <Typography variant="display1">How To Play</Typography>
        <Typography variant="subheading">Role Playing Unlimited (RoPU) is a storytelling game where the Director controls the story and the Actors control the characters in the story.</Typography>
        <List>
          <ListItem><HowToPlayRulesDialog /></ListItem>
          <Divider />
          <ListItem><StoriesRulesDialog /></ListItem>
          <Divider />
          <ListItem><ActionsRulesDialog /></ListItem>
          <Divider />
          <ListItem><RollingRulesDialog /></ListItem>
          <Divider />
          <ListItem><InteractablesRulesDialog /></ListItem>
          <Divider />
          <ListItem><ConflictsRulesDialog /></ListItem>
          <Divider />
        </List>
      </div>
    );
  }
}

export default Rules;