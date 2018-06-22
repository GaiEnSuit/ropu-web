import React, { Component } from 'react';

// Material-UI Components
import IconButton from '@material-ui/core/IconButton';

// Images
import logo from '../images/logo.svg';

class AppBarIcons extends Component {
  
  render() {
    return (
      <IconButton 
        disabled={window.location.href === 'http://ide-truongk77730732.codeanyapp.com:3000/'? true: false} 
        onClick={() => this.props.update({homeDialog: true})}
      >
        <img src={logo} style={{width: '100%'}}/>
      </IconButton>
    );
  }
}

export default AppBarIcons;