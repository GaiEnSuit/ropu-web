import React from 'react';

// Material-UI Components
import IconButton from '@material-ui/core/IconButton';

// Icons
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import InputIcon from '@material-ui/icons/Input';

// Higher Order Components
import withDialogControl from '../hoc/withDialogControl';
import withMenuControl from '../hoc/withMenuControl';

const AccountButton = (props) => {
  return (
    <div>
    {
      props.loggedIn? (
        <IconButton onClick={props.setAnchor}>
          <AccountBoxIcon />
        </IconButton>
      ) :
      (
        <IconButton onClick={props.openLogInDialog}>
          <InputIcon />
        </IconButton>
      )
    }
    </div>
  )
}

export default withMenuControl(withDialogControl(AccountButton));