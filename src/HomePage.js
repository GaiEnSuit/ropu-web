import React from 'react';

import { View, Text } from 'react-native';

// Styles
import styles from './styles/styles';

// menus
import MainMenu from './menus/MainMenu';

// Modules
import NewsFeedHandler from './modules/NewsFeedHandler';

// Layout
const HomePage = (props) => {
  return (
    <View
      style={[
        styles.flex1,
        styles.bgColorBlack,
        {flexDirection: props.orientation === "portrait"? "column":"row"}
      ]}
    >
      <View
        style={[
          styles.flex1,
          styles.justifyCenter,
          styles.alignCenter
        ]}
      >
        <MainMenu {...props} />
      </View>
      <NewsFeedHandler {...props} />
    </View>
  )
}

export default HomePage;
