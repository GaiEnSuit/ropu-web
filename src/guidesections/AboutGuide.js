import React from 'react';

import { ScrollView, Text } from 'react-native';

import Modal from 'react-native-web-modal';

import { connect } from 'react-redux'

// Headers
import ModalBackBar from '../headers/ModalBackBar';

// styles
import styles from '../styles/styles';

const mapStateToProps = state => {
  return {
    aboutGuideTitle: state.aboutGuideTitle,
    aboutGuideText: state.aboutGuideText
  }
}

const ConnectedAboutGuide = (props) => {
  return(
    <Modal
      visible={props.open}
    >
      <ModalBackBar
        title={props.aboutGuideTitle}
        {...props}
      />
      <ScrollView>
        <Text
          style={styles.body1}
        >
          {props.aboutGuideText}
        </Text>
      </ScrollView>
    </Modal>
  )
}

const AboutGuide = connect(mapStateToProps)(ConnectedAboutGuide);

export default AboutGuide;
