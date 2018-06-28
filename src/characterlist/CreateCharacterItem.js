import React, { Component } from 'react';

// Material-ui
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Paper from '@material-ui/core/Paper';

// Icons
import AddCircleIcon from '@material-ui/icons/AddCircle';

class CreateCharacterItem extends Component {
  render() {
		return(
      <Paper onClick={()=>{this.props.update({createCharacterDialog: true})}}>
        <ListItem style={{display: "flex", justifyContent: "center"}}>
          <ListItemIcon>
            <AddCircleIcon style={{width: "64px", height: "64px"}} />
          </ListItemIcon>
        </ListItem>
      </Paper>
		)
  }
}

export default CreateCharacterItem;