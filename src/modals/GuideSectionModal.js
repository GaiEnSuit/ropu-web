import React from 'react';

import { ScrollView, Text } from 'react-native';

import Modal from 'react-native-web-modal';

// Headers
import ModalBackBar from '../headers/ModalBackBar';

// styles
import styles from '../styles/styles';

const GuideSectionModal = (props) => {
  return(
    <Modal
      visible={props.open}
    >
      <ModalBackBar
        title={props.title}
        {...props}
      />
      <ScrollView
        style={styles.padding12}
      >
        <Text
          style={[
            styles.body1
          ]}
        >
          {props.text}
        </Text>
      </ScrollView>
    </Modal>
  )
}

export default GuideSectionModal;
