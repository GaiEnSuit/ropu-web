import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Material-UI
import Grid from '@material-ui/core/Grid';

class DirectIcon extends Component {
  render() {
    return (
      <Grid
        item xs={4}
      >
        {this.props.directIconData.text}
      </Grid>
    );
  }
}

export default DirectIcon;