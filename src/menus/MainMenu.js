import React from 'react';

//Routing
import { Link } from 'react-router-dom';

import { Text, View, Image } from 'react-native';

// Dialogs
import GuideDialog from '../dialogs/GuideDialog';

// Images
import sword from '../images/sword_01b.png';
import book from '../images/book_05g.png';
import potion from '../images/potion_03g.png';
import tome from '../images/book_05f.png';

//styles
import styles from '../styles/styles';

// HOC
import withDialog from '../hoc/withDialog';
      
// Play
const Play = (props) => {
  return (
    <Link
      to={props.paths.characterSelection}
    >
      <View
        style={
          styles.directionRow
        }
      >
        <View
          style={[
            styles.icon48,
            styles.justifyCenter,
            styles.alignCenter
          ]}
        >
          <Image
            source={sword}
            style={styles.icon36}
          />
        </View>
        <Text
          style={[
            styles.displayFlex,
            styles.colorWhite,
            styles.justifyCenter,
            styles.alignCenter
          ]}
        >
          {props.text.play}
        </Text>
      </View>
    </Link>
  )
}

// Direct
const Direct = (props) => {
  return (
    <Link
      to={props.paths.storySelection}
    >
      <View
        style={
          styles.directionRow
        }
      >
        <View
          style={[
            styles.icon48,
            styles.justifyCenter,
            styles.alignCenter
          ]}
        >
          <Image
            source={book}
            style={styles.icon36}
          />
        </View>
        <Text
          style={[
            styles.displayFlex,
            styles.colorWhite,
            styles.justifyCenter,
            styles.alignCenter
          ]}
        >
          {props.text.direct}
        </Text>
      </View>
    </Link>
  )
}


// Create
const Create = (props) => {
  return (
    <Link
      to={props.paths.homebrew}
    >
      <View
        style={
          styles.directionRow
        }
      >
        <View
          style={[
            styles.icon48,
            styles.justifyCenter,
            styles.alignCenter
          ]}
        >
          <Image
            source={potion}
            style={styles.icon36}
          />
        </View>
        <Text
          style={[
            styles.displayFlex,
            styles.colorWhite,
            styles.justifyCenter,
            styles.alignCenter
          ]}
        >
          {props.text.homebrew}
        </Text>
      </View>
    </Link>
  )
}

// Create
const Guide = (props) => {
  return (
    <View
      onClick={()=>{
        props.updateDialog(true);
      }}
      style={[
        styles.directionRow
      ]}
    >
      <View
        style={[
          styles.icon48,
          styles.justifyCenter,
          styles.alignCenter
        ]}
      >
        <Image
          source={tome}
          style={styles.icon36}
        />
      </View>
      <Text
        style={[
          styles.displayFlex,
          styles.colorWhite,
          styles.justifyCenter,
          styles.alignCenter
        ]}
      >
        {props.text.guide}
      </Text>
    </View>
  )
}

// Guide with Guide Dialog
const GuideWithDialog = withDialog(Guide, GuideDialog)

// Main Menu
const MainMenu = (props) => {
  return (
    <View>
      <Play
        {...props}
      />
      <Direct
        {...props}
      />
      <Create
        {...props}
      />
      <GuideWithDialog
        {...props}
      />
    </View>
  )
}

export default MainMenu;