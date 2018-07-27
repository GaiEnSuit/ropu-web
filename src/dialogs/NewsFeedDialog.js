import React from 'react';

import { Platform } from 'react-native';

// Material ui
import Dialog from '@material-ui/core/Dialog';

// headers
import RopuDialogTitleResponsive from '../headers/RopuDialogTitleResponsive';

// Style Classes
import styles from '../styles/styles';

// Sections
import TwitterWidget from '../sections/TwitterWidget';

// News Feed
const NewsFeedDialog = (props) => {
  return (
    <Dialog
      open={props.open? props.open : null}
      onClose={()=>{
        props.updateDialog(false, 'News Feed Dialog Closed')
      }}
    >
      <RopuDialogTitleResponsive
        {...props}
        title={props.text.newsFeedDialogTitle}
      />
      <TwitterWidget
        offline={props.offline}
        {...props}
      />
    </Dialog>
  )
}

export default NewsFeedDialog;