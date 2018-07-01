import React from 'react';

// Material-UI Components
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

// Higher Order Components
import withMenuControl from '../hoc/withMenuControl';

const AccountButton = (props) => {
  return (
    <Menu
      anchorEl={props.anchor}
      open={Boolean(props.anchor)}
      onClose={props.closeMenu}
    >
      <MenuItem onClick={props.closeMenu}>{props.accountMenuText.account}</MenuItem>
      <MenuItem onClick={props.closeMenu}>{props.accountMenuText.logout}</MenuItem>
    </Menu>
  )
}

export default withMenuControl(AccountButton);