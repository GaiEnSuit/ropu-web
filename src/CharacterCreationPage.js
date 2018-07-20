import React, { Component } from 'react';

// Material-ui
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';

// Higher Order Components
import withTabControl from './hoc/withTabControl';
import withCharacterDataControl from './hoc/withCharacterDataControl';
import withGameDataControl from './hoc/withGameDataControl';
import withTransitions from './hoc/withTransitions';
import withDialog from './hoc/withDialog';

// Headers
import TitleBar from './headers/TitleBar';

// Button
import BackButton from './buttons/BackButton';

//Icons
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

// Style Overrides
import styles from './styles/styles';

// Sections
import CharacterCreationTabGame from './sections/CharacterCreationTabGame';
import CharacterCreationTabDescription from './sections/CharacterCreationTabDescription';
import CharacterCreationTabAbilities from './sections/CharacterCreationTabAbilities';
import CharacterCreationTabInteractables from './sections/CharacterCreationTabInteractables';
import CharacterCreationTabSummary from './sections/CharacterCreationTabSummary';

// Content
const CharacterCreationTab = (props) => {
  return(
    <div>
      {props.createCharacterDialogTab === 0 && <CharacterCreationTabGame {...props} />}
      {props.createCharacterDialogTab === 1 && <CharacterCreationTabInteractables {...props} />}
      {props.createCharacterDialogTab === 2 && <CharacterCreationTabDescription {...props} />}
      {props.createCharacterDialogTab === 3 && <CharacterCreationTabAbilities {...props} />}
      {props.createCharacterDialogTab === 4 && <CharacterCreationTabSummary {...props} />}
    </div>
  )
}

// Toolbar
const CharacterCreationTabs = (props) => {
  return(
    <Paper
      style={{...styles.appBarOffset}}
    >
      <Tabs
        value={props.createCharacterDialogTab}
        onChange={props.setCreateCharacterDialogTab}
        style={{...styles.colorWhite, ...styles.bgColorRed}}
        indicatorColor="primary"
        scrollable
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

const BackButtonWithDialog = withDialog(BackButton, 'characterSelectionDialog');

const CharacterCreationPageActionBar = (props) => {
  return (
    <Toolbar
      style={{...styles.bgColorTransparant, ...styles.actionBar, ...styles.displayFlex, ...styles.justifyBetween}}
    >
      <BackButtonWithDialog
        {...props}
      />
      <div
        style={{...styles.displayFlex, ...styles.justifyBetween}}
      >
        {props.createCharacterDialogTab >= 1 &&
          <Button 
            variant="extendedFab"
            onClick={props.backCreateCharacterDialogTab}
            style={{...styles.colorWhite, ...styles.bgColorRed}}
          >
            <ChevronLeftIcon />
            {props.text.back}
          </Button>
        }
        {props.createCharacterDialogTab <= 3 &&
          <Button 
            variant="extendedFab"
            onClick={props.nextCreateCharacterDialogTab}
            style={{...styles.colorWhite, ...styles.bgColorRed}}
          >
            {props.text.next}
            <ChevronRightIcon
              style={{...styles.colorWhite}}
            />
          </Button>
        }
        {props.createCharacterDialogTab === 4 &&
          <Button 
            disabled={
              props.createCharacterData.gameID === null? true: false
            }
            onClick={()=>{
              props.setCreateCharacterID();
              props.addNewCharacter();
            }}
            variant="extendedFab"
            style={{...styles.colorWhite, ...styles.bgColorRed}}
          >
            {props.text.complete}
            <ChevronRightIcon
              style={{...styles.colorWhite}}
            />
          </Button>
        }
        
      </div>
    </Toolbar>
  )
}

// Layout
class CreateCharacterPage extends Component {
  
  componentWillMount () {
    this.props.selectGame(this.props.gameListData[0])
  }
  
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
        style={{...styles.minHeight, ...this.props.style, ...styles.displayFlex, ...styles.directionColumn}}
      >
        <TitleBar {...this.props} />
        <CharacterCreationTabs {...this.props} />
        <CharacterCreationTab {...this.props} />
        <CharacterCreationPageActionBar {...this.props} />
      </main>
    )
  }
}

export default withGameDataControl(withCharacterDataControl(withTabControl(withTransitions(CreateCharacterPage, 'fade', 500))));