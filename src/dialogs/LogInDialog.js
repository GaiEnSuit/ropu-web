import React, { Component } from 'react';

// Material-UI
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

//Icons
import CloseIcon from '@material-ui/icons/Close';
import InputIcon from '@material-ui/icons/Input';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

class LogInDialog extends Component {
  render() {
    return (
      <Dialog
        open={this.props.logInDialog}
        onClose={() => this.props.update({logInDialog: false})}
        aria-labelledby="Log In Dialog"
        fullScreen
      >
        <DialogActions>
          <IconButton>
            <CloseIcon onClick={() => this.props.update({logInDialog: false})} />
          </IconButton>
        </DialogActions>
        {/* Log In Section */}
        <DialogTitle>
          <Icon>
            <InputIcon />
          </Icon>
          {this.props.logInDialogData.logInTitle}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
              Feature Currently Unavailable
          </DialogContentText>
          <DialogActions>
            <Button disabled>{this.props.logInDialogData.logInTitle}</Button>
          </DialogActions>
        </DialogContent>
        {/* Create Account Section */}
        <DialogTitle>
          <Icon>
            <AccountBoxIcon />
          </Icon>
          {this.props.logInDialogData.createAccountTitle}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
              Feature Currently Unavailable
          </DialogContentText>
          <DialogActions>
            <Button disabled>{this.props.logInDialogData.submitText}</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    )
  }
}

export default LogInDialog;