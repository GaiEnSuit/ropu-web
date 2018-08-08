import React from 'react';

import { View, Text, TouchableOpacity, Image } from 'react-native';

// images
import arrowBackIcon from '../images/arrowBackIcon.png';

// Styles
import styles from '../styles/styles';

const ModalBackBar = (props) => {
  return (
    <View
      style={[
        styles.bgColorMediumRed,
        styles.justifyCenter,
        styles.width100,
        styles.alignCenter,
        styles.directionRow,
        {paddingTop: 12, paddingBottom: 12}
      ]}
    >
      <TouchableOpacity
        style={[
          styles.positionAbsolute,
          styles.positionLeft,
          styles.padding12
        ]}
        onPress={()=>{
          props.updateModal(false, 'Modal Closed')
        }}
      >
        <Image
          style={[
            styles.icon24
          ]}
          source={arrowBackIcon}
        />
      </TouchableOpacity>
      <Text
        style={[
          styles.colorWhite,
          styles.h5
        ]}
      >
        {props.title}
      </Text>
    </View>
  )
}

export default ModalBackBar;
