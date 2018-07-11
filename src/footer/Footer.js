import React from 'react';

// Material UI
import Grid from '@material-ui/core/Grid';

// Custom Components
import Credits from './Credits';
import Version from './Version';

const Footer = (props) => {
  return (
    <footer>
      <Grid
        container
        justify="center"
      >
        <Grid
          item
          xs={6}
          lg={4}
        >
          <Credits {...props}/>
        </Grid>
        <Grid
          item
          xs={6}
          lg={4}
        >
          <Version {...props}/>
        </Grid>
      </Grid>
    </footer>
  )
}

export default Footer;