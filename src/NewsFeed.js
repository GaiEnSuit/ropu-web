import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class NewsFeed extends Component {
  
  render() {
    
    let feedList = this.props.newsFeed.map((feedItem) => {
      return (
        <Grid item xs={12} key={feedItem.id}>
          <Card>
            <CardMedia title="Portrait">
              <img src={feedItem.img} alt="portrait"/>
            </CardMedia>
            <CardContent>
              {feedItem.title}
            </CardContent>
          </Card>
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