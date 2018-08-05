import React from 'react';

import { View } from 'react-native';

// Styles
import styles from './styles/styles';

// menus
import MainMenu from './menus/MainMenu';

// Headers
import AppBar from './headers/AppBar';

// Modules
import NewsFeedHandler from './modules/NewsFeedHandler';

// Layout
const HomePage = () => {
  return (
    <View
      style={[
        styles.flex1,
        styles.bgColorDarkRed
      ]}
    >
      <View
        style={[
          styles.width100
        ]}
      >
        <AppBar />
      </View>
      <View
        style={[
          styles.flex1,
          styles.justifyCenter,
          styles.alignCenter
        ]}
      >
        <MainMenu />
      </View>
      <NewsFeedHandler />
    </View>
  )
}

export default HomePage;
