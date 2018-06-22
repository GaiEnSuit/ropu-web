import React, { Component } from 'react';

// Material-UI Components
import IconButton from '@material-ui/core/IconButton';

// Images
import logo from '../images/logo.svg';

class AppBarIcons extends Component {
  
  render() {
    return (
      <IconButton 
        disabled={window.location.href === this.props.domain? true : false} 
        onClick={() => this.props.update({homeDialog: true})}
      >
        <img src={logo} style={{width: '100%'}} alt="logo" />
      </IconButton>
    );
  }
}

export default AppBarIcons;