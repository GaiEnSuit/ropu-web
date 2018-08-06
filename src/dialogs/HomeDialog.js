import React from 'react';

import { View } from 'react-native';

import Modal from 'react-native-web-modal';

import { connect } from 'react-redux';

// styles
import styles from '../styles/styles';

// Headers
import ModalTitle from '../headers/ModalTitle';

// Footers
import ActionBarNavigate from '../footers/ActionBarNavigate';

const mapStateToProps = state => {
  return {
    homePath: state.homePath,
    homeNavigateText: state.homeNavigateText
  }
}

const ConnectedHomeDialog = (props) => {
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
          <ModalTitle
            {...props}
            title={props.homeNavigateText}
          />
          <ActionBarNavigate
            {...props}
            path={props.homePath}
          />
        </View>
      </View>
    </Modal>
  )
}

const HomeDialog = connect(mapStateToProps)(ConnectedHomeDialog);

export default HomeDialog;
