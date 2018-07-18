// React
import React from 'react';

// Material-Ui
import Grid from '@material-ui/core/Grid';

// Custom Componentss
import CharacterSelectionCard from '../cards/CharacterSelectionCard';

// Styles
import styles from '../styles/styles';
import Typography from '@material-ui/core/Typography';

const CharacterSelectionList = (props) => {
  if (props.characterListData.length <= 0) {
    return (
      <div
        style={{...styles.displayFlex, ...styles.justifyCenter, ...styles.alignCenter, ...styles.flex1}}
      >
        <Typography
          variant="headline"
          style={{...styles.colorWhite}}
        >
          {props.noCharacters}
        </Typography>
      </div>
    )
  } else {
    return (
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
              <CharacterSelectionCard
                character={character}
                {...props}
              />
            </Grid>
          )
        })}
      </Grid>
    )
  }
}

export default CharacterSelectionList;