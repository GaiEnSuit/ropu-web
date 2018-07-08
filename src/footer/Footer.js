import React from 'react';

// Material UI
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

// Style Classes
import styles from '../styles';

// Custom Components
import Credits from './Credits';
import Version from './Version';

const Footer = (props) => {
  return (
    <footer>
      <Toolbar
        style={styles.footer}
      >
        <Grid container >
          <Grid
            item
            xs={6}
            lg={6}
          >
            <Credits {...props}/>
          </Grid>
          <Grid
            item
            xs={6}
            lg={6}
          >
            <Version {...props}/>
          </Grid>
        </Grid>
      </Toolbar>
    </footer>
  )
}

export default Footer;