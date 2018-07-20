import React from 'react';

// Material-UI
import DialogActions from '@material-ui/core/DialogActions';

// Buttons
import IconButton from '@material-ui/core/IconButton';

// Icons
import CloseIcon from '@material-ui/icons/Close';

// styles
import styles from '../styles/styles';

const DialogCardActions = (props) => {
  return (
    <DialogActions
      style={{...styles.bgColorTransparentMediumRed, ...styles.displayFlex, ...styles.justifyEnd, ...styles.margin0}}
    >
      <IconButton
        onClick={()=>{
          props.updateDialog(false)
        }}
        style={styles.colorWhite}
      >
        <CloseIcon />
      </IconButton>
    </DialogActions>
  )
}

export default DialogCardActions;