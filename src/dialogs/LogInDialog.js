import React from 'react';

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

// Higher Order Components
import withDialogControl from '../hoc/withDialogControl';

const LogInDialog = (props) => {
  return (
    <Dialog
      open={props.logInDialog}
      onClose={props.closeLogInDialog}
      aria-labelledby="Log In Dialog"
      fullScreen
    >
      <DialogActions>
        <IconButton>
          <CloseIcon onClick={props.closeLogInDialog} />
        </IconButton>
      </DialogActions>
      {/* Log In Section */}
      <DialogTitle>
        <Icon>
          <InputIcon />
        </Icon>
        {props.logInDialogText.logInTitle}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
            Feature Currently Unavailable
        </DialogContentText>
        <DialogActions>
          <Button disabled>{props.logInDialogText.logInTitle}</Button>
        </DialogActions>
      </DialogContent>
      {/* Create Account Section */}
      <DialogTitle>
        <Icon>
          <AccountBoxIcon />
        </Icon>
        {props.logInDialogText.createAccountTitle}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
            Feature Currently Unavailable
        </DialogContentText>
        <DialogActions>
          <Button disabled>{props.logInDialogText.submitText}</Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  )
}

export default withDialogControl(LogInDialog);