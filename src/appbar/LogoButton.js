import React from 'react';

// Material-UI Components
import IconButton from '@material-ui/core/IconButton';

// Images
import logo from '../images/logo.svg';

// Higher Order Component
import withDialogControl from '../hoc/withDialogControl';

const AppBarIcons = (props) => {
  return (
    <IconButton 
      style={window.location.href === props.domain? {display: 'none'} : {display: 'block'}}
      onClick={props.openHomeDialog}
    >
      <img  className="responsive-image" src={logo} alt="logo" />
    </IconButton>
  )
}

export default withDialogControl(AppBarIcons);