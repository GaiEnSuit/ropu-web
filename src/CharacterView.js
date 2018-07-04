import React, { Component } from 'react';

import CharacterCard from './CharacterCard';

import Roller from './Roller';
import InventoryMenu from './InventoryMenu';

class CharacterView extends Component {
  render() {
    return (
      <div>
        <CharacterCard character={this.props.character} />
        <Roller />
        <InventoryMenu interactableListData={this.props.character.interactableListData} />
      </div>
    );
  }
}

export default CharacterView;