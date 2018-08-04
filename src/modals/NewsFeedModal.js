import React from 'react';

import { ScrollView, View, Image } from 'react-native';

import Modal from 'react-native-web-modal';

// footer
import ActionBarClose from '../footers/ActionBarClose';

// Sections
import TwitterWidget from '../sections/TwitterWidget';

// Images
import announcement from '../images/announcement.png';

// Styles
import styles from '../styles/styles';

const NewsFeedTitleBar = (props) => {
  return(
    <View
      style={[
        styles.bgColorTransparentMediumRed,
        styles.justifyCenter,
        styles.width100,
        styles.alignCenter
      ]}
    >
      <Image
        style={[
          styles.icon36
        ]}
        source={announcement}
      />
    </View>
  )
}

// News Feed
const NewsFeedModal = (props) => {
  return (
    <Modal
      visible={props.open}
      onRequestClose={()=>{
        props.updateModal(false, 'News Feed Modal Closed')
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
            styles.bgColorTransparentMediumRed,
            styles.justifyCenter,
            styles.alignCenter
          ]}
        >
          <NewsFeedTitleBar
            title={props.text.newsFeedDialogTitle}
          />
          <ScrollView>
            <TwitterWidget
              offline={props.offline}
              {...props}
            />
          </ScrollView>
          <ActionBarClose {...props} />
        </View>
      </View>
    </Modal>
  )
}

export default NewsFeedModal;
