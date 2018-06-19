import React, { Component } from 'react';

import CallToAction from './CallToAction';
import NewsFeed from './NewsFeed';
import Footer from './Footer';

class Home extends Component {
  render() {
    return (
      <div>
        <CallToAction callToAction={this.props.callToAction} />
        <NewsFeed newsFeed={this.props.newsFeed} />
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default Home;