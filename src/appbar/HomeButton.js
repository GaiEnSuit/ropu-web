import React, { Component } from 'react';

// Material-UI Components
import IconButton from '@material-ui/core/IconButton';

// Icons
import HomeIcon from '@material-ui/icons/Home';

class HomeButton extends Component {
  
  render() {
    return (
      <IconButton 
        disabled={window.location.href === this.props.domain? true : false} 
        onClick={() => this.props.update({homeDialog: true})}
      >
        <HomeIcon />
      </IconButton>
    );
  }
}

export default HomeButton;