import React from 'react';

// Material-UI
import Typography from '@material-ui/core/Typography';
import DialogActions from '@material-ui/core/DialogActions';

// Buttons
import IconButton from '@material-ui/core/IconButton';

// Icons
import CloseIcon from '@material-ui/icons/Close';

// Style Classes
import styles from '../styles/styles';

const RopuDialogTitleResponsive = (props) => {
  return (
    <DialogActions
      style={{
        ...styles.displayFlex,
        ...styles.justifyBetween,
        ...styles.bgColorTransparentMediumRed,
        ...styles.margin0
      }}
    >
      <Typography
        style={{...styles.colorWhite, ...styles.ropuDialogTitle}}
        variant="title"
      >
        {props.title}
      </Typography>
      <IconButton
        onClick={()=>{
          props.updateDialog(false)
        }}
        style={styles.colorWhite}
      >
        <CloseIcon />
      </IconButton>
    </DialogActions>
  )
}

export default RopuDialogTitleResponsive;