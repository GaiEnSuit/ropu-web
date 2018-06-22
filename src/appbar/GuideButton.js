import React, { Component } from 'react';

// Material-UI Components
import IconButton from '@material-ui/core/IconButton';

//Icons
import HelpIcon from '@material-ui/icons/Help';

class GuideButton extends Component {
  render() {
    return (
      <IconButton onClick={() => this.props.update({guideDialog: true})}>
        <HelpIcon />
      </IconButton>
    );
  }
}

export default GuideButton;