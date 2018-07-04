import React from 'react';

// React Router Dom
import { Link } from 'react-router-dom';

// Material-ui
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

// Icons
import CloseIcon from '@material-ui/icons/Close';

// Higher Order Components
import withCharacterDataControl from '../hoc/withCharacterDataControl';

const CharacterListItem = (props) => {
  return(
    <Paper>
      <ListItem>
        {/* Character Portrait */}
        <ListItemIcon>
          <img className="icon-64px" src={props.characterListItem.img} alt="Character Portrait" />
        </ListItemIcon>
        {/* Character Summary */}
        <Link to={`/characters/${props.characterListItem.id}`} className="link">
          <Typography>{props.characterListItem.name}</Typography>
          <Typography>{props.characterListItem.game}</Typography>
          <Typography>{props.characterListItem.campaign}</Typography>
        </Link>
        {/* Delete Button */}
        <ListItemIcon
          onClick={()=>{
            props.deleteCharacter(props.characterListItem);
          }}>
          <CloseIcon />
        </ListItemIcon>
      </ListItem>
    </Paper>
  )
}

export default withCharacterDataControl(CharacterListItem);