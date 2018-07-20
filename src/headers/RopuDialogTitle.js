import React from 'react';

// Material-UI
import Typography from '@material-ui/core/Typography';
import DialogTitle from '@material-ui/core/DialogTitle';

// Style Classes
import styles from '../styles/styles';

const RopuDialogTitle = (props) => {
  return (
    <DialogTitle
      style={{...styles.displayFlex, ...styles.justifyCenter, ...styles.bgColorTransparentMediumRed}}
      disableTypography
    >
      <Typography
        style={styles.colorWhite}
        variant="title"
      >
        {props.title}
      </Typography>
    </DialogTitle>
  )
}

export default RopuDialogTitle;