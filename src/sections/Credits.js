import React from 'react';

// Material UI
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

// Style Classes
import styles from '../styles/styles';

const Credits = (props) => {
  return (
    <div id="credits" className="display-flex justify-center direction-column">
      <Typography
        variant="title"
        className={props.classes.title}
      >
        {props.footerText.credits}
      </Typography>
      <Typography variant="body1" className={props.classes.footerText}>
        <a href={props.licenseData[0].sourceUrl} className={props.classes.footerLink}>
          {props.licenseData[0].title}
        </a>
        {props.footerText.by}
        <a href={props.licenseData[0].authorUrl} className={props.classes.footerLink}>
          {props.licenseData[0].author}
        </a>
        {props.footerText.license}
        <a href={props.licenseData[0].licenseUrl} className={props.classes.footerLink}>
          {props.licenseData[0].license}
        </a>
      </Typography>
    </div>
  )
}

export default withStyles(styles)(Credits);