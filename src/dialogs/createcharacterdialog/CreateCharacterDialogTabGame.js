import React from 'react';

// Material-ui
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

// Higher Order Components
import withTabControl from '../../hoc/withTabControl';
import withCharacterDataControl from '../../hoc/withCharacterDataControl';
import withGameDataControl from '../../hoc/withGameDataControl';

const GameList = (props) => {
  return (
    props.gameListData.map((game, index)=>{
      return(
        <Paper key={game.id}>
          <ListItem
            onClick={()=>{
              props.updateCreateCharacterGame(game)
              props.selectGame(game)
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
    })
  )
}

const SelectedGame = (props) => {
  if (props.createCharacterData.game) {
    return (
      <div>
        <Typography>{props.createCharacterDialogText.selectedGame}</Typography>
        <Typography>{props.selectedGame.name.toUpperCase()}</Typography>
        <Typography>{props.createCharacterDialogText.setting}</Typography>
        <Typography>{props.selectedGame.setting}</Typography>
        <Typography>{props.createCharacterDialogText.description}</Typography>
        <Typography>{props.selectedGame.description}</Typography>
        <Button 
          onClick={()=>{
            props.nextCreateCharacterDialogTab();
          }}
        >
          {props.createCharacterDialogText.continue}
        </Button>
      </div>
    )
  } else return null
}

const CreateCharacterDialogTabGame = (props) => {
  return(
    <div>
      <SelectedGame {...props} />
      {
        props.createCharacterData.game?
        (
          <Typography>{props.createCharacterDialogText.changeGame}</Typography>
        ) : (
          <Typography>{props.createCharacterDialogText.selectGame}</Typography>
        )
      }
      <List>
        <GameList {...props} />
      </List>
    </div>
  )
}

export default withGameDataControl(withCharacterDataControl(withTabControl(CreateCharacterDialogTabGame)));