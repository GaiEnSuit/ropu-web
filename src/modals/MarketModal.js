import React from 'react';

import { View, Text, Image, TouchableOpacity } from 'react-native';

import Modal from 'react-native-web-modal';

import { connect } from 'react-redux';

// headers
import ModalTitle from '../headers/ModalTitle';

// Icons
import closeIcon from '../images/closeIcon.png';

// Styles
import styles from '../styles/styles';

const mapStateToProps = state => {
  return {
    marketModalTitle: state.marketModalTitle
  }
}

const ConnectedMarketModal = (props) => {
  return (
    <Modal
      visible={props.open}
      onRequestClose={()=>{
        props.updateModal(false, "Market Modal Closed")
      }}
    >
      <View
        style={styles.flex1}
      >
        <ModalTitle title={props.marketModalTitle} {...props} />
        <TouchableOpacity
          onPress={()=>{
            props.updateModal(false, "Market Modal Closed")
          }}
        >
          <Image
            styles={[
              styles.icon36
            ]}
            source={closeIcon}
          />
        </TouchableOpacity>

        <View>
          <Text>
              Feature Currently Unavailable
          </Text>
        </View>
      </View>
    </Modal>
  )
}

const MarketModal = connect(mapStateToProps)(ConnectedMarketModal)

export default MarketModal;
