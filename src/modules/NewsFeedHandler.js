import React, { Component } from 'react';

import { View } from 'react-native';

// HOC
import withDialog from '../hoc/withDialog';

// News Feed That Opens On Mount
class NewsFeedHandler extends Component {
  
  componentDidMount ()
  {
    this.props.updateDialog(true);
  }
  
  render()
  {
    return (
      <View
        {...this.props}
      />
    )
  }
}

export default withDialog(NewsFeedHandler, 'newsFeedDialog');