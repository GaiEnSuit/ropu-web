import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

class NewsFeed extends Component {
  
  render() {
    
    let feedList = this.props.newsFeed.map((feedItem) => {
      return (
        <Grid item xs={12} key={feedItem.id}>
          <img src={feedItem.img} alt="Smiley face"></img>
          <Paper>{feedItem.title}</Paper>
        </Grid>
      )
    })
    
    return (
      <Grid container>
        {feedList}
      </Grid>
    );
  }
}

export default NewsFeed;