import React, { Component } from 'react';

import { View } from 'react-native';

const withModal = (WrappedComponent, SelectedModal) => class extends Component {

  state = {
    open: false
  }

  // DialogControl
  updateModal = (value, log = "Modal Updated") => {
    this.setState({open: value}, console.log(log))
  }

  render () {
    return (
      <View>
        <WrappedComponent
          updateModal={this.updateModal}
          {...this.props}
        />
        <SelectedModal
          open={this.state.open}
          updateModal={this.updateModal}
          {...this.props}
        />
      </View>
    )
  }
}

export default withModal;
