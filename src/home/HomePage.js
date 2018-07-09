import React from 'react';

//Material-UI
import Toolbar from '@material-ui/core/Toolbar';

// Custom Components
import Title from './Title';
import Footer from '../footer/Footer';
import HomePageIcons from './homepageicons/HomePageIcons';
import NewsFeed from './NewsFeed';

// Style Classes
import styles from '../styles';

const HomePage = (props) => {
  return (
    <main className="d-flex flex-d-column min-height">
      <section style={styles.content}>
        <Toolbar />
        <Title />
        <HomePageIcons paths={props.paths} homePageText={props.homePageText} />
        <NewsFeed homePageText={props.homePageText} />
      </section>
      <Footer homePageText={props.homePageText} licenseData={props.licenseData} />
    </main>
  )
}

export default HomePage;