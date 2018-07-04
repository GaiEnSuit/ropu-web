import React, { Component } from 'react';

const withGameDataControl = (WrappedComponent) => class extends Component {
  
  // Select Game Functions
  
  selectGame = (game) => {
    this.props.update({selectedGame: game});
  }
  
  resetGameSelect = () => {
    this.props.update({selectedGame: {
      templateInteractableListData: [
      ]
    }});
  }
  
  findInteractable = (id) => {
    let item = this.props.selectedGame.interactableListData.find((item)=>{return item.id === id});
    return item
  }
  
  // Select Template Functions
  
  selectTemplate = (template) => {
    this.props.update({selectedTemplate: template});
  }

  resetSelectedTemplate = () => {
    this.props.update({selectedTemplate: null});
  }
  
  render(){
    return (
      <WrappedComponent
        selectGame = {this.selectGame}
        selectTemplate = {this.selectTemplate}
        resetSelectedTemplate = {this.resetSelectedTemplate}
        resetGameSelect = {this.resetGameSelect}
        findInteractable = {this.findInteractable}
        {...this.props}
      />
    )
  }
}

export default withGameDataControl;