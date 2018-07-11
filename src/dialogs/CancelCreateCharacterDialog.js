import React from 'react';

// Material-ui
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';

// Icons
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';

// Higher Order Components
import withDialogControl from '../hoc/withDialogControl';
import withTabControl  from '../hoc/withTabControl';
import withCreateCharacterDataControl  from '../hoc/withCharacterDataControl';
import withGameDataControl  from '../hoc/withGameDataControl';

const CancelCreateCharacterDialog = (props) => {
  return (
    <Dialog
      open={props.cancelCreateCharacterDialog}
      onClose={()=>{props.updateDialog(false, "cancelCreateCharacterDialog")}}
      aria-labelledby="Cancel Create Character Dialog"
    >
      <DialogTitle>
        {props.cancelCreateCharacterDialogText}
      </DialogTitle>
      <DialogActions>
        {/* Confirm Button */}
          <IconButton 
            aria-label="Confirm"
            onClick={() => {
              props.updateDialog(false, "createCharacterDialog")
              props.updateDialog(false, "cancelCreateCharacterDialog")
              props.resetCreateCharacter();
              props.resetCreateCharacterDialogTab();
              props.resetGameSelect();
              props.resetSelectedTemplate();
            }}
          >
            <CheckIcon />
          </IconButton>
        {/* Cancel Button */}
        <IconButton
          aria-label="Cancel"
          onClick={()=>{
            props.updateDialog(false, "cancelCreateCharacterDialog")
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogActions>
    </Dialog>
  )
}

export default withGameDataControl(withCreateCharacterDataControl(withTabControl(withDialogControl(CancelCreateCharacterDialog))));