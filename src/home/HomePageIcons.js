import React, { Component } from 'react';

// Material-UI
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

//Custom Component
import PlayIcon from './PlayIcon';
import DirectIcon from './DirectIcon';
import HomeBrewIcon from './HomeBrewIcon';

class HomePageIcons extends Component {
  render() {
    return (
			<Paper>
        <Grid
          container
          spacing={16}
        >
          <PlayIcon playIconData={this.props.homePageIconsData.playIcon} />
          <DirectIcon directIconData={this.props.homePageIconsData.directIcon} />
          <HomeBrewIcon homeBrewIconData={this.props.homePageIconsData.homeBrewIcon} />
        </Grid>
			</Paper>
    );
  }
}

export default HomePageIcons;