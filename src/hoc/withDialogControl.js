import React, { Component } from 'react';

const withDialogControl = (WrappedComponent) => class extends Component {
  
  // Create Character Dialog Functions
  openCreateCharacterDialog = () => {
    this.props.update({createCharacterDialog: true})
  }
  
  closeCreateCharacterDialog = () => {
    this.props.update({createCharacterDialog: false})
  }
  
  // Cancel Create Character Dialog Functions
  
  openCancelCreateCharacterDialog = () => {
    this.props.update({cancelCreateCharacterDialog: true})
  }

  closeCancelCreateCharacterDialog = () => {
    this.props.update({cancelCreateCharacterDialog: false})
  }
  
  // Home Dialog Functions
  
  openHomeDialog = () => {
    this.props.update({homeDialog: true})
  }
  
  closeHomeDialog = () => {
    this.props.update({homeDialog: false})
  }
  
  // Market Dialog Functions
  
  openMarketDialog = () => {
    this.props.update({marketDialog: true})
  }
  
  closeMarketDialog = () => {
    this.props.update({marketDialog: false})
  }
  
  // Guide Dialog Functions
  
  openGuideDialog = () => {
    this.props.update({guideDialog: true})
  }
  
  closeGuideDialog = () => {
    this.props.update({guideDialog: false})
  }
  
  // Log In Dialog Functions
  
  openLogInDialog = () => {
    this.props.update({logInDialog: true})
  }
  
  closeLogInDialog = () => {
    this.props.update({logInDialog: false})
  }
  
  // Menu Dialog Functions
  
  openMenuDialog = () => {
    this.props.update({menuDialog: true})
  }
  
  closeMenuDialog = () => {
    this.props.update({menuDialog: false})
  }
  
  // Interactable Card Dialog Functions
  
  openInteractableCardDialog = (item) => {
    this.props.update({selectedInteractable: item})
    this.props.update({interactableCardDialog: true})
  }
  
  closeInteractableCardDialog = () => {
    this.props.update({selectedInteractable: null})
    this.props.update({interactableCardDialog: false})
  }
  
  render(){
    return (
      <WrappedComponent
        openCancelCreateCharacterDialog={this.openCancelCreateCharacterDialog}
        closeCancelCreateCharacterDialog={this.closeCancelCreateCharacterDialog}
        openCreateCharacterDialog={this.openCreateCharacterDialog}
        closeCreateCharacterDialog={this.closeCreateCharacterDialog}
        openHomeDialog={this.openHomeDialog}
        closeHomeDialog={this.closeHomeDialog}
        openMarketDialog={this.openMarketDialog}
        closeMarketDialog={this.closeMarketDialog}
        openGuideDialog={this.openGuideDialog}
        closeGuideDialog={this.closeGuideDialog}
        openLogInDialog={this.openLogInDialog}
        closeLogInDialog={this.closeLogInDialog}
        openMenuDialog={this.openMenuDialog}
        closeMenuDialog={this.closeMenuDialog}
        openInteractableCardDialog={this.openInteractableCardDialog}
        closeInteractableCardDialog={this.closeInteractableCardDialog}
        {...this.props}
      />
    )
  }
}

export default withDialogControl;