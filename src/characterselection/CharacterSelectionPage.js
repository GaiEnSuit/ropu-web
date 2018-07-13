// React
import React from 'react';

// Material-Ui
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';

// Custom Components
import CreateCharacterButton from './CreateCharacterButton';
import CharacterList from './characterlist/CharacterList';

// Class Styles
import styles from '../styles';

const CharacterSelectionPage = (props) => {
  return (
    <section
      className="max-height"
    >
      {/* Title */}
      <Toolbar
        className={props.classes.toolbar}
      >
        <Typography
          variant="display1"
          className={props.classes.title}
        >
          {props.characterSelectionPageText.title}
        </Typography>
      </Toolbar>
      {/* Toolbar Offset */}
      <Toolbar />
      {/* List of Characters */}
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

export default withStyles(styles)(CharacterSelectionPage);