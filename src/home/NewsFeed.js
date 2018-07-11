import React from 'react';

// Material-UI
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

// React-Twitter-Embed
import { TwitterTimelineEmbed } from 'react-twitter-embed';

// Style Classes
import styles from '../styles';

// Material-UI Styles
import { withStyles } from '@material-ui/core/styles';

// Iamges
import spinner from '../images/spinner-loop.gif';

const NewsFeed = (props) => {
  
  const { classes } = props;
  
  return (
    <Grid
      container
      justify="center"
      style={styles.gridContainer}
      spacing={24}
    >
      <Grid
        item
        xs={12}
      >
        <Paper>
          <Typography
            classes={{root: classes.root}}
            variant="display1"
            color="default"
            className="text-center"
          >
            {props.homePageText.newsFeed}
          </Typography>
        </Paper>
        {!navigator.onLine?
          (
            <Typography
              className="text-center"
              variant="headline"
            >
              {props.homePageText.offline}
            </Typography>
          ) : 
          (
            <Paper
              style={{
                minHeight: '200px',
                background: `#ffffff url(${spinner}) no-repeat center`,
                backgroundSize: 'contain'
              }}
            >
              <TwitterTimelineEmbed
                sourceType="collection"
                id="1010648304001081344"
                options={{chrome: "noheader nofooter", height: "500"}}
              />
            </Paper>
          )
        }
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(NewsFeed);