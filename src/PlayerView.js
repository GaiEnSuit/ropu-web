import React, { Component } from 'react';

import CharacterCard from './CharacterCard';

import Roller from './Roller';
import InventoryMenu from './InventoryMenu';

class PlayerView extends Component {
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

export default PlayerView;