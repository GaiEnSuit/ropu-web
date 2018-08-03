import { Component } from 'react';

// HOC
import withDialog from '../hoc/withDialog';

// Modals
import NewsFeedModal from '../modals/NewsFeedModal';

// News Feed That Opens On Mount
class NewsFeedHandler extends Component {

  componentDidMount ()
  {
    this.props.updateDialog(true, 'News Feed Dialog Opened');
  }

  render()
  {
    return null
  }
}

export default withDialog(NewsFeedHandler, NewsFeedModal);
