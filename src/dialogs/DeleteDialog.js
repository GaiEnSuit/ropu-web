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
import withCharacterDataControl from '../hoc/withCharacterDataControl';

const DeleteDialog = (props) => {
  return (
    <Dialog
      open={props.deleteDialog}
      onClose={() => {
        props.updateDialog(false, 'deleteDialog')
      }}
      aria-labelledby="dynamic dialog"
    >
      <DialogTitle>
        {props.deleteDialogText.delete}
      </DialogTitle>
      <DialogActions>
        {/* Confirm Button */}
        <IconButton
          aria-label="Close"
          onClick={() => {
            props.updateDialog(false, 'deleteDialog');
            props.deleteCharacter(props.selectedCharacter);
          }}
        >
          <CheckIcon />
        </IconButton>
        {/* Cancel Button */}
        <IconButton
          aria-label="Close"
          onClick={()=>{
            props.updateDialog(false, 'deleteDialog');
            props.selectCharacter(null);
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogActions>
    </Dialog>
  )
}

export default withCharacterDataControl(withDialogControl(DeleteDialog));