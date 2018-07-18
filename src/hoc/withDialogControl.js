import React, { Component } from 'react';

const withDialogControl = (WrappedComponent) => class extends Component {
  
  // DialogControl
  updateDialog = (value, dialog) => {
    if (value === true) {
      this.props.update({[dialog]: true})
    } else if (value === false) {
      this.props.update({[dialog]: false})
    } else {
    }
  }
  
  render(){
    return (
      <WrappedComponent
        updateDialog={this.updateDialog}
        {...this.props}
      />
    )
  }
}

export default withDialogControl;