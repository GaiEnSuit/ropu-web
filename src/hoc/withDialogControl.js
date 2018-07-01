import React, { Component } from 'react';

const withDialogControl = (WrappedComponent) => class extends Component {

  openCreateCharacterDialog = () => {
    this.props.update({createCharacterDialog: true})
  }
  
  closeCreateCharacterDialog = () => {
    this.props.update({createCharacterDialog: false})
  }
  
  openCancelCreateCharacterDialog = () => {
    this.props.update({cancelCreateCharacterDialog: true})
  }

  closeCancelCreateCharacterDialog = () => {
    this.props.update({cancelCreateCharacterDialog: false})
  }
  
  openHomeDialog = () => {
    this.props.update({homeDialog: true})
  }
  
  closeHomeDialog = () => {
    this.props.update({homeDialog: false})
  }
  
  openMarketDialog = () => {
    this.props.update({marketDialog: true})
  }
  
  closeMarketDialog = () => {
    this.props.update({marketDialog: false})
  }
  
  openGuideDialog = () => {
    this.props.update({guideDialog: true})
  }
  
  closeGuideDialog = () => {
    this.props.update({guideDialog: false})
  }
  
  openLogInDialog = () => {
    this.props.update({logInDialog: true})
  }
  
  closeLogInDialog = () => {
    this.props.update({logInDialog: false})
  }
  
  openMenuDialog = () => {
    this.props.update({menuDialog: true})
  }
  
  closeMenuDialog = () => {
    this.props.update({menuDialog: false})
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
        {...this.props}
      />
    )
  }
}

export default withDialogControl;