import React, { Component } from 'react';

import CharacterCard from './CharacterCard';

import Roller from './Roller';

class CharacterView extends Component {
  
  render() {
    
    let character = this.props.character;
    
    return (
      <div>
        <CharacterCard character={character} />
        <Roller />
      </div>
    );
  }
}

export default CharacterView;