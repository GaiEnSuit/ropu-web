import React, { Component } from 'react';

const withCharacterDataControl = (WrappedComponent) => class extends Component {

  // Empty Character Template
  emptyCharacterTemplate = {
    id: null,
    img: null,
    name: '',
    description: '',
    gameID: null,
    story: null,
    abilities: {
      str: 0,
      end: 0,
      int: 0,
      wil: 0,
      dex: 0,
      agi: 0
    },
    stats: {
      hp: 0,
      mp: 0,
      sp: 0,
      maxhp: 0,
      maxmp: 0,
      maxsp: 0
    },
    interactableListData: [
    ]
  }
  
  // Create Character Data Functions
  
  setCreateCharacterID = () => {
    let usedIDs = [];
    this.props.characterListData.forEach((char)=>{
      usedIDs.push(char.id);
    });
    usedIDs.sort((a, b) => a - b);
    let lastID = usedIDs[usedIDs.length-1];
    let newID = lastID + 1;
    this.props.update({createCharacterData: Object.assign(this.props.createCharacterData, {id: newID})});
  }
  
  resetCreateCharacter = () => {
    this.props.update({createCharacterData: this.emptyCharacterTemplate})
  }
  
  updateCreateCharacterName = (event) => {
    this.props.update({createCharacterData: Object.assign({}, this.props.createCharacterData, {name: event.target.value})})
  }
  
  updateCreateCharacterGame = (game) => {
    this.props.update({createCharacterData: Object.assign({}, this.props.createCharacterData, {game: game.name, gameID: game.id})})
  }
  
  addCreateCharacterInteractable = (interactable) => {
    let updatedArray = this.props.createCharacterData.interactableListData.push(interactable)
    this.props.update({createCharacterData: Object.assign({}, this.props.createCharacterData, {interactableListData: updatedArray})})
  }
  
  removeCreateCharacterInteractable = (interactable) => {
    let updatedArray = this.props.createCharacterData.interactableListData.filter(x => x.index !== interactable.index)
    this.props.update({createCharacterData: Object.assign({}, this.props.createCharacterData, {interactableListData: updatedArray})})
  }
  
  setCreateCharacterTemplate = (template) => {
    this.props.update({createCharacterData: Object.assign({}, this.props.createCharacterData, {interactableListData: template.interactableListData})})
  }
  
  clearCreateCharacterTemplate = () => {
    this.props.update({createCharacterData: Object.assign({}, this.props.createCharacterData, {interactableListData: []})})
  }
  
  updateCreateCharacterDescription = (event) => {
    this.props.update({createCharacterData: Object.assign({}, this.props.createCharacterData, {description: event.target.value})})
  }
  
  // Existing Character Data Functions
  
  deleteCharacter = (char) => {
    console.log(this.props.characterListData);
    let newState = this.props.characterListData.filter(x => x !== char);
		this.props.update({
			characterListData: newState
		});
  }
  
  addNewCharacter = () => {
    this.setCreateCharacterID();
    let characterListData = this.props.characterListData;
    characterListData.push(this.props.createCharacterData);
    this.props.update({characterListData: characterListData});
  }
  
  render() {
    return (
      <WrappedComponent
        resetCreateCharacter={this.resetCreateCharacter}
        deleteCharacter={this.deleteCharacter}
        updateCreateCharacterName={this.updateCreateCharacterName}
        updateCreateCharacterGame={this.updateCreateCharacterGame}
        updateCreateCharacterDescription={this.updateCreateCharacterDescription}
        addCreateCharacterInteractable={this.addCreateCharacterInteractable}
        removeCreateCharacterInteractable={this.removeCreateCharacterInteractable}
        clearCreateCharacterTemplate={this.clearCreateCharacterTemplate}
        setCreateCharacterTemplate={this.setCreateCharacterTemplate}
        addNewCharacter={this.addNewCharacter}
        setCreateCharacterID={this.setCreateCharacterID}
        {...this.props}
      />
    )
  }
}

export default withCharacterDataControl;