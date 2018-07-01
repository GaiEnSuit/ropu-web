import React, { Component } from 'react';

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

class CreateCharacterDialogActions extends Component {
  
  render() {
    return(
      <DialogActions>
        <IconButton 
          disabled={this.props.createCharacterDialogTab <= 0 && true}
          onClick={this.props.backCreateCharacterDialogTab}
        >
          <ArrowBackIcon />
        </IconButton>
        <IconButton 
          disabled={this.props.createCharacterDialogTab >= 4 && true}
          onClick={this.props.nextCreateCharacterDialogTab}
        >
          <ArrowForwardIcon />
        </IconButton>
        <IconButton onClick={this.props.openCancelCreateCharacterDialog}>
          <CloseIcon />
        </IconButton>
      </DialogActions>
    )
  }
}

export default withTabControl(withDialogControl(CreateCharacterDialogActions));