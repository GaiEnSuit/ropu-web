import React from 'react';

// React Router DOm
import { Link } from 'react-router-dom';

// Material-ui
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';

// Buttons
import IconButton from '@material-ui/core/IconButton';

// Icons
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';

// Headers
import RopuDialogTitle from '../headers/RopuDialogTitle';

// Styles
import styles from '../styles/styles';

// Layout
const CancelCreateCharacterDialog = (props) => {
  return (
        <Dialog
      open={props.open}
      onClose={()=>{
        this.props.updateDialog({open: false})
      }}
    >
    <div
      style={[
        styles.bgColorTransparentMediumRed
      ]}
    >
      <RopuDialogTitle
        {...props}
        title={props.text.characterSelectionPageDialogTitle}
      />
      <DialogActions
        style={[
          styles.displayFlex,
          styles.justifyAround,
          styles.bgColorTransparentMediumRed,
          styles.margin0
        ]}
      >
        {/* Confirm Button */}
        <Link 
          to='/characterselection'
          onClick={()=>{
            props.updateDialog(false);
          }}
        >
          <IconButton
            style={[styles.colorWhite]}
            aria-label="Close"
          >
            <CheckIcon />
          </IconButton>
        </Link>
        {/* Cancel Button */}
        <IconButton
          aria-label="Close"
          onClick={()=>{
            props.updateDialog(false);
          }}
          style={[styles.colorWhite]}
        >
          <CloseIcon />
        </IconButton>
      </DialogActions>
    </div>
  </Dialog>
  )
}

export default CancelCreateCharacterDialog;