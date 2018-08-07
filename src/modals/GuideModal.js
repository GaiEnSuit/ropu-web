import React from 'react';

import { View, ScrollView, TouchableHighlight, Text, Image } from 'react-native';

import { connect } from 'react-redux';

import Modal from 'react-native-web-modal';

// Headers
import ModalTitle from '../headers/ModalTitle';

// Modals
import withModal from '../hoc/withModal';

// styles
import styles from '../styles/styles';

// sections
import AboutGuide from '../guidesections/AboutGuide';

// images
import chevronRight from '../images/chevronRight.png';

const mapStateToProps = state => {
  return{
    guideModalText: state.guideModalText,
    aboutGuideTitle: state.aboutGuideTitle
  }
}

const ConnectedAboutButton = (props) => {
  return(
    <TouchableHighlight
      onPress={()=>{
        props.updateModal(true, 'About Dialog Opened');
      }}
    >
      <View
        style={[
          styles.justifyBetween,
          styles.directionRow
        ]}
      >
        <Text>
          {props.aboutGuideTitle}
        </Text>
        <Image
          style={[
            styles.icon24
          ]}
          source={chevronRight}
        />
      </View>
    </TouchableHighlight>
  )
}

const AboutButton = withModal(connect(mapStateToProps)(ConnectedAboutButton), AboutGuide)


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
          <AboutButton />
        </ScrollView>
      </View>
    </Modal>
  )
}

const GuideModal = connect(mapStateToProps)(ConnectedGuideModal)

export default GuideModal;
