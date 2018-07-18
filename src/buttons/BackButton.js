import React from 'react';

// Material-UI Components
import Button from '@material-ui/core/Button';

// Dialog
import HomeDialog from '../dialogs/HomeDialog';

// Icons
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

// Higher Order Components
import withDialog from '../hoc/withDialog';

// styles
import styles from '../styles/styles'

const BackButton = (props) => {
  return (
    <Button
      variant="extendedFab"
      onClick={()=>{
        props.updateDialog(true, props.dialog, 'fullWidth')
      }}
      style={{...styles.colorWhite, ...styles.bgColorRed}}
    >
      <ArrowBackIcon />
      {props.text}
    </Button>
  )
}

export default withDialog(BackButton, HomeDialog);