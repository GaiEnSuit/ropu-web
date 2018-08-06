import React from 'react';

import { View, Text, TouchableOpacity, Image } from 'react-native';

// images
import closeIcon from '../images/closeIcon.png';

// Styles
import styles from '../styles/styles';

const ModalTitle = (props) => {
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
      <Text
        style={[
          styles.colorWhite,
          styles.h6
        ]}
      >
        {props.title}
      </Text>
      <TouchableOpacity
        style={[
          styles.positionAbsolute,
          styles.positionRight,
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
          source={closeIcon}
        />
      </TouchableOpacity>
    </View>
  )
}

export default ModalTitle;
