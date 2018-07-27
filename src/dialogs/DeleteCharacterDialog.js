import React from 'react';

// Material-ui
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';

// Icons
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';

// Headers
import RopuDialogTitle from '../headers/RopuDialogTitle';

// Higher Order Components
import withCharacterDataControl from '../hoc/withCharacterDataControl';

// styles
import styles from '../styles/styles';

const DeleteCharacterDialog = (props) => {
  return (
    <div
      style={[
        styles.bgColorTransparentMediumRed
      ]}
    >
      <RopuDialogTitle {...props} title={props.text.confirmDelete} />
      <CardActions
        style={[
          styles.displayFlex,
          styles.justifyAround,
          styles.bgColorTransparentMediumRed
        ]}
      >
        {/* Confirm Button */}
        <IconButton
          style={{...styles.colorWhite}}
          aria-label="Delete"
          onClick={() => {
            props.updateDialog(false);
            props.deleteCharacter(props.selectedCharacter);
          }}
        >
          <CheckIcon />
        </IconButton>
        {/* Cancel Button */}
        <IconButton
          aria-label="Close"
          onClick={()=>{
            props.updateDialog(false);
            props.selectCharacter(null);
          }}
          style={[styles.colorWhite]}
        >
          <CloseIcon />
        </IconButton>
      </CardActions>
    </div>
  )
}

export default withCharacterDataControl(DeleteCharacterDialog);