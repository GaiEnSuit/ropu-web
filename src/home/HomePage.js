import React from 'react';

//Material-UI
import HomePageIcons from './HomePageIcons';
import NewsFeed from './NewsFeed';
import Footer from './Footer';

// Custom Components
import Title from './Title';

const HomePage = (props) => {
  return (
    <div>
      <Title />
      <HomePageIcons homePageIconsData={props.homePageIconsData} />
      <NewsFeed newsFeedText={props.newsFeedText} />
      <footer>
        <Footer version={props.version} footer={props.footer} />
      </footer>
    </div>
  )
}

export default HomePage;