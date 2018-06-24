import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Material-UI
import Grid from '@material-ui/core/Grid';

class PlayIcon extends Component {
  render() {
    return (
      <Grid
        item xs={12}
      >
        {this.props.playIconData.text}
      </Grid>
    );
  }
}

export default PlayIcon;