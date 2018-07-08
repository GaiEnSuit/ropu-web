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
        style={styles.colorRed}
        className="text-center"
      >
        {props.footerText.credits}
      </Typography>
      <Typography variant="body1" style={styles.footerText}>
        <a href={props.footerText.licenseListData[0].sourceUrl} className="link" style={styles.colorRed}>
          {props.footerText.licenseListData[0].title}
        </a>
        {props.footerText.by}
        <a href={props.footerText.licenseListData[0].authorUrl} className="link" style={styles.colorRed}>
          {props.footerText.licenseListData[0].author}
        </a>
        {props.footerText.license}
        <a href={props.footerText.licenseListData[0].licenseUrl} className="link" style={styles.colorRed}>
          {props.footerText.licenseListData[0].license}
        </a>
      </Typography>
    </div>
  )
}

export default Credits;