import React from 'react';

// Material-UI
import Grid from '@material-ui/core/Grid';

// Custom Component
import PlayIcon from './PlayIcon';
import DirectIcon from './DirectIcon';
import HomeBrewIcon from './HomeBrewIcon';

// Style Classes
import styles from '../../styles';

const HomePageIcons = (props) => {
  return (
    <Grid
      container
      spacing={24}
      style={styles.gridContainer}
    >
      <Grid
        item
        xs={4}
      >
        <PlayIcon play={props.homePageText.play} paths={props.paths} />
      </Grid>
      <Grid
        item
        xs={4}
      >
        <DirectIcon direct={props.homePageText.direct} paths={props.paths} />
      </Grid>
      <Grid
        item
        xs={4}
      >
        <HomeBrewIcon homebrew={props.homePageText.homebrew} paths={props.paths} />
      </Grid>
    </Grid>
  )
}

export default HomePageIcons;