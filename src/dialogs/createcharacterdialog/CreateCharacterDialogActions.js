import React from 'react';

//Material-ui
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

//Icons
import CloseIcon from '@material-ui/icons/Close';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

// Higher Order Components
import withTabControl from '../../hoc/withTabControl';
import withDialogControl from '../../hoc/withDialogControl';

const CreateCharacterDialogActions = (props) => {
  return(
    <DialogActions>
      <Button 
        disabled={props.createCharacterDialogTab <= 0 && true}
        onClick={props.backCreateCharacterDialogTab}
      >
        <ChevronLeftIcon />
        {props.createCharacterDialogText.back}
      </Button>
      <Button 
        disabled={props.createCharacterDialogTab >= 4 && true}
        onClick={props.nextCreateCharacterDialogTab}
      >
        {props.createCharacterDialogText.next}
        <ChevronRightIcon />
      </Button>
      <Button
        onClick={()=>{
          props.updateDialog(true, 'cancelCreateCharacterDialog')
        }}
      >
        <CloseIcon />
      </Button>
    </DialogActions>
  )
}

export default withTabControl(withDialogControl(CreateCharacterDialogActions));