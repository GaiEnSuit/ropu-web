import React from 'react';

import { View } from 'react-native';

import { connect } from 'react-redux';

import Modal from 'react-native-web-modal';

// styles
import styles from '../styles/styles';

// Headers
import ModalTitle from '../headers/ModalTitle';

// Footers
import ActionBarNavigate from '../footers/ActionBarNavigate';

const mapStateToProps = state => {
  return {
    titleNavigateText: state.titleNavigateText,
    titlePath: state.titlePath
  }
}

const ConnectedTitleDialog = (props) => {
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
            title={props.titleNavigateText}
          />
          <ActionBarNavigate
            {...props}
            path={props.titlePath}
          />
        </View>
      </View>
    </Modal>
  )
}

const TitleDialog = connect(mapStateToProps)(ConnectedTitleDialog);

export default TitleDialog;
