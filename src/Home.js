import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import NewsFeed from './NewsFeed';

class Home extends Component {
  render() {
    let ctaList = this.props.cta.map((cta, index) => {
      return (
        <ListItem key={index}>
          <Link to={cta.url}>
            <ListItemText >
              <Typography variant="title">{cta.text}</Typography>
            </ListItemText>
          </Link>
        </ListItem>
      )
    });
    
    return (
      <div>
        <Paper>
          <List>
            {ctaList}
          </List>
        </Paper>
        <NewsFeed newsFeed={this.props.newsFeed}/>
      </div>
    );
  }
}

export default Home;