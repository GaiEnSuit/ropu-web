import React from 'react';
import { Link } from 'react-router-dom';

// Material-ui
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

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
      style={{
        ...styles.bgColorTransparentMediumRed
      }}
    >
      <RopuDialogTitle
        {...props}
        title={props.text.homeDialogTitle}
      />
      <DialogActions
        style={{
          ...styles.displayFlex,
          ...styles.justifyCenter,
          ...styles.bgColorTransparentMediumRed,
          ...styles.margin0
        }}
      >
        {/* Confirm Button */}
        <Link 
          to='/'
          onClick={()=>{
            props.updateDialog(false)
          }}
        >
          <Button
            style={{...styles.colorWhite, ...styles.bgColorRed}}
            aria-label="Close"
          >
            <CheckIcon />
          </Button>
        </Link>
        {/* Cancel Button */}
        <Button
          aria-label="Close"
          onClick={()=>{
            props.updateDialog(false)
          }}
          style={{...styles.colorWhite, ...styles.bgColorTransparentRed}}
        >
          <CloseIcon />
        </Button>
      </DialogActions>
    </div>
  )
}

export default HomeDialog;