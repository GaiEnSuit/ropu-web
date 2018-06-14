import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Roller from './Roller';

class CharacterView extends Component {
  
  render() {
    
    let character = this.props.character;
    
    return (
      <div>
        <Card>
          <CardMedia title="portrait" image={character.img} style={{height: '350px'}} />
          <CardContent>
            <Typography>Name: {character.name}</Typography>
            <Typography>Story: {character.story}</Typography>
            <Typography>Description: {character.description}</Typography>
          </CardContent>
          <CardContent>
            <Typography>STR {character.abilities.str}</Typography>
            <Typography>END {character.abilities.end}</Typography>
            <Typography>INT {character.abilities.int}</Typography>
            <Typography>WIL {character.abilities.wil}</Typography>
            <Typography>DEX {character.abilities.dex}</Typography>
            <Typography>AGI {character.abilities.agi}</Typography>
          </CardContent>
        </Card>
        <Roller />
      </div>
    );
  }
}

export default CharacterView;