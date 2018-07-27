import React from 'react';
import { Link } from 'react-router-dom';

// Material-ui
import DialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';

// Icons
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';

// styles
import styles from '../styles/styles';

// Headers
import RopuDialogTitle from '../headers/RopuDialogTitle';

const HomeDialog = (props) => {
  return (
    <div
      style={[
        styles.bgColorTransparentMediumRed
      ]}
    >
      <RopuDialogTitle
        {...props}
        title={props.text.homeDialogTitle}
      />
      <DialogActions
        style={[
          styles.displayFlex,
          styles.justifyAround,
          styles.bgColorTransparentMediumRed,
          styles.margin0
        ]}
      >
        {/* Confirm Button */}
        <Link 
          to='/'
          onClick={()=>{
            props.updateDialog(false)
          }}
        >
          <IconButton
            style={[styles.colorWhite]}
            aria-label="Close"
          >
            <CheckIcon />
          </IconButton>
        </Link>
        {/* Cancel Button */}
        <IconButton
          aria-label="Close"
          onClick={()=>{
            props.updateDialog(false)
          }}
          style={[styles.colorWhite]}
        >
          <CloseIcon />
        </IconButton>
      </DialogActions>
    </div>
  )
}

export default HomeDialog;