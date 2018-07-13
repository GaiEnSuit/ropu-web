import React from 'react';
import { Link } from 'react-router-dom';

// Material-UI
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

// Images
import sword from '../../images/sword_01b.png';

// Style Classes
import styles from '../../styles';

const PlayIcon = (props) => {
  return (
    <Link to={props.paths.characterList} className="link">
      <Paper
        className={props.classes.playIcon}
        elevation={5}
      >
          <img src={sword} alt="sword" className={props.classes.icon} />
          <Typography variant="button" >{props.play}</Typography>
      </Paper>
    </Link>
  )
}

export default withStyles(styles)(PlayIcon);