import React from 'react';

// Material-ui
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

// Style Overrides
import styles from '../styles/styles';

// Higher Order Components
import withCharacterDataControl from '../hoc/withCharacterDataControl';
import withGameDataControl from '../hoc/withGameDataControl';

// Laout
const GameList = (props) => {
  return (
    <List>
      {props.gameListData.map((game, index)=>{
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
      })}
    </List>
  )
}

export default withGameDataControl(withCharacterDataControl(GameList));