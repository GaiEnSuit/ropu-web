import React from 'react';
import { Link } from 'react-router-dom';

// Material-UI
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// Images
import book from '../../images/book_05g.png';

// Style Classes
import styles from '../../styles';

const DirectIcon = (props) => {
  return (
    <Link to={props.paths.storyList} className="link">
      <Paper
        style={styles.directIcon}
        className="d-flex justify-center flex-d-column align-items-center"
        elevation={10}
      >
          <img src={book} alt="Book" style={styles.icon} />
        <Typography variant="button" className="text-center">{props.direct}</Typography>
      </Paper>
    </Link>
  )
}

export default DirectIcon;