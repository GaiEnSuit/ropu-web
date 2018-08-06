import React from 'react';

import { View } from 'react-native';

// Material-ui
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';

// Icons
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';


// Higher Order Components
import withCharacterDataControl from '../hoc/withCharacterDataControl';

// styles
import styles from '../styles/styles';

const DeleteCharacterDialog = (props) => {
  return (
    <Dialog
      open={props.open}
      onClose={()=>{
        props.updateDialog(false, "Delete Character Dialog Closed");
      }}
    >
      <View
        style={[
          styles.bgColorTransparentMediumRed
        ]}
      >
        <View {...props} title={props.text.confirmDelete} />
        <CardActions
          style={[
            styles.displayFlex,
            styles.justifyAround,
            styles.bgColorTransparentMediumRed
          ]}
        >
          {/* Confirm Button */}
          <IconButton
            style={{...styles.colorWhite}}
            aria-label="Delete"
            onClick={() => {
              props.updateDialog(false);
              props.deleteCharacter(props.selectedCharacter);
            }}
          >
            <CheckIcon />
          </IconButton>
          {/* Cancel Button */}
          <IconButton
            aria-label="Close"
            onClick={()=>{
              props.updateDialog(false);
              props.selectCharacter(null);
            }}
            style={[styles.colorWhite]}
          >
            <CloseIcon />
          </IconButton>
        </CardActions>
      </View>
    </Dialog>
  )
}

export default withCharacterDataControl(DeleteCharacterDialog);
