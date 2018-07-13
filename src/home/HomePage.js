import React from 'react';

//Material-UI
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

// Custom Components
import Title from './Title';
import HomePageIcons from './homepageicons/HomePageIcons';
import NewsFeed from './newsfeed/NewsFeed';


// Style Overrides
import styles from '../styles';

const HomePage = (props) => {
  return (
    <Grid
      id="home"
      container
      className={props.classes.gridContainer}
      justify="center"
    >
      <Grid
        item
        xs={12}
        lg={8}
        className={props.classes.gridContainer}
      >
        <Title />
      </Grid>
      <Grid
        item
        xs={12}
        lg={8}
        className={props.classes.gridContainer}
      >
        <HomePageIcons paths={props.paths} homePageText={props.homePageText} />
      </Grid>
      <Grid
        item
        xs={12}
        lg={6}
        className={props.classes.gridContainer}
      >
        <NewsFeed homePageText={props.homePageText} />
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(HomePage);