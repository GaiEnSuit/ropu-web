import React from 'react';

// Material-UI
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

// Style Classes
import styles from '../../styles';

// Material-UI style overrides
import { withStyles } from '@material-ui/core/styles';

// Custom Components
import TwitterWidget from './TwitterWidget';

const NewsFeed = (props) => {
  return (
    <div className={props.classes.newsFeed}>
      <Paper>
        <Typography
          className={props.classes.title}
          variant="display1"
        >
          {props.homePageText.newsFeed}
        </Typography>
        <TwitterWidget homePageText={props.homePageText} />
      </Paper>
    </div>
  )
}

export default withStyles(styles)(NewsFeed);