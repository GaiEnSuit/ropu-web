import React from 'react';

// Material UI
import Typography from '@material-ui/core/Typography';

// Style Classes
import styles from '../styles';

// Package.Json
import packageJSON from '../package.json';

const Version = (props) => {
  return (
    <div id="credits" className="text-center">
      <Typography
        variant="title"
        style={styles.title}
        className="text-center"
      >
        {props.homePageText.version}
      </Typography>
      <Typography variant="body1" style={styles.footerText}>
       {packageJSON.version}
      </Typography>
    </div>
  )
}

export default Version;