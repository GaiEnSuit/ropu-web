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
    str: 0,
    end: 0,
    int: 0,
    wil: 0,
    dex: 0,
    agi: 0,
    hp: 0,
    mp: 0,
    sp: 0,
    maxhp: 5,
    maxmp: 5,
    maxsp: 5,
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
  
  updateCreateCharacterAbility = (ability, direction, value) => {
    
    let newAbilityValue;
    let newStatValue;
    let stat;
    
    // If ability is increasing
    if (direction === "increase") {
      newAbilityValue = this.props.createCharacterData[ability] + 1;
      
      // increase corresponding stat value
      switch (ability) {
        case "end":
            stat = "maxhp";
            newStatValue = this.props.createCharacterData.maxhp + 1;
            break;
        case "wil":
            stat = "maxmp";
            newStatValue = this.props.createCharacterData.maxmp + 1;
            break;
        case "agi":
            stat = "maxsp";
            newStatValue = this.props.createCharacterData.maxsp + 1;
            break;
        default: 
            break;
      };
    // if ability is decreasing
    } else if (direction === "decrease") {
      newAbilityValue = this.props.createCharacterData[ability] - 1;
      
      // decrease corresponding stat value
      switch (ability) {
        case "end":
            stat = "maxhp";
            newStatValue = this.props.createCharacterData.maxhp - 1;
            break;
        case "wil":
            stat = "maxmp";
            newStatValue = this.props.createCharacterData.maxmp - 1;
            break;
        case "agi":
            stat = "maxsp";
            newStatValue = this.props.createCharacterData.maxsp - 1;
            break;
        default: 
            break;
      };
      
    // If ability is being edited directly
    } else {
      newAbilityValue = value;
      
      // Update the characters stat with based on the ability
      switch (ability) {
        case "end":
            stat = "maxhp";
            newStatValue = newAbilityValue + 5;
            break;
        case "wil":
            stat = "maxmp";
            newStatValue = newAbilityValue + 5;
            break;
        case "agi":
            stat = "maxsp";
            newStatValue = newAbilityValue + 5;
            break;
        default: 
            break;
      };
      
    }
    
    this.props.update({createCharacterData: Object.assign({}, this.props.createCharacterData, {[ability]: newAbilityValue, [stat]: newStatValue})});
  }
  
  // Existing Character Data Functions
  
  selectCharacter = (char) => {
    this.props.update({selectedCharacter: char})
  }
  
  deleteCharacter = (char) => {
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
        updateCreateCharacterAbility={this.updateCreateCharacterAbility}
        selectCharacter={this.selectCharacter}
        {...this.props}
      />
    )
  }
}

export default withCharacterDataControl;