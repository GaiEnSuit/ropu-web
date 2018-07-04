import React from 'react';

//Material-ui
import DialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';

//Icons
import CloseIcon from '@material-ui/icons/Close';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

// Higher Order Components
import withTabControl from '../../hoc/withTabControl';
import withDialogControl from '../../hoc/withDialogControl';

const CreateCharacterDialogActions = (props) => {
  return(
    <DialogActions>
      <IconButton 
        disabled={props.createCharacterDialogTab <= 0 && true}
        onClick={props.backCreateCharacterDialogTab}
      >
        <ArrowBackIcon />
      </IconButton>
      <IconButton 
        disabled={props.createCharacterDialogTab >= 4 && true}
        onClick={props.nextCreateCharacterDialogTab}
      >
        <ArrowForwardIcon />
      </IconButton>
      <IconButton onClick={props.openCancelCreateCharacterDialog}>
        <CloseIcon />
      </IconButton>
    </DialogActions>
  )
}

export default withTabControl(withDialogControl(CreateCharacterDialogActions));