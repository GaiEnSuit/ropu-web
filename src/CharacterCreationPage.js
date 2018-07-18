import React from 'react';

// Material-ui
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import DialogContent from '@material-ui/core/DialogContent';

// Higher Order Components
import withTabControl from './hoc/withTabControl';
import withCharacterDataControl from './hoc/withCharacterDataControl';
import withGameDataControl from './hoc/withGameDataControl';
import withTransitions from './hoc/withTransitions';

// Headers
import TitleBar from './headers/TitleBar';

// Lists
import GameList from './lists/GameList';

//Icons
import CloseIcon from '@material-ui/icons/Close';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

// Style Overrides
import styles from './styles/styles';

// Title
const CreateCharacterDialogTitle = (props) => {
  return(
    <Toolbar
    >
      <Typography
        variant="display1"
        style={styles.title}
      >
        {props.createCharacterDialogText.title}
      </Typography>
    </Toolbar>
  )
}

// Content
const CreateCharacterDialogContent = (props) => {
  return(
    <DialogContent
    >
      {props.createCharacterDialogTab === 0 && <div />}
      {props.createCharacterDialogTab === 1 && <div />}
      {props.createCharacterDialogTab === 2 && <div />}
      {props.createCharacterDialogTab === 3 && <div />}
      {props.createCharacterDialogTab === 4 && <div />}
    </DialogContent>
  )
}

// Toolbar
const CreateCharacterDialogTabToolbar = (props) => {
  return(
    <Paper>
      <Tabs
        value={props.createCharacterDialogTab}
        onChange={props.setCreateCharacterDialogTab}
        scrollable
        scrollButtons="off"
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

// Dialog Actions
const CreateCharacterDialogActions = (props) => {
  return(
    <Paper
    >
      <DialogActions>
        <Button 
          disabled={props.createCharacterDialogTab <= 0 && true}
          onClick={props.backCreateCharacterDialogTab}
          color='inherit'
        >
          <ChevronLeftIcon />
          {props.createCharacterDialogText.back}
        </Button>
        <Button 
          disabled={props.createCharacterDialogTab >= 4 && true}
          onClick={props.nextCreateCharacterDialogTab}
          color='inherit'
        >
          {props.createCharacterDialogText.next}
          <ChevronRightIcon />
        </Button>
        <Button
          onClick={()=>{
            props.updateDialog(true, 'cancelCreateCharacterDialog')
          }}
          color='inherit'
        >
          <CloseIcon />
        </Button>
      </DialogActions>
    </Paper>
  )
}

const CreateCharacterDialogActionsEnhanced = withTabControl(CreateCharacterDialogActions);

// Layout
const CreateCharacterPage = (props) => {
  return(
    <main
      id="charactercreation"
      style={{...styles.vp100, ...props.style}}
    >
      <TitleBar title={props.characterCreationPageText.title}/>
    </main>
  )
}

export default withTransitions(CreateCharacterPage, 'fade', true, 500);