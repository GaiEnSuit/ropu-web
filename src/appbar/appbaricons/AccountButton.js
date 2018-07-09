import React from 'react';

// Material-UI Components
import IconButton from '@material-ui/core/IconButton';

// Icons
import AccountBoxIcon from '@material-ui/icons/AccountBox';

// Higher Order Components
import withMenuControl from '../../hoc/withMenuControl';

const AccountButton = (props) => {
  return (
    <IconButton
      onClick={props.setAnchor}
      color="inherit"
    >
      <AccountBoxIcon />
    </IconButton>
  )
}

export default withMenuControl(AccountButton);