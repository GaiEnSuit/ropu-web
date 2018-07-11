import React from 'react';

// Material-UI Components
import IconButton from '@material-ui/core/IconButton';

// Images
import logo from '../../images/logo.svg';

// Higher Order Component
import withDialogControl from '../../hoc/withDialogControl';

// Style Overrides
import styles from '../../styles';

const LogoButton = (props) => {
  return (
    <IconButton
      style={
        styles.logoButton
      }
      onClick={()=>{
        props.updateDialog(true, "homeDialog")
      }}
    >
      <img  className="responsive-image" src={logo} alt="logo" />
    </IconButton>
  )
}

export default withDialogControl(LogoButton);