import React from 'react';

import { View, Text } from 'react-native';

// Styles
import styles from '../styles/styles';

const TitleBar = (props) => {
  return (
    <View
      style={[
        styles.bgColorTransparentMediumRed,
        styles.justifyCenter,
        styles.width100,
        styles.alignCenter
      ]}
    >
      <Text
        style={styles.colorWhite}
      >
        {props.text.title}
      </Text>
    </View>
  )
}

export default TitleBar;