import React, { Component } from 'react';

// Materil-Ui Components
import AppBar from '@material-ui/core/AppBar';

// Custom Components
import AppBarIcons from './AppBarIcons';

class RopuAppBar extends Component {
  render() {
    return (
      <AppBar position="static">
        <AppBarIcons 
          loggedIn={this.props.loggedIn} 
          update={this.props.update}
        />
      </AppBar>
    );
  }
}

export default RopuAppBar;