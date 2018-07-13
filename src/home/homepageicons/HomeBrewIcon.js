import React from 'react';
import { Link } from 'react-router-dom';

// Material-UI
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

// Images
import potion from '../../images/potion_03g.png';

// Style Classes
import styles from '../../styles';

const HomeBrewIcon = (props) => {
  return (
    <Link to={props.paths.homebrew} className="link">
      <Paper
        className={props.classes.homebrewIcon}
        elevation={5}
      >
        <img src={potion} alt="Book" className={props.classes.icon} />
        <Typography variant="button">{props.homebrew}</Typography>
      </Paper>
    </Link>
  )
}

export default withStyles(styles)(HomeBrewIcon);