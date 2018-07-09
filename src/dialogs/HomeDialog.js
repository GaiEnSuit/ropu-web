import React from 'react';
import { Link } from 'react-router-dom';

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

const HomeDialog = (props) => {
  return (
    <Dialog
      open={props.homeDialog}
      onClose={()=>{
        props.updateDialog(false, "homeDialog")
      }}
      aria-labelledby="dynamic dialog"
    >
      <DialogTitle>
        {props.homeDialogText.text}
      </DialogTitle>
      <DialogActions>
        {/* Confirm Button */}
        <Link 
          to='/'
          className="link"
          onClick={()=>{
            props.updateDialog(false, "menuDialog")
            props.updateDialog(false, "homeDialog")
          }}
          >
          <IconButton aria-label="Close">
            <CheckIcon />
          </IconButton>
        </Link>
        {/* Cancel Button */}
        <IconButton
          aria-label="Close"
          onClick={()=>{
            props.updateDialog(false, "homeDialog")
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogActions>
    </Dialog>
  )
}

export default withDialogControl(HomeDialog);