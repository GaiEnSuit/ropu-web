import React from 'react';
import { Link } from 'react-router-dom';

// Material-UI
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// Images
import sword from '../images/sword_01b.png';

const PlayIcon =(props) => {
  return (
    <Grid
      item xs={4}
    >
      <Link to="/characters" className="link">
        <Paper>
          <IconButton>
            <img src={sword} alt="sword" />
          </IconButton>
          <Typography variant="subheading">{props.playIconData.text}</Typography>
        </Paper>
      </Link>
    </Grid>
  )
}

export default PlayIcon;