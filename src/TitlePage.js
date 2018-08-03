import React from 'react';

import { View, Text, Image } from 'react-native';

import { Link } from './routing/Routing';

// Styles
import styles from './styles/styles';

// menus
import MainMenu from './menus/MainMenu';

// Modules
import NewsFeedHandler from './modules/NewsFeedHandler';

const Title = (props) => {
  return(
    <Image
      source={require("./images/brand_white_4x3.png")}
      resizeMode="contain"
      style={styles.responsiveImage}
    />
  )
}

const Copyright = (props) => {
  return(
    <Text
      style={[
        styles.colorWhite
      ]}
    >
      {props.copyright}
    </Text>
  )
}

const StartButton = (props) => {
  return (
    <Link to={props.paths.home}>
      <Text
        style={[
          styles.colorWhite,
          styles.h6
        ]}
      >
        {props.text.start}
      </Text>
    </Link>
  )
}

const Version = (props) => {
  return (
    <Text
      style={styles.colorWhite}
    >
      {props.text.version} {props.version}
    </Text>
  )
}

// Layout
const HomePage = (props) => {
  return (
    <View
      style={[
        styles.flex1,
        styles.bgColorBlack,
        {flexDirection: props.orientation === "portrait"? "column":"row"}
      ]}
      onClick={()=>{
        props.update({start: true}, console.log("Game Started"));
      }}
    >
      <View
        style={styles.flex2}
      >
        <Title {...props} />
      </View>
      <View
        style={[
          styles.flex1,
          styles.dim100,
          {alignItems: props.orientation === "portrait"? "center": 'flex-start'},
          {justifyContent: props.orientation === "portrait"? "flex-start": 'center'}
        ]}
      >
        <StartButton
          {...props}
        />
      </View>
      <View
        style={styles.copyright}
      >
        <Copyright
          copyright={props.text.copyright}
        />
      </View>
      <View
        style={styles.version}
      >
        <Version {...props} />
      </View>
    </View>
  )
}

export default HomePage;
