import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';

import CharacterListItem from './CharacterListItem';


class CharacterList extends Component {
  
  render() {
    
    let characterList = this.props.characterList.map((character)=>{
      return(
				<CharacterListItem characterListItem={character} key={character.id} />
      )
    });
    
    return (
      <div>
        <Typography variant="title">Characters</Typography>
        <Typography variant="subheading">Choose A Character to play or Create a New One</Typography>
        <List>{characterList}</List>
        <Link to="/characters/create"><Button variant="raised">Create a Character</Button></Link>
      </div>
    );
  }
}

export default CharacterList;