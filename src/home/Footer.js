import React from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const Footer = (props) => {
  return(
    <Paper>
      <Typography variant="body1">{props.version}</Typography>
      <Typography variant="title">{props.footer.credits.text}</Typography>
      <a className="link" href={props.footer.credits.data[0].profile}><Typography variant="body2">{props.footer.credits.data[0].name}</Typography></a>
      <a className="link" href={props.footer.credits.data[0].licenseUrl}><Typography variant="body2">{props.footer.credits.data[0].license}</Typography></a>
    </Paper>
  )
}

export default Footer;