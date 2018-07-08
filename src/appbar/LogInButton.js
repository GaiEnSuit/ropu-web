import React from 'react';

// Material-UI Components
import IconButton from '@material-ui/core/IconButton';

// Icons
import InputIcon from '@material-ui/icons/Input';

// Higher Order Components
import withDialogControl from '../hoc/withDialogControl';

const LogInButton = (props) => {
  return (
    <IconButton
      onClick={props.openLogInDialog}
      color="inherit"
    >
      <InputIcon />
    </IconButton>
  )
}

export default withDialogControl(LogInButton);