import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class Characters extends Component {
  
  render() {
    
    const state = this.props.characterList;
    
    let characterList = state.map((character)=>{
      return(
        <ListItem key={character.id}>
          <ListItemText>Name: {character.name}</ListItemText>
          <br />
          <ListItemText>Story: {character.story}</ListItemText>
          <br />
          <Link to={`/characters/${character.id}`}>View</Link>
          <Button>Delete</Button>
        </ListItem>
      )
    });
    
    
    return (
      <div>
        <Typography variant="title">Characters</Typography>
        <Typography variant="subheading">Choose A Character to play or Create a New One</Typography>
        <List>
          {characterList}
        </List>
        <Button variant="raised"><Link to="/characters/create">Create a Character</Link></Button>
      </div>
    );
  }
}

export default Characters;