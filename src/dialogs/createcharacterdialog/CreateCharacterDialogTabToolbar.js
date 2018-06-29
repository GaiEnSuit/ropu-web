import React, { Component } from 'react';

// Material-ui
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Toolbar from '@material-ui/core/AppBar';

class CreateCharacterDialogTabToolbar extends Component {
  render() {
    return(
      <Toolbar 
        position="static"
        color="default"
      >
        <Tabs
          value={this.props.createCharacterDialogTab}
          onChange={(event, value)=>this.props.update({createCharacterDialogTab: value})}
          indicatorColor="secondary"
          textColor="secondary"
          scrollable
          scrollButtons="auto"
        >
          <Tab label={this.props.createCharacterDialogText.game} />
          <Tab label={this.props.createCharacterDialogText.description} />
          <Tab label={this.props.createCharacterDialogText.abilities} />
          <Tab label={this.props.createCharacterDialogText.interactables} />
          <Tab label={this.props.createCharacterDialogText.summary} />
        </Tabs>
      </Toolbar>
    )
  }
}

export default CreateCharacterDialogTabToolbar;