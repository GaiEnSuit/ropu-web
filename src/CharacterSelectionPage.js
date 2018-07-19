// React
import React from 'react';

// Material-Ui
import Toolbar from '@material-ui/core/Toolbar';

// Layout
import Grid from '@material-ui/core/Grid';

// Custom Components
import TitleBar from './headers/TitleBar';
import CharacterSelectionCard from './cards/CharacterSelectionCard';

// Styles
import styles from './styles/styles';
import Typography from '@material-ui/core/Typography';

// HOC
import withTransitions from './hoc/withTransitions';
import withDialog from './hoc/withDialog';
import withCharacterDataControl from './hoc/withCharacterDataControl';

// Buttons
import CreatePlayerCharacterButton from './buttons/CreatePlayerCharacterButton';
import BackButton from './buttons/BackButton';

//Character Selection Cards Slide
const CharacterSelectionCardSlide = withCharacterDataControl(withDialog(withTransitions(CharacterSelectionCard, 'slide', 1000, 'up'), 'deleteCharacterDialog'));
const BackButtonWithDialog = withDialog(BackButton, 'homeDialog');

// Character Selection List
const CharacterSelectionList = (props) => {
  if (props.characterListData.length <= 0) {
    return (
      <div
        style={{
          ...styles.displayFlex,
          ...styles.justifyCenter, 
          ...styles.alignCenter,
          ...styles.flex1
        }}
      >
        <Typography
          variant="headline"
          style={{...styles.colorWhite}}
        >
          {props.text.noCharacters}
        </Typography>
      </div>
    )
  } else {
    return (
      <div>
        <Toolbar />
          <Grid
            container
            spacing={16}
            style={{
              ...styles.width100,
              ...styles.margin0
            }}
          >
            {props.characterListData.map((character) => {    
              return(
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={character.id}
                >
                  <CharacterSelectionCardSlide
                    character={character}
                    {...props}
                  />
                </Grid>
              )
            })}
          </Grid>
        <Toolbar />
        <Toolbar />
      </div>
    )
  }
}

// Footer
const CharacterSelectionActionBar = (props) => {
  return(
    <Toolbar
      style={{...styles.bgColorTransparant, ...styles.actionBar, ...styles.displayFlex, ...styles.justifyBetween}}
    >
      <BackButtonWithDialog
        {...props}
      />
      <CreatePlayerCharacterButton />
    </Toolbar>
  )
}

// Layout
const CharacterSelectionPage = (props) => {
  return (
    <main
      id="characterselection"
      style={{...styles.vp100, ...props.style, ...styles.bgColorWhite, ...styles.displayFlex, ...styles.directionColumn}}
    >
      <TitleBar
        {...props}
      />
      <CharacterSelectionList
        {...props}
      />
      <CharacterSelectionActionBar
        {...props}
      />
    </main>
  )
}

export default withTransitions(CharacterSelectionPage, 'fade', 500);