import React from 'react';

import { View, Image, TouchableOpacity } from 'react-native';

// Icons
import closeIcon from '../images/closeIcon.png';

// styles
import styles from '../styles/styles';

const ActionBarClose = (props) => {
  return (
    <View
      style={[
        styles.bgColorMediumRed,
        styles.directionRow,
        styles.justifyCenter,
        styles.width100
      ]}
    >
      <TouchableOpacity
        onPress={()=>{
          props.updateModal(false, 'Modal Closed')
        }}
      >
        <Image
          source={closeIcon}
          style={[
            styles.icon36
          ]}
        />
      </TouchableOpacity>
    </View>
  )
}

export default ActionBarClose;
