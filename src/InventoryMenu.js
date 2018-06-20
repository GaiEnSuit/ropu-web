import React, { Component } from 'react';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import InteractableCard from './InteractableCard';

class InventoryMenu extends Component {
  
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    
    this.setState({ value });
  };

  tangiblesArray = this.props.interactables.filter(interactable => interactable.type === 'tangible');
  activeTangiblesArray = this.tangiblesArray.filter(interactable => interactable.active === true);
  inactiveTangiblesArray = this.tangiblesArray.filter(interactable => interactable.active === false);

  intangiblesArray = this.props.interactables.filter(interactable => interactable.type === 'intangible');
  activeIntangiblesArray = this.intangiblesArray.filter(interactable => interactable.active === true);
  inactiveIntangiblesArray = this.intangiblesArray.filter(interactable => interactable.active === false);

  activeTangiblesList = this.activeTangiblesArray.map((tangible, index) => {
    return <ListItem key={index}>
            <InteractableCard interactable={tangible} />
           </ListItem>
  })
  
  inactiveTangiblesList = this.inactiveTangiblesArray.map((tangible, index) => {
    return <ListItem key={index}>
            <InteractableCard interactable={tangible} />
           </ListItem>
  })
  
  activeIntangiblesList = this.activeIntangiblesArray.map((intangible, index) => {
    return <ListItem key={index}>
            <InteractableCard interactable={intangible} />
           </ListItem>
  })

  inactiveIntangiblesList = this.inactiveIntangiblesArray.map((intangible, index) => {
    return <ListItem key={index}>
            <InteractableCard interactable={intangible} />
           </ListItem>
  })

  render() {
    return (
      <Paper>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          fullWidth
        >
          <Tab label="Tangibles" />
          <Tab label="Intangibles" />
        </Tabs>
        <Typography variant="display1">Active</Typography>
        {this.state.value === 0 && <List>{this.activeTangiblesList}</List>}
        {this.state.value === 1 && <List>{this.activeIntangiblesList}</List>}
        <Divider />
        {this.state.value === 0 && <List>{this.inactiveTangiblesList}</List>}
        {this.state.value === 1 && <List>{this.inactiveIntangiblesList}</List>}
      </Paper>
    )
  }
}

export default InventoryMenu;