import React, { Component } from 'react';

const withDialogControl = (WrappedComponent) => class extends Component {
  
  // Interactable Card Dialog Functions
  
  openInteractableCardDialog = (item) => {
    this.props.update({selectedInteractable: item})
    this.props.update({interactableCardDialog: true})
  }
  
  closeInteractableCardDialog = () => {
    this.props.update({selectedInteractable: null})
    this.props.update({interactableCardDialog: false})
  }
  
  // DialogControl
  updateDialog = (value, dialog) => {
    if (value === true) {
      this.props.update({[dialog]: true})
    } else if (value === false) {
      this.props.update({[dialog]: false})
    } else {
      console.log('Dialog not Updated')
    }
  }
  
  render(){
    return (
      <WrappedComponent
        openInteractableCardDialog={this.openInteractableCardDialog}
        closeInteractableCardDialog={this.closeInteractableCardDialog}
        updateDialog={this.updateDialog}
        {...this.props}
      />
    )
  }
}

export default withDialogControl;