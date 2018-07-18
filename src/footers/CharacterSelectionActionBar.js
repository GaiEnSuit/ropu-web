import React from 'react';

// Material-Ui
import Toolbar from '@material-ui/core/Toolbar';

// Styles
import styles from '../styles/styles';

// Buttons
import CreateCharacterButton from '../buttons/CreateCharacterButton';
import BackButton from '../buttons/BackButton';

const CharacterSelectionActionBar = (props) => {
  return(
    <Toolbar
      style={{...styles.bgColorTransparant, ...styles.actionBar, ...styles.displayFlex, ...styles.justifyBetween}}
    >
      <BackButton text={props.characterSelectionPageText.back} title={props.characterSelectionPageText.confirmHome} dialog="home" {...props} />
      <CreateCharacterButton text={props.characterSelectionPageText.createCharacter}/>
    </Toolbar>
  )
}

export default CharacterSelectionActionBar;