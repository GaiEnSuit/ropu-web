import React from 'react';
import { Link } from 'react-router-dom';

// Material-UI
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// Images
import sword from '../../images/sword_01b.png';

// Style Classes
import styles from '../../styles';

const PlayIcon = (props) => {
  return (
    <Link to={props.paths.characterList} className="link">
      <Paper
        style={styles.playIcon}
        className="d-flex justify-center flex-d-column align-items-center"
      >
          <img src={sword} alt="sword" style={styles.icon} />
          <Typography variant="button" className="text-center" >{props.play}</Typography>
      </Paper>
    </Link>
  )
}

export default PlayIcon;