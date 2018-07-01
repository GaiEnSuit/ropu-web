import React from 'react';

// Material-UI
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

//Custom Component
import PlayIcon from './PlayIcon';
import DirectIcon from './DirectIcon';
import HomeBrewIcon from './HomeBrewIcon';

const HomePageIcons = (props) => {
  return (
    <Paper>
      <Grid
        container
      >
        <PlayIcon playIconData={props.homePageIconsData.playIcon} />
        <DirectIcon directIconData={props.homePageIconsData.directIcon} />
        <HomeBrewIcon homeBrewIconData={props.homePageIconsData.homeBrewIcon} />
      </Grid>
    </Paper>
  )
}

export default HomePageIcons;