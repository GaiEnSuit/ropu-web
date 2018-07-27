import React from 'react';

import { ScrollView } from 'react-native';

// Material ui
import Dialog from '@material-ui/core/Dialog';

// headers
import RopuDialogTitle from '../headers/RopuDialogTitle';

// Sections
import TwitterWidget from '../sections/TwitterWidget';

// News Feed
const NewsFeedDialog = (props) => {
  return (
    <Dialog
      open={props.open}
      onClose={()=>{
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
    </Dialog>
  )
}

export default NewsFeedDialog;