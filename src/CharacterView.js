import React, { Component } from 'react';

class CharacterView extends Component {
  
  render() {
    
    let character = this.props.characterList.find(x => x.id === parseInt(this.props.match.id, 10));
    
    return (
      <div>
        {character.name}
      </div>
    );
  }
}

export default CharacterView;