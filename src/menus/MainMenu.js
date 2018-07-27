import React, { Component } from 'react';

//Routing
import { Link } from 'react-router-dom';

// Images
import sword from '../images/sword_01b.png';
import book from '../images/book_05g.png';
import potion from '../images/potion_03g.png';
import tome from '../images/book_05f.png';

// Material-UI
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

//styles
import styles from '../styles/styles';
import Typography from '@material-ui/core/Typography';

// HOC
import withDialog from '../hoc/withDialog';
      
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
            {props.text.play}
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
            {props.text.direct}
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
            {props.text.homebrew}
          </Typography>
        </ListItemText>
      </ListItem>
    </Link>
  )
}

// Create
const Guide = (props) => {
  return (
    <ListItem
      onClick={()=>{
        props.updateDialog(true);
      }}
    >
      <ListItemIcon>
        <img
          src={tome}
          alt="Book" />
      </ListItemIcon>
      <ListItemText>
        <Typography
          style={styles.colorWhite}
          variant="button"
        >
          {props.text.guide}
        </Typography>
      </ListItemText>
    </ListItem>
  )
}

// Guide with Guide Dialog
const GuideWithDialog = withDialog(Guide, 'guideDialog')

// Main Menu
const MainMenu = (props) => {
  return (
    <List
    >
      <Play
        {...props}
      />
      <Divider
        style={styles.bgColorRed}
      />
      <Direct
        {...props}
      />
      <Divider
        style={styles.bgColorRed}
      />
      <Create
        {...props}
      />
      <Divider
        style={styles.bgColorRed}
      />
      <GuideWithDialog
        {...props}
      />
    </List>
  )
}

export default MainMenu;