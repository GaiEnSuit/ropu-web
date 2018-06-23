import React, { Component } from 'react';

// Material-UI Components
import IconButton from '@material-ui/core/IconButton';

//Icons
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import InputIcon from '@material-ui/icons/Input';

class AccountButton extends Component {
  render() {
    return (
      <div>
      {
        this.props.loggedIn? (
          <IconButton onClick={(e) => this.props.update({anchorEl: e.currentTarget})}>
            <AccountBoxIcon />
          </IconButton>
        ) :
        (
          <IconButton onClick={() => this.props.update({logInDialog: true})}>
            <InputIcon />
          </IconButton>
        )
      }
      </div>
    );
  }
}

export default AccountButton;