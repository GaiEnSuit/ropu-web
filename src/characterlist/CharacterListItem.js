import React, { Component } from 'react';

// React Router Dom
import { Link } from 'react-router-dom';

// Material-ui
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

// Icons
import CloseIcon from '@material-ui/icons/Close';

class CharacterListItem extends Component {
  render() {
		return(
      <Paper>
        <ListItem>
          <ListItemIcon>
            <img src={this.props.characterListItem.img} alt="Character Portrait" style={{width: "64px", height: "64px"}} />
          </ListItemIcon>
          <Link to={`/characters/${this.props.characterListItem.id}`} className="link">
            <Typography>{this.props.characterListItem.name}</Typography>
            <Typography>{this.props.characterListItem.game}</Typography>
            <Typography>{this.props.characterListItem.campaign}</Typography>
          </Link>
          <ListItemIcon onClick={this.props.deleteCharacter(this.props.characterListItem)}>
            <CloseIcon />
          </ListItemIcon>
        </ListItem>
      </Paper>
		)
  }
}

export default CharacterListItem;