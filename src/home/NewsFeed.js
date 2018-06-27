import React, { Component } from 'react';

// Material-UI
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

// React-Twitter-Embed
import { TwitterTimelineEmbed } from 'react-twitter-embed';

class NewsFeed extends Component {
  render() { 
    return (
      <Paper>
        <Typography variant="display1">{this.props.newsFeed.title}</Typography>
        <TwitterTimelineEmbed
          sourceType="collection"
          id="1010648304001081344"
          options={
            {
              chrome: "noheader nofooter noborders noscrollbar",
              height: "auto"
            }
          }
        >
          <CircularProgress />
        </TwitterTimelineEmbed>
      </Paper>
    );
  }
}

export default NewsFeed;