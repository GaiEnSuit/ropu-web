import React, { Component } from 'react';

import { View } from 'react-native';

import NewsFeedModal from '../modals/NewsFeedModal';

// News Feed That Opens On Mount
class NewsFeedHandler extends Component {
  
  state = {
    open: false
  }
  
  componentDidMount ()
  {
    this.setState({open: true});
  }
  
  render()
  {
    return (
      <NewsFeedModal
        {...this.props}
        open={this.state.open}
      />
    )
  }
}

export default NewsFeedHandler;