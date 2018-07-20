import React from 'react';

// Material-ui
import DialogTitle from '@material-ui/core/DialogTitle';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

// Icons
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';

// Higher Order Components
import withCharacterDataControl from '../hoc/withCharacterDataControl';

// styles
import styles from '../styles/styles';
import Typography from '@material-ui/core/Typography';

const DeleteCharacterDialog = (props) => {
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
          {props.text.confirmDelete}
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
        <Button
          style={{...styles.colorWhite, ...styles.bgColorRed}}
          aria-label="Delete"
          onClick={() => {
            props.updateDialog(false);
            props.deleteCharacter(props.selectedCharacter);
          }}
        >
          <CheckIcon />
        </Button>
        {/* Cancel Button */}
        <Button
          aria-label="Close"
          onClick={()=>{
            props.updateDialog(false);
            props.selectCharacter(null);
          }}
          style={{...styles.colorWhite, ...styles.bgColorTransparentRed}}
        >
          <CloseIcon />
        </Button>
      </CardActions>
    </div>
  )
}

export default withCharacterDataControl(DeleteCharacterDialog);