import React from 'react';

// Material-ui
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';

// Higher Order Component
import withTabControl from '../../hoc/withTabControl';

// Material-ui classes overrides
import { withStyles } from '@material-ui/core/styles';

// Style Classes
import styles from '../../styles';

const CreateCharacterDialogTabToolbar = (props) => {
  return(
    <Paper>
      <Tabs
        value={props.createCharacterDialogTab}
        onChange={props.setCreateCharacterDialogTab}
        scrollable
        scrollButtons="off"
        className={props.classes.tabs}
      >
        <Tab value={0} label={props.createCharacterDialogText.game} />
        <Tab value={1} label={props.createCharacterDialogText.interactables} />
        <Tab value={2} label={props.createCharacterDialogText.description} />
        <Tab value={3} label={props.createCharacterDialogText.abilities} />
        <Tab value={4} label={props.createCharacterDialogText.summary} />
      </Tabs>
    </Paper>
  )
}

export default withStyles(styles)(withTabControl(CreateCharacterDialogTabToolbar));