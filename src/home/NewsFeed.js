import React from 'react';

// Material-UI
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

// React-Twitter-Embed
import { TwitterTimelineEmbed } from 'react-twitter-embed';

// Style Classes
import styles from '../styles';

// Material-UI Styles
import { withStyles } from '@material-ui/core/styles';

const NewsFeed = (props) => {
  
  const { classes } = props;
  
  return (
    <Grid
      container
      justify="space-around"
      style={styles.gridContainer}
    >
      <Grid
        item
        xs={11}
        lg={8}
      >
        <Paper
          raised={24}
        >
          <Typography
            classes={{root: classes.root}}
            variant="display1"
            color="default"
            className="text-center"
          >
            {props.homePageText.newsFeed}
          </Typography>
        </Paper>
        <Paper
          raised={24}
        >
          <TwitterTimelineEmbed
            style={{margin: "auto"}}
            sourceType="collection"
            id="1010648304001081344"
            options={{chrome: "noheader nofooter"}}
          >
            <CircularProgress />
          </TwitterTimelineEmbed>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(NewsFeed);