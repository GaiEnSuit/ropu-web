// React
import React, { Component } from 'react';

// Material-Ui
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';

// Custom Components
import CharacterListItem from './CharacterListItem';
import CreateCharacterItem from './CreateCharacterItem';

class CharacterSelectionPage extends Component {
  
  // Delete Character from state
	deleteCharacter = (char) => () => {
		let newState = this.props.characterListData.filter(x => x !== char);
		this.props.update({
			characterListData: newState
		});
	}
  
  render() {
    
    // Generate List of Characters
    let characterList = this.props.characterListData.map((character) => {    
      return(
        <CharacterListItem
          key={character.id}
          characterListItem={character}
          deleteCharacter={this.deleteCharacter} 
        />
      )
    });
    
    // Layout
    return (
      <div>
        {/* Title */}
        <Typography variant="title">{this.props.characterSelectionPage.title}</Typography>
        {/* Render List of Characters */}
				<List>{characterList}</List>
        {/* List item that creates new character on click */}
				<CreateCharacterItem update={this.props.update} />
      </div>
    );
  }
}

export default CharacterSelectionPage;