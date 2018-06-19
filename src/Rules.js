import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

import DynamicDialog from './DynamicDialog';

class Rules extends Component {
  render() {
    return (
      <div>
        <Typography variant="display1">How To Play</Typography>
        <Typography variant="subheading">Role Playing Unlimited (RoPU) is a storytelling game where the Director controls the story and the Actors control the characters in the story.</Typography>
        <List>
          <ListItem><DynamicDialog data='gameflow' /></ListItem>
          <Divider />
          <ListItem><DynamicDialog data='stories' /></ListItem>
          <Divider />
          <ListItem><DynamicDialog data='actions' /></ListItem>
          <Divider />
          <ListItem><DynamicDialog data='rolling' /></ListItem>
          <Divider />
          <ListItem><DynamicDialog data='interactables' /></ListItem>
          <Divider />
          <ListItem><DynamicDialog data='conflicts' /></ListItem>
          <Divider />
        </List>
      </div>
    );
  }
}

export default Rules;