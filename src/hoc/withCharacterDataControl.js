import React, { Component } from 'react';

const withCharacterDataControl = (WrappedComponent) => class extends Component {

  emptyCharacterTemplate = {
    id: null,
    img: null,
    name: null,
    description: null,
    game: null,
    gameID: null,
    campaign: null,
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
    interactables: [
    ]
  }
  
  resetCharacter = () => {
    this.props.update({createCharacterData: this.emptyCharacterTemplate})
  }
  
  updateCharacterName = (value) => {
    this.props.update({createCharacterData: Object.assign({}, this.props.createCharacterData, {name: value})})
  }
  
  deleteCharacter = (char) => ()=> {
    let newState = this.props.characterListData.filter(x => x !== char);
		this.props.update({
			characterListData: newState
		});
  }
  
  render(){
    return (
      <WrappedComponent
        resetCharacter={this.resetCharacter}
        deleteCharacter={this.deleteCharacter}
        createCharacterName={this.createCharacterName}
        {...this.props}
      />
    )
  }
}

export default withCharacterDataControl;