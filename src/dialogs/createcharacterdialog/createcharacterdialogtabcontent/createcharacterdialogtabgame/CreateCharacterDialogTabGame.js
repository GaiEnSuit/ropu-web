import React from 'react';

// Material-ui
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

// Higher Order Components
import withTabControl from '../../../../hoc/withTabControl';
import withCharacterDataControl from '../../../../hoc/withCharacterDataControl';
import withGameDataControl from '../../../../hoc/withGameDataControl';

// Custom Components
import SelectedGame from './SelectedGame';
import GameList from './GameList';

// Style overrides
import styles from '../../../../styles';

const CreateCharacterDialogTabGame = (props) => {
  return(
    <Grid
      container
      style={styles.gridContainer}
    >
      <Grid
        item
        xs={12}
      >
        <SelectedGame {...props} />
      </Grid>
      <Grid
        item
        xs={12}
      >
        <Typography
          variant="display1"
          style={styles.title}
        >
          {props.createCharacterDialogText.selectGame}
        </Typography>
        <GameList {...props} />
      </Grid>
    </Grid>
  )
}

export default withGameDataControl(withCharacterDataControl(withTabControl(CreateCharacterDialogTabGame)));