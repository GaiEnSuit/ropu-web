// React
import React from 'react';

// Material-Ui
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

// Custom Components
import CharacterListItem from './characterlistitem/CharacterListItem';

// Style Classes
import styles from '../../styles';

const CharacterList = (props) => {
  return (
    <Grid
      container
      className={props.classes.gridContainer}
      spacing={24}
    >
      {props.characterListData.map((character) => {    
        return(
          <Grid
            item
            xs={12}
            sm={6}
            lg={4}
            key={character.id}
          >
            <CharacterListItem
              character={character}
              {...props}
            />
          </Grid>
        )
      })}
    </Grid>
  )
}

export default withStyles(styles)(CharacterList);