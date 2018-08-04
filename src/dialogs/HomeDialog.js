import React from 'react';

import { View } from 'react-native';

import Modal from 'react-native-web-modal';

// styles
import styles from '../styles/styles';

// Headers
import DialogTitle from '../headers/DialogTitle';

// Footers
import ActionBarNavigate from '../footers/ActionBarNavigate';

const HomeDialog = (props) => {
  return (
    <Modal
      visible={props.open}
      onRequestClose={()=>{
        props.updateModal(false, 'Title Dialog Closed')
      }}
      transparent={true}
    >
      <View
        style={[
          styles.justifyCenter,
          styles.alignCenter,
          styles.flex1,
          styles.bgColorTransparentBlack
        ]}
      >
        <View
          style={[
            styles.bgColorMediumRed,
            styles.justifyCenter,
            styles.alignCenter
          ]}
        >
          <DialogTitle
            {...props}
            title={props.text.homeDialog}
          />
          <ActionBarNavigate
            {...props}
            path={props.paths.home}
          />
        </View>
      </View>
    </Modal>
  )
}

export default HomeDialog;