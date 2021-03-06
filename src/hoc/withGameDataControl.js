import React, { Component } from 'react';

const withGameDataControl = (WrappedComponent) => class extends Component {
  
  // Interactable Card Dialog Functions
  openInteractableCardDialog = (item) => {
    this.props.update({selectedInteractable: item})
    this.props.update({interactableCardDialog: true})
  }
  
  closeInteractableCardDialog = () => {
    this.props.update({selectedInteractable: null})
    this.props.update({interactableCardDialog: false})
  }
  
  // Select Game Functions
  setDefaultGame = (gameListData) => {
    let list = gameListData.filter(x => x.id === 0)
    let game = list[0]
    this.props.update({selectedGame: game, createCharacterData: Object.assign({}, this.props.createCharacterData, {game: game.name, gameID: game.id})})
  }
  
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
        setDefaultGame = {this.setDefaultGame}
        {...this.props}
      />
    )
  }
}

export default withGameDataControl;