import React from 'react';

import { withRouter } from '../routing/Routing';

import { View, Image, TouchableOpacity } from 'react-native';

// Icons
import closeIcon from '../images/closeIcon.png';
import checkIcon from '../images/check.png';

// STyles
import styles from '../styles/styles';

const ActionBarNavigate = (props) => {
  return(
    <View
      style={[
        styles.directionRow,
        styles.justifyAround
      ]}
    >
      {/* Confirm Button */}
      <TouchableOpacity
        activeOpacity={.5}
        onPress={()=>{
          props.updateModal(false)
          props.history.push(props.path)
        }}
        style={styles.padding12}
      >
        <Image
          source={checkIcon}
          style={[
            styles.icon24
          ]}
        />
      </TouchableOpacity>
      {/* Cancel Button */}
      <TouchableOpacity
        activeOpacity={.5}
        onPress={()=>{
          props.updateModal(false, 'Close Dialog')
        }}
        style={styles.padding12}
      >
        <Image
          source={closeIcon}
          style={[
            styles.icon24
          ]}
        />
      </TouchableOpacity>
    </View>
  )
}

export default withRouter(ActionBarNavigate);
