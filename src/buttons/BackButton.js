import React from 'react';

// Material-UI Components
import IconButton from '@material-ui/core/IconButton';

// Icons
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

// styles
import styles from '../styles/styles'

const BackButton = (props) => {
  return (
    <IconButton
      style={{...styles.colorWhite, ...styles.bgColorRed}}
    >
      <ArrowBackIcon />
    </IconButton>
  )
}

export default BackButton;