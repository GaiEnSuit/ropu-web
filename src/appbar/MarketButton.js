import React, { Component } from 'react';

//React Router
import { Link } from 'react-router-dom';

// Material-UI Components
import IconButton from '@material-ui/core/IconButton';

// Icons
import ShopIcon from '@material-ui/icons/Shop';

class MarketButton extends Component {
  render() {
    return (
      <Link to='/market' className="link">
        <IconButton>
          <ShopIcon />
        </IconButton>
      </Link>
    );
  }
}

export default MarketButton;