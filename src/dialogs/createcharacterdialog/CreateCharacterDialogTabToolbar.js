import React from 'react';

// Material-ui
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Toolbar from '@material-ui/core/AppBar';

// Higher Order Component
import withTabControl from '../../hoc/withTabControl';

const CreateCharacterDialogTabToolbar = (props) => {
  return(
    <Toolbar 
      position="static"
      color="default"
    >
      <Tabs
        value={props.createCharacterDialogTab}
        onChange={props.setCreateCharacterDialogTab}
        indicatorColor="secondary"
        textColor="secondary"
        scrollable
        scrollButtons="auto"
      >
        <Tab label={props.createCharacterDialogText.game} />
        <Tab label={props.createCharacterDialogText.description} />
        <Tab label={props.createCharacterDialogText.abilities} />
        <Tab label={props.createCharacterDialogText.interactables} />
        <Tab label={props.createCharacterDialogText.summary} />
      </Tabs>
    </Toolbar>
  )
}

export default withTabControl(CreateCharacterDialogTabToolbar);