import React from 'react';

// Material Ui Components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

// Styles
import styles from '../styles/styles';
import Typography from '@material-ui/core/Typography';


const TitleBar = (props) => {
  return (
    <AppBar
      position="fixed"
      style={{...styles.bgColorTransparentMediumRed, ...styles.colorWhite}}
    >
      <Toolbar
        style={{...styles.justifyCenter, ...styles.flex}}
      >
        <Typography
          variant="display1"
          color="inherit"
        >
          {props.title}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default TitleBar;