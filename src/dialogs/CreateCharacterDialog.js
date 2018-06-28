import React, { Component } from 'react';

//Material-ui
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';

//Icons
import CloseIcon from '@material-ui/icons/Close';

class CreateCharacterDialog extends Component {
  render() {
    return(
      <Dialog
        open={this.props.createCharacterDialog}
        onClose={()=>{this.props.update({createCharacterDialog: false})}}
        fullScreen
      >
        <IconButton onClick={()=>{this.props.update({createCharacterDialog: false})}}>
          <CloseIcon />
        </IconButton>
        <DialogTitle>
          Create Character
        </DialogTitle>
        
      </Dialog>
    )
  }
}

export default CreateCharacterDialog;