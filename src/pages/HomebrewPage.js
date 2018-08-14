import React from 'react';

import { View, Text } from 'react-native';

// Header
import TitleBar from '../headers/TitleBar';

// Styles
import styles from '../styles/styles';

// Buttons
import BackButton from '../touchables/BackButton';

// HOC
import withNavigation from '../hoc/withNavigation';

const EnhancedBackButton = withNavigation(BackButton, '/');

// Footer
const HomebrewPageActionBar = (props) => {
  return(
    <View
      style={[
        styles.bgColorTransparant,
        styles.actionBar,
        styles.directionRow,
        styles.justifyBetween,
        styles.positionFixed,
        styles.width100,
        styles.positionBottom
      ]}
    >
      <EnhancedBackButton
        {...props}
      />
    </View>
  )
}

// Layout
const HomebrewPage = (props) => {
  return (
    <View
      id="homebrew"
      style={[styles.minHeight]}
    >
      <TitleBar {...props} />
      <View>
        <View />
        <Text variant="display1">This Feature is Currently Unavailable</Text>
        <View />
      </View>
      <HomebrewPageActionBar {...props} />
    </View>
  )
}

export default HomebrewPage;
