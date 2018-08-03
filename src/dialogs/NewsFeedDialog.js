import React from 'react';

import { ScrollView } from 'react-native';

import Modal from 'react-native-web-modal';

// Material ui
import Dialog from '@material-ui/core/Dialog';

// headers
import RopuDialogTitle from '../headers/RopuDialogTitle';

// Sections
import TwitterWidget from '../sections/TwitterWidget';

// News Feed
const NewsFeedDialog = (props) => {
  return (
    <Modal
      visible={props.open}
      onDismiss={()=>{
        props.updateDialog(false, 'News Feed Dialog Closed')
      }}
    >
      <RopuDialogTitle
        {...props}
        title={props.text.newsFeedDialogTitle}
      />
      <ScrollView>
        <TwitterWidget
          offline={props.offline}
          {...props}
        />
      </ScrollView>
    </Modal>
  )
}

export default NewsFeedDialog;
