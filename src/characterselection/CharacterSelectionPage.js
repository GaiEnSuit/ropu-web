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
    <section>
      {/* Toolbar Offset */}
      <Toolbar />
      {/* Title */}
      <Toolbar>
        <Typography
          variant="display1"
          style={styles.title}
        >
          {props.characterSelectionPageText.title}
        </Typography>
      </Toolbar>
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
      {/* Create Character Button */}
      <Grid
        justify="space-around"
        spacing={24}
        container
        style={styles.gridContainer}
      >
        <Grid
          item
          xs={8}
          sm={6}
          lg={4}
        >
          <CreateCharacterButton
            update={props.update}
            characterSelectionPageText={props.characterSelectionPageText}
          />
        </Grid>
      </Grid>
    </section>
  )
}

export default CharacterSelectionPage;