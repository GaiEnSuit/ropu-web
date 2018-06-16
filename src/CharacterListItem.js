import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


class CharacterListItem extends Component {
  
  render() {
		return(
			<ListItem>
				<Link to={`/characters/${this.props.characterListItem.id}`}>
					<ListItemText>Name: {this.props.characterListItem.name}</ListItemText>
					<ListItemText>Story: {this.props.characterListItem.story}</ListItemText>
				</Link>
				<Button>Delete</Button>
			</ListItem>
		)
  }
}

export default CharacterListItem;