import React from 'react';

// Material Ui Components
import AppBar from '@material-ui/core/AppBar';

// Styles
import styles from '../styles/styles';
import Typography from '@material-ui/core/Typography';

const TitleBar = (props) => {
  return (
    <AppBar
      position="fixed"
      style={[styles.bgColorTransparentMediumRed, styles.colorWhite, styles.textCenter]}
    >
      <Typography
        variant="display1"
        color="inherit"
      >
        {props.text.title}
      </Typography>
    </AppBar>
  )
}

export default TitleBar;