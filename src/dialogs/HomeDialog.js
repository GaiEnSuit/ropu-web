import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Material-ui
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';

//Icons
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';

class HomeDialog extends Component {
  render() {
    return (
      <Dialog
        open={this.props.homeDialog}
        onClose={() => this.props.update({homeDialog: false})}
        aria-labelledby="dynamic dialog"
      >
        <DialogTitle>
          {this.props.homeDialogData.text}
        </DialogTitle>
        <DialogActions>
          {/* Confirm Button */}
          <Link to='/' className="link" onClick={() => this.props.update({homeDialog: false})}>
            <IconButton aria-label="Close">
              <CheckIcon />
            </IconButton>
          </Link>
          {/* Cancel Button */}
          <IconButton aria-label="Close" onClick={() => this.props.update({homeDialog: false})}>
            <CloseIcon />
          </IconButton>
        </DialogActions>
      </Dialog>
    )
  }
}

export default HomeDialog;