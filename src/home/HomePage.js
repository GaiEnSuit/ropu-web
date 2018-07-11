import React from 'react';

//Material-UI
import Grid from '@material-ui/core/Grid';

// Custom Components
import Title from './Title';
import HomePageIcons from './homepageicons/HomePageIcons';
import NewsFeed from './NewsFeed';

// Style Classes
import styles from '../styles';

const HomePage = (props) => {
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      direction="column"
      style={styles.gridContainer}
    >
      <Grid
        container
        item
        style={styles.gridContainer}
        xs={12}
        sm={8}
      >
        <Grid
          item
          xs={12}
        >
          <Title />
        </Grid>
        <Grid
          item
          xs={12}
        >
          <HomePageIcons paths={props.paths} homePageText={props.homePageText} />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={24}
        item
        xs={12}
        sm={8}
        lg={4}
      >
        <Grid
          item
          xs={12}
        >
          <NewsFeed homePageText={props.homePageText} />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default HomePage;