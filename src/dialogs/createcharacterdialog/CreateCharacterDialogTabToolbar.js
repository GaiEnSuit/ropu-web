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
        <Tab value={0} label={props.createCharacterDialogText.game} />
        <Tab value={1} label={props.createCharacterDialogText.interactables} />
        <Tab value={2} label={props.createCharacterDialogText.description} />
        <Tab value={3} label={props.createCharacterDialogText.abilities} />
        <Tab value={4} label={props.createCharacterDialogText.summary} />
      </Tabs>
    </Toolbar>
  )
}

export default withTabControl(CreateCharacterDialogTabToolbar);