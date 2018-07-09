import React from 'react';
import { Link } from 'react-router-dom';

// Material-UI
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// Images
import potion from '../../images/potion_03g.png';

// Style Classes
import styles from '../../styles';

const HomeBrewIcon = (props) => {
  return (
    <Link to={props.paths.homebrew} className="link">
      <Paper
        style={styles.homebrewIcon}
        className="d-flex justify-center flex-d-column align-items-center"
      >
        <img src={potion} alt="Book" style={styles.icon} />
        <Typography variant="button" className="text-center">{props.homebrew}</Typography>
      </Paper>
    </Link>
  )
}

export default HomeBrewIcon;