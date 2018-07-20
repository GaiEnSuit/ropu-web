import React, { Component } from 'react';

import CharacterCard from './cards/CharacterCard';

import Roller from './sections/Roller';
import InventoryMenu from './sections/InventoryMenu';

// styles
import styles from './styles/styles';

class PlayerViewPage extends Component {
  render() {
    return (
      <main
        style={{...styles.minHeight}}
      >
        <CharacterCard character={this.props.character} />
        <Roller />
        <InventoryMenu interactableListData={this.props.character.interactableListData} />
      </main>
    );
  }
}

export default PlayerViewPage;