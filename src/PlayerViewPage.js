import React, { Component } from 'react';

import CharacterCard from './cards/CharacterCard';

import Roller from './sections/Roller';
import InventoryMenu from './sections/InventoryMenu';

class PlayerViewPage extends Component {
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

export default PlayerViewPage;