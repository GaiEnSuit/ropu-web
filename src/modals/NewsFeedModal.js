import React from 'react';

import { ScrollView, View } from 'react-native';

import Modal from 'react-native-web-modal';

// headers
import TitleBar from '../headers/TitleBar';

// footer
import ActionBarClose from '../footers/ActionBarClose';

// Sections
import TwitterWidget from '../sections/TwitterWidget';

// Styles
import styles from '../styles/styles';

// News Feed
const NewsFeedModal = (props) => {
  return (
    <Modal
      visible={props.open}
      onDismiss={()=>{
        props.updateDialog(false, 'News Feed Dialog Closed')
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
          <TitleBar
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
