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
        styles.width100,
        {paddingTop: '10px', paddingBottom: '10px'}
      ]}
    >
      <TouchableOpacity
        activeOpacity={.5}
        onClick={()=>{
          props.updateDialog(false)
        }}
        style={[
          styles.bgColorRed
        ]}
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
