import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import { Link } from 'react-router-dom';

class StoryList extends Component {
  
  storyList = this.props.storyList.map((story, index) => {
    return (
      <div key={index}>
        <Link to="/">
          <ListItem button>
            <Typography >{story.title}</Typography>
          </ListItem>
        </Link>
        <Divider />
      </div>
    )
  })
  
  render() {
    return (
      <div>
        <Typography variant="display1">Stories</Typography>
        <List>
          {this.storyList}
        </List>
      </div>
    );
  }
}

export default StoryList;