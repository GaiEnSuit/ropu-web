import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import AccountBoxIcon from '@material-ui/icons/AccountBox';

class CharacterCard extends Component {
  render() {
    return (
      <Card>
        {
          this.props.character.img !== null?
          (
            <CardMedia title="portrait" image={this.props.character.img} style={{height: '350px'}} />
          ) :
          (
            <AccountBoxIcon style={{width: "100%", height: "auto"}} />
          )
        }
                                                                             
        <CardContent>
          <Typography>Name: {this.props.character.name}</Typography>
          <Typography>Story: {this.props.character.story}</Typography>
          <Typography>Description: {this.props.character.description}</Typography>
        </CardContent>
        <CardContent>
          <Typography>HP {this.props.character.hp} / {this.props.character.maxhp} </Typography>
          <Typography>MP {this.props.character.mp} / {this.props.character.maxmp} </Typography>
          <Typography>SP {this.props.character.sp} / {this.props.character.maxsp} </Typography>
        </CardContent>
        <CardContent>
          <Typography>STR {this.props.character.str}</Typography>
          <Typography>END {this.props.character.end}</Typography>
          <Typography>INT {this.props.character.int}</Typography>
          <Typography>WIL {this.props.character.wil}</Typography>
          <Typography>DEX {this.props.character.dex}</Typography>
          <Typography>AGI {this.props.character.agi}</Typography>
        </CardContent>
      </Card>
    );
  }
}

export default CharacterCard;