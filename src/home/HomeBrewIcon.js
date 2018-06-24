import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Material-UI
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// Images
import potion from '../images/potion_03g.png';

class HomeBrewIcon extends Component {
  render() {
    return (
      <Grid
        item xs={4}
      >
        <Link to ="/homebrew" className="link">
          <Paper>
            <IconButton>
              <img src={potion} alt="Book" />
            </IconButton>
            <Typography variant="subheading">{this.props.homeBrewIconData.text}</Typography>
          </Paper>
        </Link>
      </Grid>
    );
  }
}

export default HomeBrewIcon;