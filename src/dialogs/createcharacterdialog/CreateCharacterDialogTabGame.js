import React, { Component } from 'react';

// Material-ui
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

class CreateCharacterDialogTabGame extends Component {
  
  render() {
    let gameList = this.props.gameListData.map((game, index)=>{
      return(
        <Paper key={game.id}>
          <ListItem 
            onClick={()=>{
              this.props.update({
                createCharacterData: Object.assign({}, this.props.createCharacterData, {game: game.name, gameID: game.id})
              })
            }}
          >
            <ListItemIcon>
              <img src={game.image} alt='Game' style={{width: "64px", height: "auto"}} />
            </ListItemIcon>
            <ListItemText>
              {game.name}
            </ListItemText>
          </ListItem>
        </Paper>
      )
    });
    
    return(
      <div>
        {this.props.createCharacterData.game &&
          <div>
            <Typography>{this.props.createCharacterDialogText.selectedGame}</Typography>
            <div>{this.props.createCharacterData.game.toUpperCase()}</div>
            <Button onClick={()=>this.props.update({createCharacterDialogTab: this.props.createCharacterDialogTab + 1})}>{this.props.createCharacterDialogText.continue}</Button>
          </div>
        }
        {this.props.createCharacterData.game? ( <Typography>{this.props.createCharacterDialogText.changeGame}</Typography> ) : (
          <Typography>{this.props.createCharacterDialogText.selectGame}</Typography>
        )}
        <List>
          {gameList}
        </List>
      </div>
    )
  }
}

export default CreateCharacterDialogTabGame;