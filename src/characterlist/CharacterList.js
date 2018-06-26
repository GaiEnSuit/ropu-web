import React, { Component } from 'react';

// React Router
import { Link } from 'react-router-dom';

// Materila-Ui
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';

// Custom Component
import CharacterListItem from './CharacterListItem';

class CharacterList extends Component {
  
	deleteCharacter = (char) => () => {
		let newState = this.props.characterListData.filter(x => x !== char)
		this.props.update({
			characterListData: newState
		})
	}
  
  render() {
    
    let characterListData = this.props.characterListData.map((character) => {    
      return(
        <CharacterListItem 
          characterListItem={character}
          deleteCharacter={this.deleteCharacter} 
          key={character.id}
        />
      )
    })
    
    return (
      <div>
        <Typography variant="title">{this.props.characterList.title}</Typography>
				<List>{characterListData}</List>
				<Link to="/characters/create"><Button variant="raised">{this.props.characterList.create}</Button></Link>
      </div>
    );
  }
}

export default CharacterList;