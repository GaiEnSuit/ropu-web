// React
import React from 'react';

// Material-Ui
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

// Custom Components
import CreateCharacterButton from './CreateCharacterButton';
import CharacterList from './characterlist/CharacterList';

// Class Styles
import styles from '../styles';

const CharacterSelectionPage = (props) => {
  return (
    <section
      className="min-height"
    >
      {/* Title */}
      <Toolbar
        className="bg-color-black justify-center"
        style={{position: 'fixed', width: '100%'}}
      >
        <Typography
          variant="display1"
          style={styles.title}
        >
          {props.characterSelectionPageText.title}
        </Typography>
      </Toolbar>
      {/* Toolbar Offset */}
      <Toolbar />
      {/* List of Characters */}
      <Grid
        justify="space-around"
        spacing={24}
        container
        style={styles.gridContainer}
      >
        <Grid
          item
          xs={12}
        >
          {props.characterListData.length === 0?
            (
              <Typography
                variant="subheading"
                className="text-center"
              >
                {props.characterSelectionPageText.noCharacters}
              </Typography>
            ) :
            (
              <CharacterList
                {...props}
              />
            )
          }
        </Grid>
      </Grid>
      {/* Create Character FAB */}
      <CreateCharacterButton
        update={props.update}
        gameListData={props.gameListData}
        createCharacterData={props.createCharacterData}
        characterSelectionPageText={props.characterSelectionPageText}
      />
    </section>
  )
}

export default CharacterSelectionPage;