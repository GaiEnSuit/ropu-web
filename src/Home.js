import React, { Component } from 'react';

import CallToAction from './CallToAction';
import NewsFeed from './NewsFeed';

class Home extends Component {
  render() {
    return (
      <div>
        <CallToAction callToAction={this.props.callToAction} />
        <NewsFeed newsFeed={this.props.newsFeed} />
      </div>
    );
  }
}

export default Home;