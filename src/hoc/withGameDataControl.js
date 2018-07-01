import React, { Component } from 'react';

const withGameDataControl = (WrappedComponent) => class extends Component {
  render(){
    return (
      <WrappedComponent
        {...this.props}
      />
    )
  }
}

export default withGameDataControl;