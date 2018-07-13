import React from 'react';
import { Link } from 'react-router-dom';

// Material-UI
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

// Images
import book from '../../images/book_05g.png';

// Style Classes
import styles from '../../styles';

const DirectIcon = (props) => {
  return (
    <Link to={props.paths.storyList} className="link">
      <Paper
        className={props.classes.directIcon}
        elevation={5}
      >
        <img src={book} alt="Book" className={props.classes.icon} />
        <Typography variant="button" >{props.direct}</Typography>
      </Paper>
    </Link>
  )
}

export default withStyles(styles)(DirectIcon);