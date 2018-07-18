import React from 'react';

// Material-UI Components
import IconButton from '@material-ui/core/IconButton';

// Images
import logo from '../images/circle_logo_2.svg';

// Styles
import styles from '../styles/styles.js';

const LogoButton = (props) => {
  return (
    <IconButton
      onClick={()=>{
        props.updateDialog(true, "home")
      }}
    >
      <img src={logo} alt='logo' style={styles.responsiveImage} />
    </IconButton>
  )
}

export default LogoButton;