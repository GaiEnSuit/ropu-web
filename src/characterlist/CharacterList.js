import React, { Component } from 'react';

// Material-Ui
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';

// Custom Component
import CharacterListItem from './CharacterListItem';
import CreateCharacterItem from './CreateCharacterItem';

class CharacterList extends Component {
  
	deleteCharacter = (char) => () => {
		let newState = this.props.characterListData.filter(x => x !== char);
		this.props.update({
			characterListData: newState
		});
	}
  
  render() {
    
    let characterListData = this.props.characterListData.map((character) => {    
      return(
        <CharacterListItem
          key={character.id}
          characterListItem={character}
          deleteCharacter={this.deleteCharacter} 
        />
      )
    });
    
    return (
      <div>
        <Typography variant="title">{this.props.characterList.title}</Typography>
				<List>
          {characterListData}
        </List>
				<CreateCharacterItem update={this.props.update} />
      </div>
    );
  }
}

export default CharacterList;