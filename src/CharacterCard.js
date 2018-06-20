import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class CharacterCard extends Component {
  render() {
    return (
      <Card>
        <CardMedia title="portrait" image={this.props.character.img} style={{height: '350px'}} />
        <CardContent>
          <Typography>Name: {this.props.character.name}</Typography>
          <Typography>Story: {this.props.character.story}</Typography>
          <Typography>Description: {this.props.character.description}</Typography>
        </CardContent>
        <CardContent>
          <Typography>HP {this.props.character.stats.hp} / {this.props.character.stats.maxhp} </Typography>
          <Typography>MP {this.props.character.stats.mp} / {this.props.character.stats.maxmp} </Typography>
          <Typography>SP {this.props.character.stats.sp} / {this.props.character.stats.maxsp} </Typography>
        </CardContent>
        <CardContent>
          <Typography>STR {this.props.character.abilities.str}</Typography>
          <Typography>END {this.props.character.abilities.end}</Typography>
          <Typography>INT {this.props.character.abilities.int}</Typography>
          <Typography>WIL {this.props.character.abilities.wil}</Typography>
          <Typography>DEX {this.props.character.abilities.dex}</Typography>
          <Typography>AGI {this.props.character.abilities.agi}</Typography>
        </CardContent>
      </Card>
    );
  }
}

export default CharacterCard;