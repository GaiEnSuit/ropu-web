import React, { Component } from 'react';

// Material-UI
import Typography from '@material-ui/core/Typography';

class NewsFeed extends Component {
  render() {
    return (
      <div>
        <Typography variant="display1">News Feed</Typography>
        <a className="twitter-timeline" 
          data-partner="tweetdeck" 
          data-theme="dark" 
          data-link-color="#E81C4F" 
          data-chrome="noheader nofooter noborders" 
          href="https://twitter.com/RoPU85338305/timelines/1010648304001081344?ref_src=twsrc%5Etfw"
        >
          RoPU Curated Timeline
        </a>
      </div>
    );
  }
}

export default NewsFeed;