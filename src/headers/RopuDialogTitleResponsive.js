import React from 'react';

import { Text, View, Image } from 'react-native';

// Icons
import closeIcon from '../images/baseline-close-24px.svg';

// Style Classes
import styles from '../styles/styles';

const RopuDialogTitleResponsive = (props) => {
  return (
    <View
      style={[
        styles.directionRow,
        styles.justifyBetween,
        styles.alignCenter,
        styles.bgColorTransparentMediumRed,
      ]}
    >
      <Text
        style={[styles.colorWhite, styles.ropuDialogTitle]}
      >
        {props.title}
      </Text>
      <View
        onPress={()=>{
          props.updateDialog(false)
        }}
        style={[
          styles.icon48,
          styles.justifyCenter,
          styles.alignCenter
        ]}
      >
        <Image
          source={closeIcon}
          style={
            styles.icon24
          }
        />
      </View>
    </View>
  )
}

export default RopuDialogTitleResponsive;