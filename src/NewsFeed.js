import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import NewsFeedItem from './NewsFeedItem';

class NewsFeed extends Component {
  
  render() {
    
    let newsFeedList = this.props.newsFeed.map((feedItem) => {
      return (
        <Grid item xs={12} key={feedItem.id}>
          <NewsFeedItem newsFeedItem={feedItem}/>
        </Grid>
      )
    })
    
    return (
      <div>
        <Typography variant='display1'>News</Typography>
        <Grid container>
          {newsFeedList}
        </Grid>
      </div>
    );
  }
}

export default NewsFeed;