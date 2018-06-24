import React, { Component } from 'react';

// Material-UI
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';

class NewsFeed extends Component {

  componentDidMount() {
    window.twttr.widgets.load()
  }
  
  render() {
    return (
      <Paper>
        <a
          className="twitter-timeline link" 
          data-partner="tweetdeck" 
          data-theme="light" 
          data-link-color="#E81C4F" 
          data-chrome="nofooter noscrollbar transparent"
          href="https://twitter.com/RoPU_TEAM/timelines/1010648304001081344?ref_src=twsrc%5Etfw"
        >
          <CircularProgress />
        </a>
      </Paper>
    );
  }
}

export default NewsFeed;