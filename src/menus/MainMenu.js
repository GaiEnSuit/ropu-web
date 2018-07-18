import React from 'react';

//Routing
import { Link } from 'react-router-dom';

// Images
import sword from '../images/sword_01b.png';
import book from '../images/book_05g.png';
import potion from '../images/potion_03g.png';

// Material-UI
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

//styles
import styles from '../styles/styles';
import Typography from '@material-ui/core/Typography';

// Main Menu
const MainMenu = (props) => {
  return (
    <List>
      <Play
        play={props.play}
        paths={props.paths}
      />
      <Divider
        style={styles.bgColorWhite}
      />
      <Direct
        direct={props.direct}
        paths={props.paths}
      />
      <Divider
        style={styles.bgColorWhite}
      />
      <Create
        homebrew={props.homebrew}
        paths={props.paths}
      />
    </List>
  )
}

// Play
const Play = (props) => {
  return (
    <Link
      to={props.paths.characterSelection}
    >
      <ListItem>
        <ListItemIcon>
          <img
            src={sword}
            alt="sword"
          />
        </ListItemIcon>
        <ListItemText>
          <Typography
            style={styles.colorWhite}
            variant="button"
          >
            {props.play}
          </Typography>
        </ListItemText>
      </ListItem>
    </Link>
  )
}

// Direct
const Direct = (props) => {
  return (
    <Link
      to={props.paths.storySelection}
    >
      <ListItem>
        <ListItemIcon>
          <img
            src={book}
            alt="book"
          />
        </ListItemIcon>
        <ListItemText>
          <Typography
            style={styles.colorWhite}
            variant="button"
          >
            {props.direct}
          </Typography>
        </ListItemText>
      </ListItem>
    </Link>
  )
}


// Create
const Create = (props) => {
  return (
    <Link
      to={props.paths.homebrew}
    >
      <ListItem>
        <ListItemIcon>
          <img
            src={potion}
            alt="Book" />
        </ListItemIcon>
        <ListItemText>
          <Typography
            style={styles.colorWhite}
            variant="button"
          >
            {props.homebrew}
          </Typography>
        </ListItemText>
      </ListItem>
    </Link>
  )
}

export default MainMenu;