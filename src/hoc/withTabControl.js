import React, { Component } from 'react';

const withTabControl = (WrappedComponent) => class extends Component {
  
  nextCreateCharacterDialogTab = () => {
    this.props.update({createCharacterDialogTab: this.props.createCharacterDialogTab + 1});
  }
  
  backCreateCharacterDialogTab = () => {
    this.props.update({createCharacterDialogTab: this.props.createCharacterDialogTab - 1});
  }
  
  resetCreateCharacterDialogTab = () => {
    this.props.update({createCharacterDialogTab: 0});
  }
  
  setCreateCharacterDialogTab = (event, value) => {
    this.props.update({createCharacterDialogTab: value});
  }
  
  render(){
    return (
      <WrappedComponent
        nextCreateCharacterDialogTab={this.nextCreateCharacterDialogTab}
        backCreateCharacterDialogTab={this.backCreateCharacterDialogTab}
        resetCreateCharacterDialogTab={this.resetCreateCharacterDialogTab}
        setCreateCharacterDialogTab={this.setCreateCharacterDialogTab}
        {...this.props}
      />
    )
  }
}

export default withTabControl;