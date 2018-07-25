import React from 'react';

// styles
import styles from '../styles/styles';
import Typography from '@material-ui/core/Typography';

const StartButton = (props) => {
  return (
    <Typography
      style={{...styles.colorRed}}
      variant="title"
    >
      START
    </Typography>
  )
}

export default StartButton;