import React from 'react';

import { View, TouchableOpacity, Text, Image, FlatList } from 'react-native';

import { connect } from 'react-redux';

import Modal from 'react-native-web-modal';

// Headers
import ModalTitle from '../headers/ModalTitle';

// Modals
import withModal from '../hoc/withModal';

// styles
import styles from '../styles/styles';

// sections
import GuideSectionModal from './GuideSectionModal';

// images
import chevronRight from '../images/chevronRight.png';

const mapStateToProps = state => {
  return{
    guideModalText: state.guideModalText,
    guideTextData: state.guideTextData,
    aboutGuideTitle: state.aboutGuideTitle
  }
}

const EnhancedModalListItem = (props) => {
  return(
    <TouchableOpacity
      onPress={()=>{
        props.updateModal(true, 'About Dialog Opened');
      }}
    >
      <View
        style={[
          styles.justifyBetween,
          styles.alignCenter,
          styles.directionRow,
          styles.padding12,
          styles.borderBottom,
          styles.borderTop
        ]}
      >
        <Text
          style={[
            styles.button
          ]}
        >
          {props.title}
        </Text>
        <Image
          style={[
            styles.icon24
          ]}
          source={chevronRight}
        />
      </View>
    </TouchableOpacity>
  )
}

const ModalListItem = withModal(connect(mapStateToProps)(EnhancedModalListItem), GuideSectionModal)

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
        style={[
          styles.flex1
        ]}
      >
        <ModalTitle
          {...props}
          title={props.guideModalText}
        />
        <FlatList
          data={props.guideTextData}
          renderItem={({item}) => {
            return <ModalListItem title={item.key} text={item.text} />
          }}
        />
      </View>
    </Modal>
  )
}

const GuideModal = connect(mapStateToProps)(ConnectedGuideModal)

export default GuideModal;
