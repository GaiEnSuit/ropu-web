import React from 'react';

// Styles
import styles from '../styles/styles';
import Typography from '@material-ui/core/Typography';

// Footer
const Version = (props) => {
  return(
    <div
      id="version"
      style={styles.version}
    >
      <Typography
        variant="body1"
        style={styles.colorWhite}
      >
        {props.text.version}
      </Typography>
    </div>
  )
}

export default Version;