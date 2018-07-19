import React from 'react';
import { Link } from 'react-router-dom';

// Material-ui
import DialogTitle from '@material-ui/core/DialogTitle';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

// Icons
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';

// styles
import styles from '../styles/styles';
import Typography from '@material-ui/core/Typography';

const HomeDialog = (props) => {
  return (
    <div
      style={{
        ...styles.bgColorTransparentMediumRed
      }}
    >
      <DialogTitle
        disableTypography
        style={{
          ...styles.displayFlex,
          ...styles.justifyCenter,
          ...styles.bgColorTransparentMediumRed,
          ...styles.colorWhite
        }}
      >
        <Typography
          variant="headline"
          style={{
            ...styles.colorWhite
          }}
        >
          {props.text.confirmHome}
        </Typography>
      </DialogTitle>
      <CardActions
        style={{
          ...styles.displayFlex,
          ...styles.justifyCenter,
          ...styles.bgColorTransparentMediumRed
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
      </CardActions>
    </div>
  )
}

export default HomeDialog;