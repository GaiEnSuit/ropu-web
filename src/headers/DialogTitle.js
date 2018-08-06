import React from 'react';

import { View, Text } from 'react-native';

// Styles
import styles from '../styles/styles';

const DialogTitle = (props) => {
  return (
    <View
      style={[
        styles.bgColorMediumRed,
        styles.justifyCenter,
        styles.width100,
        styles.alignCenter,
        styles.padding12
      ]}
    >
      <Text
        style={[
          styles.colorWhite,
          styles.subtitle1
        ]}
      >
        {props.title}
      </Text>
    </View>
  )
}

export default DialogTitle;
