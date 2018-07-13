import React from 'react';

// Material UI
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

// Custom Components
import Credits from './Credits';
import Version from './Version';

// Style Overrides
import styles from '../styles';

const Footer = (props) => {
  return (
    <footer
      id="footer"
      className="bg-color-black max-width"
    >
      <Grid
        container
        justify="center"
        spacing={24}
        className={props.classes.gridContainer}
      >
        <Grid
          item
          xs={6}
          lg={2}
        >
          <Credits {...props}/>
        </Grid>
        <Grid
          item
          xs={6}
          lg={2}
        >
          <Version {...props}/>
        </Grid>
      </Grid>
    </footer>
  )
}

export default withStyles(styles)(Footer);