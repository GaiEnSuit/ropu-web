import React from 'react';

import { connect } from 'react-redux';

//Routing
import { withRouter } from '../routing/Routing';

import { Text, View, Image, TouchableOpacity } from 'react-native';

// Modals
import NewsFeedModal from '../modals/NewsFeedModal';

// Images
import sword from '../images/sword_01b.png';
import book from '../images/book_05g.png';
import potion from '../images/potion_03g.png';
import scroll from '../images/scroll_01a.png';

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
    newsText: state.newsText,
    orientation: state.orientation
  }
}

// Play
const ConnectedPlay = (props) => {
  return (
    <TouchableOpacity
      style={[
        styles.justifyCenter,
        styles.alignCenter
      ]}
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
      <View
        style={[
          styles.justifyCenter,
          styles.alignCenter
        ]}
      >
        <Text
          style={[
            styles.colorRed,
            styles.button
          ]}
        >
          {props.playText}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const Play = withRouter(connect(mapStateToProps)(ConnectedPlay));

// Direct
const ConnectedDirect = (props) => {
  return (
    <TouchableOpacity
      style={[
        styles.justifyCenter,
        styles.alignCenter
      ]}
      onPress={()=>{
        props.history.push(props.storySelectionPath)
      }}
    >
      <View
        style={[
          styles.icon48,
          styles.justifyCenter,
          styles.alignCenter,
          styles.flex1
        ]}
      >
        <Image
          source={book}
          style={styles.icon36}
        />
      </View>
      <View
        style={[
          styles.justifyCenter,
          styles.alignCenter,
          styles.flex1
        ]}
      >
        <Text
          style={[
            styles.colorRed,
            styles.button
          ]}
        >
          {props.directText}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const Direct = withRouter(connect(mapStateToProps)(ConnectedDirect))

// Create
const ConnectedCreate = (props) => {
  return (
    <TouchableOpacity
      style={[
        styles.justifyCenter,
        styles.alignCenter
      ]}
      onPress={()=>{
        props.history.push(props.homebrewPath)
      }}
    >
      <View
        style={[
          styles.icon48,
          styles.justifyCenter,
          styles.alignCenter,
          styles.flex1
        ]}
      >
        <Image
          source={potion}
          style={styles.icon36}
        />
      </View>
      <View
        style={[
          styles.justifyCenter,
          styles.alignCenter,
          styles.flex1
        ]}
      >
        <Text
          style={[
            styles.colorRed,
            styles.button
          ]}
        >
          {props.homebrewText}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const Create = withRouter(connect(mapStateToProps)(ConnectedCreate));

// Create
const ConnectedNewsFeed = (props) => {
  return (
    <TouchableOpacity
      style={[
        styles.justifyCenter,
        styles.alignCenter
      ]}
      onPress={()=>{
        props.updateModal(true);
      }}
    >
      <View
        style={[
          styles.icon48,
          styles.justifyCenter,
          styles.alignCenter,
          styles.flex1
        ]}
      >
        <Image
          source={scroll}
          style={styles.icon36}
        />
      </View>
      <View
        style={[
          styles.justifyCenter,
          styles.alignCenter,
          styles.flex1
        ]}
      >
        <Text
          style={[
            styles.colorRed,
            styles.button
          ]}
        >
          {props.newsText}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const NewsFeed = withModal(connect(mapStateToProps)(ConnectedNewsFeed), NewsFeedModal)

// Main Menu
const ConnectedMainMenu = (props) => {
  return (
    <View
      style={[
        styles.flex1,
        {flexDirection: props.orientation === 'portrait'? 'column' : 'row'}
      ]}
    >
      <View
        style={[
          styles.directionColumn,
          styles.flex1,
          styles.justifyCenter,
          styles.alignCenter
        ]}
      >
        <View
          style={[
            styles.justifyCenter,
            styles.alignCenter,
            styles.flex1,
            styles.dim100
          ]}
        >
          <Play />
        </View>
        <View
          style={[
            styles.justifyCenter,
            styles.alignCenter,
            styles.flex1,
            styles.dim100
          ]}
        >
          <Direct />
        </View>
      </View>
      <View
        style={[
          styles.directionColumn,
          styles.flex1,
          styles.justifyCenter,
          styles.alignCenter
        ]}
      >
        <View
          style={[
            styles.justifyCenter,
            styles.alignCenter,
            styles.flex1,
            styles.dim100
          ]}
        >
          <Create />
        </View>
        <View
          style={[
            styles.justifyCenter,
            styles.alignCenter,
            styles.flex1,
            styles.dim100
          ]}
        >
          <NewsFeed />
        </View>
      </View>
    </View>
  )
}

const MainMenu = connect(mapStateToProps)(ConnectedMainMenu);

export default MainMenu;
