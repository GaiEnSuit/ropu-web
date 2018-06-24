import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Material-UI
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

//Custom Component
import PlayIcon from './PlayIcon';
import DirectIcon from './DirectIcon';

class HomePageIcons extends Component {
  render() {
    return (
			<Paper>
        <Grid
          container
          spacing={4}
        >
          <PlayIcon playIconData={this.props.homePageIconsData.playIcon} />
          <DirectIcon directIconData={this.props.homePageIconsData.directIcon} />
        </Grid>
			</Paper>
    );
  }
}

export default HomePageIcons;