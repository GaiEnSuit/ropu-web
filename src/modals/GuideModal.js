import React from 'react';

import { View, ScrollView } from 'react-native';

import { connect } from 'react-redux';

import Modal from 'react-native-web-modal';

// Headers
import ModalTitle from '../headers/ModalTitle';

// styles
import styles from '../styles/styles';

const mapStateToProps = state => {
  return{
    guideModalText: state.guideModalText
  }
}

// Layout
const ConnectedGuideModal = (props) => {
  return (
    <Modal
      visible={props.open}
      onRequestClose={()=>{
        props.updateModal(false, 'Guide Modal Closed')
      }}
    >
      <View
        style={styles.flex1}
      >
        <ModalTitle
          {...props}
          title={props.guideModalText}
        />
        <ScrollView
          style={[
            styles.flex1
          ]}
        >
        </ScrollView>
      </View>
    </Modal>
  )
}

const GuideModal = connect(mapStateToProps)(ConnectedGuideModal)

export default GuideModal;
