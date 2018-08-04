import { Component } from 'react';

// HOC
import withModal from '../hoc/withModal';

// Modals
import NewsFeedModal from '../modals/NewsFeedModal';

// News Feed That Opens On Mount
class NewsFeedHandler extends Component {

  componentDidMount ()
  {
    this.props.updateModal(true, 'News Feed Opened');
  }

  render()
  {
    return null
  }
}

export default withModal(NewsFeedHandler, NewsFeedModal);
