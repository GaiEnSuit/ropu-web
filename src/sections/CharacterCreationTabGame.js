import React from 'react';

// Material-ui
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

// Higher Order Components
import withCharacterDataControl from '../hoc/withCharacterDataControl';
import withGameDataControl from '../hoc/withGameDataControl';

// Style overrides
import styles from '../styles/styles';

// Cards
import CharacterCreationGameCard from '../cards/CharacterCreationGameCard';

// Laout
const GameList = (props) => {
  return (
    <Grid
      container
      style={[styles.carouselContainer, styles.width100, styles.margin0]}
      spacing={24}
    >
      {props.gameListData.map((game, index)=>{
        return(
          <Grid
            item
            xs={12}
            key={game.id}
          >
            <CharacterCreationGameCard {...props} game={game} />
          </Grid>
        )
      })}
    </Grid>
  )
}

const EnhancedGameList = withGameDataControl(withCharacterDataControl(GameList));

const CharacterCreationTabGame = (props) => {
  return(
    <div
      style={[styles.dim100]}
    >
      <Typography
        variant="title"
        style={[styles.colorRed, styles.textCenter]}
      >
        {props.text.selectGame}
      </Typography>
      <EnhancedGameList {...props} />
    </div>
  )
}

export default CharacterCreationTabGame;