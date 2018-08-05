import React from 'react';

import { connect } from "react-redux";

import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';

import { withRouter } from '../routing/Routing';

// Styles
import styles from '../styles/styles';

const mapStateToProps = state => {
  return {
    copyrightText: state.copyrightText,
    startText: state.startText,
    versionText: state.versionText,
    version: state.version,
    homePath: state.homePath
  };
};

const Title = () => {
  return(
    <Image
      source={require("../images/brand_white_4x3.png")}
      resizeMode="contain"
      style={styles.responsiveImage}
    />
  )
}

const ConnectedCopyright = ({copyrightText}) => {
  return(
    <Text
      style={[
        styles.colorWhite
      ]}
    >
      {copyrightText}
    </Text>
  )
}

const Copyright = connect(mapStateToProps)(ConnectedCopyright);

const ConnectedStartButton = ({startText}) => {
  return (
    <Text
      style={[
        styles.colorWhite,
        styles.h6
      ]}
    >
      {startText}
    </Text>
  )
}

const StartButton = connect(mapStateToProps)(ConnectedStartButton);

const ConnectedVersion = ({version, versionText}) => {
  return (
    <Text
      style={styles.colorWhite}
    >
      {versionText} {version}
    </Text>
  )
}

const Version = connect(mapStateToProps)(ConnectedVersion);

// Layout
const ConnectedTitlePage = (props) => {
  return (
    <TouchableWithoutFeedback
      onPress={()=>{
        props.history.push(props.homePath)
      }}
    >
      <View
        style={[
          styles.flex1,
          styles.bgColorBlack
        ]}
      >
        <View
          style={
            {flex: props.orientation === 'portrait'? 1: 2}
          }
        >
          <Title />
        </View>
        <View
          style={[
            styles.flex1,
            styles.dim100,
            styles.alignCenter,
            styles.justifyStart
          ]}
        >
          <StartButton />
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
          <Copyright />
        </View>
        <View
          style={[
            styles.positionAbsolute,
            {left: '10px', top: '10px'}
          ]}
        >
          <Version />
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const TitlePage = withRouter(connect(mapStateToProps)(ConnectedTitlePage));

export default TitlePage;
