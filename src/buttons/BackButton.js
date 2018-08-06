import React from 'react';

import { Image, TouchableOpacity } from 'react-native';

// Routing

import { withRouter } from '../routing/Routing';

// Icons
import arrowBackIcon from '../images/arrowBackIcon.png';

// styles
import styles from '../styles/styles'

const BackButtonWithRouter = (props) => {
  return (
    <TouchableOpacity
      onPress={()=>{
        props.history.goBack()
      }}
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
    </TouchableOpacity>
  )
}

const BackButton = withRouter(BackButtonWithRouter);

export default BackButton;
