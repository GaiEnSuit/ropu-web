import React from 'react';
import { Link } from 'react-router-dom';

// Material-ui
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';

// Icons
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';

const HomeDialog = (props) => {
  return (
    <div>
      <DialogTitle>
        {props.characterSelectionPageText.confirmHome}
      </DialogTitle>
      <DialogActions>
        {/* Confirm Button */}
        <Link 
          to='/'
          onClick={()=>{
            props.updateDialog(false)
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
            props.updateDialog(false)
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogActions>
    </div>
  )
}

export default HomeDialog;