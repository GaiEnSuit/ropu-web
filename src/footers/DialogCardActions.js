import React from 'react';

import { View } from 'react-native';

// Icons
import CloseIcon from '@material-ui/icons/Close';

// styles
import styles from '../styles/styles';

const DialogCardActions = (props) => {
  return (
    <View
      style={[styles.bgColorTransparentMediumRed, styles.displayFlex, styles.justifyEnd, styles.margin0]}
    >
      <View
        onClick={()=>{
          props.updateDialog(false)
        }}
        style={styles.colorWhite}
      >
        <CloseIcon />
      </View>
    </View>
  )
}

export default DialogCardActions;
