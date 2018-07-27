import React from 'react';

import { View, Image } from 'react-native';

// Icons
import arrowBackIcon from '../images/arrowBackIcon.png';

// styles
import styles from '../styles/styles'

const BackButton = (props) => {
  return (
    <View
      style={[
        styles.icon48,
        styles.alignCenter,
        styles.justifyCenter,
        styles.bgColorRed,
        styles.shapeCircle,
      ]}
    >
      <Image
        style={styles.icon24}
        source={arrowBackIcon}
      />
    </View>
  )
}

export default BackButton;