import React from 'react';

// Material UI
import Typography from '@material-ui/core/Typography';

// Style Classes
import styles from '../styles';

const Credits = (props) => {
  return (
    <div id="credits" className="text-center">
      <Typography
        variant="title"
        style={styles.title}
        className="text-center"
      >
        {props.homePageText.credits}
      </Typography>
      <Typography variant="body1" style={styles.footerText}>
        <a href={props.licenseData[0].sourceUrl} className="link" style={styles.footerLink}>
          {props.licenseData[0].title}
        </a>
        {props.homePageText.by}
        <a href={props.licenseData[0].authorUrl} className="link" style={styles.footerLink}>
          {props.licenseData[0].author}
        </a>
        {props.homePageText.license}
        <a href={props.licenseData[0].licenseUrl} className="link" style={styles.footerLink}>
          {props.licenseData[0].license}
        </a>
      </Typography>
    </div>
  )
}

export default Credits;