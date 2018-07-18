import React from 'react';

// Styles
import styles from '../styles/styles';
import Typography from '@material-ui/core/Typography';

const Copyright = (props) => {
  return(
    <div
      id="copyright"
      style={styles.copyRight}
    >
      <Typography
        variant="body1"
        style={styles.colorRed}
      >
        {props.copyright}
      </Typography>
    </div>
  )
}

export default Copyright;