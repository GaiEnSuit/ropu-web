import React, { Component } from 'react';

import { View } from 'react-native';

const withDialog = (WrappedComponent, SelectedDialog) => class extends Component {
  
  state = {
    open: false
  }
  
  // DialogControl
  updateDialog = (value, log = "Dialog Updated") => {
    this.setState({open: value}, console.log(log))
  }
  
  render () {
    return (
      <View>
        <WrappedComponent
          updateDialog={this.updateDialog}
          {...this.props}
        />
        <SelectedDialog
          open={this.state.open}
          updateDialog={this.updateDialog}
          {...this.props}
        />
      </View>
    )
  }
}

export default withDialog;