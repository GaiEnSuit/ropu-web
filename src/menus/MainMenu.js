import React from 'react';

//Routing
import { withRouter } from '../routing/Routing';

import { Text, View, Image, TouchableOpacity } from 'react-native';

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
import withModal from '../hoc/withModal';
      
// Play
const Play = (props) => {
  return (
    <TouchableOpacity
      style={
        styles.directionRow
      }
      onPress={()=>{
        props.history.push(props.paths.characterSelection)
      }}
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
    </TouchableOpacity>
  )
}

// Direct
const Direct = (props) => {
  return (
    <TouchableOpacity
      style={
        styles.directionRow
      }
      onPress={()=>{
        props.history.push(props.paths.storySelection)
      }}
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
    </TouchableOpacity>
  )
}


// Create
const Create = (props) => {
  return (
    <TouchableOpacity
      style={
        styles.directionRow
      }
      onPress={()=>{
        props.history.push(props.paths.homebrew)
      }}
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
    </TouchableOpacity>
  )
}

// Create
const Guide = (props) => {
  return (
    <TouchableOpacity
      onPress={()=>{
        props.updateModal(true);
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
    </TouchableOpacity>
  )
}

// Guide with Guide Dialog
const GuideWithDialog = withModal(Guide, GuideDialog)

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

export default withRouter(MainMenu);