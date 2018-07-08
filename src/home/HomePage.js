import React from 'react';

//Material-UI
import Toolbar from '@material-ui/core/Toolbar';

// Custom Components
import Title from './Title';
import Footer from '../footer/Footer';
import HomePageIcons from './HomePageIcons';
import NewsFeed from './NewsFeed';

// Style Classes
import styles from '../styles';

const HomePage = (props) => {
  return (
    <main className="d-flex flex-d-column min-height">
      <section style={styles.content}>
        <Toolbar />
        <Title />
        <HomePageIcons homePageText={props.homePageText} paths={props.paths} />
        <NewsFeed newsFeedText={props.newsFeedText} />
      </section>
      <Footer footerText={props.footerText} />
    </main>
  )
}

export default HomePage;