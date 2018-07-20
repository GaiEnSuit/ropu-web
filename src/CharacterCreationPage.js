import React, { Component } from 'react';

// Material-ui
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
import withDialog from './hoc/withDialog';
import withCreateCharacterDataControl  from './hoc/withCharacterDataControl';

// Headers
import TitleBar from './headers/TitleBar';

// Lists
import GameList from './lists/GameList';

// Button
import BackButton from './buttons/BackButton';

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
        {props.text.title}
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
        <Tab value={0} label={props.text.game} />
        <Tab value={1} label={props.text.interactables} />
        <Tab value={2} label={props.text.description} />
        <Tab value={3} label={props.text.abilities} />
        <Tab value={4} label={props.text.summary} />
      </Tabs>
    </Paper>
  )
}

// Dialog Actions
//         <Button 
//           disabled={props.createCharacterDialogTab <= 0 && true}
//           onClick={props.backCreateCharacterDialogTab}
//           color='inherit'
//         >
//           <ChevronLeftIcon />
//           {props.text.back}
//         </Button>
//         <Button 
//           disabled={props.createCharacterDialogTab >= 4 && true}
//           onClick={props.nextCreateCharacterDialogTab}
//           color='inherit'
//         >
//           {props.text.next}
//           <ChevronRightIcon />
//         </Button>
//         <Button
//           onClick={()=>{
//             props.updateDialog(true, 'cancelCreateCharacterDialog')
//           }}
//           color='inherit'
//         >
//           <CloseIcon />
//         </Button>

const BackButtonWithDialog = withDialog(BackButton, 'characterSelectionDialog');

const CharacterCreationPageActionBar = (props) => {
  return (
    <Toolbar
      style={{...styles.bgColorTransparant, ...styles.actionBar, ...styles.displayFlex, ...styles.justifyBetween}}
    >
      <BackButtonWithDialog
        {...props}
      />
    </Toolbar>
  )
}

// Layout
class CreateCharacterPage extends Component {
  
  componentWillUnmount () {
    this.props.resetCreateCharacter();
    this.props.resetCreateCharacterDialogTab();
    this.props.resetGameSelect();
    this.props.resetSelectedTemplate();
  }
  
  render() {
    return(
      <main
        id="charactercreation"
        style={{...styles.vp100, ...this.props.style}}
      >
        <TitleBar {...this.props} />
        <div>
          <Toolbar />
          <Typography variant="display1">This Feature is Currently Unavailable</Typography>
          <Toolbar />
        </div>
        <CharacterCreationPageActionBar {...this.props} />
      </main>
    )
  }
}

export default withGameDataControl(withCreateCharacterDataControl(withCharacterDataControl(withTabControl(withTransitions(CreateCharacterPage, 'fade', 500)))));