import React from 'react';

import { View, Text, Image } from 'react-native';

import { withRouter } from './routing/Routing';

// Styles
import styles from './styles/styles';

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
    <Text
      style={[
        styles.colorWhite,
        styles.h6
      ]}
    >
      {props.text.start}
    </Text>
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
const TitlePage = (props) => {
  return (
    <View
      style={[
        styles.flex1,
        styles.bgColorBlack
      ]}
      onClick={()=>{
        props.history.push(props.paths.home)
      }}
    >
      <View
        style={styles.flex3}
      >
        <Title {...props} />
      </View>
      <View
        style={[
          styles.flex1,
          styles.dim100,
          styles.alignCenter,
          styles.justifyStart
        ]}
      >
        <StartButton
          {...props}
        />
      </View>
      <View
        style={[
          styles.positionAbsolute,
          styles.justifyCenter,
          styles.alignCenter,
          styles.width100,
          {bottom: '10px'}
        ]}
      >
        <Copyright
          copyright={props.text.copyright}
        />
      </View>
      <View
        style={[
          styles.positionAbsolute,
          {left: '10px', top: '10px'}
        ]}
      >
        <Version {...props} />
      </View>
    </View>
  )
}

export default withRouter(TitlePage);
