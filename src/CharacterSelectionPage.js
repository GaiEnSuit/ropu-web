// React
import React from 'react';

// Material-Ui
import Toolbar from '@material-ui/core/Toolbar';

// Custom Components
import CharacterSelectionList from './lists/CharacterSelectionList';
import TitleBar from './headers/TitleBar';
import CharacterSelectionActionBar from './footers/CharacterSelectionActionBar';

// Styles
import styles from './styles/styles';

// HOC
import withTransitions from './hoc/withTransitions';

const CharacterSelectionPage = (props) => {
  return (
    <main
      id="characterselection"
      style={{...styles.vp100, ...props.style, ...styles.bgColorWhite, ...styles.displayFlex, ...styles.directionColumn}}
    >
      {/* Title */}
      <TitleBar title={props.characterSelectionPageText.title}/>
      {/* Offsets Toolbar */}
      <Toolbar />
      <CharacterSelectionList
        noCharacters={props.characterSelectionPageText.noCharacters}
        {...props}
      />
      <Toolbar />
      <Toolbar />
      <CharacterSelectionActionBar
        {...props}
        characterSelectionPageText={props.characterSelectionPageText}
      />
    </main>
  )
}

export default withTransitions(CharacterSelectionPage, 'fade', true, 500);