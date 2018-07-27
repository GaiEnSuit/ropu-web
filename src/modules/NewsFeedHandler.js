import { Component } from 'react';

// HOC
import withDialog from '../hoc/withDialog';

// Dialogs
import NewsFeedDialog from '../dialogs/NewsFeedDialog';

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

export default withDialog(NewsFeedHandler, NewsFeedDialog);