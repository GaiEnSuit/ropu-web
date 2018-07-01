import React, { Component } from 'react';

const withStoryDataControl = (WrappedComponent) => class extends Component {
  render(){
    return (
      <WrappedComponent
        {...this.props}
      />
    )
  }
}

export default withStoryDataControl;