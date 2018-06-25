import React, { Component } from 'react';

// Material-UI Components
import IconButton from '@material-ui/core/IconButton';

// Icons
import ShopIcon from '@material-ui/icons/Shop';

class MarketButton extends Component {
  render() {
    return (
      <IconButton onClick={() => this.props.update({marketDialog: true})} >
        <ShopIcon />
      </IconButton>
    );
  }
}

export default MarketButton;