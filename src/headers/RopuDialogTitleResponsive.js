import React from 'react';

import { Text, View, Image } from 'react-native';

// Icons
import closeIcon from '../images/closeIcon.png';

// Style Classes
import styles from '../styles/styles';

const RopuDialogTitleResponsive = (props) => {
  return (
    <View
      style={[
        styles.directionRow,
        styles.justifyBetween,
        styles.alignCenter,
        styles.bgColorTransparentMediumRed
      ]}
    >
      <Text
        style={[styles.colorWhite, styles.ropuDialogTitle]}
      >
        {props.title}
      </Text>
      <View
        onClick={()=>{
          props.updateDialog(false, 'Dialog Closed')
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