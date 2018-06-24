import React, { Component } from 'react';

//Material-UI
import HomePageIcons from './HomePageIcons';
import NewsFeed from './NewsFeed';
import Footer from './Footer';

// Custom Components
import Title from './Title';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Title />
        <HomePageIcons homePageIconsData={this.props.homePageIconsData} />
        <NewsFeed newsFeed={this.props.newsFeed} />
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default HomePage;