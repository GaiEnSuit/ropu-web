import React from 'react';

import { connect } from 'react-redux';

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

const mapStateToProps = state => {
  return {
    characterSelectionPath: state.characterSelectionPath,
    storySelectionPath: state.storySelectionPath,
    playText: state.playText,
    directText: state.directText,
    homebrewText: state.homebrewText,
    guideText: state.guideText,
  }
}

// Play
const ConnectedPlay = (props) => {
  return (
    <TouchableOpacity
      style={
        styles.directionRow
      }
      onPress={()=>{
        props.history.push(props.characterSelectionPath)
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
        {props.playText}
      </Text>
    </TouchableOpacity>
  )
}

const Play = withRouter(connect(mapStateToProps)(ConnectedPlay));

// Direct
const ConnectedDirect = (props) => {
  return (
    <TouchableOpacity
      style={
        styles.directionRow
      }
      onPress={()=>{
        props.history.push(props.storySelectionPath)
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
        {props.directText}
      </Text>
    </TouchableOpacity>
  )
}

const Direct = withRouter(connect(mapStateToProps)(ConnectedDirect))

// Create
const ConnectedCreate = (props) => {
  return (
    <TouchableOpacity
      style={
        styles.directionRow
      }
      onPress={()=>{
        props.history.push(props.homebrewPath)
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
        {props.homebrewText}
      </Text>
    </TouchableOpacity>
  )
}

const Create = withRouter(connect(mapStateToProps)(ConnectedCreate));

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
        {props.guideText}
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
      <Play />
      <Direct />
      <Create />
      <GuideWithDialog />
    </View>
  )
}

export default MainMenu;
