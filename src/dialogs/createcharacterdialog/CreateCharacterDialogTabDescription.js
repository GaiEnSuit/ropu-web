import React, { Component } from 'react';

// Material-ui
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

// Higher Order Components
import withCharacterDataControl from '../../hoc/withCharacterDataControl';

class CreateCharacterDialogTabDescription extends Component {
  
  render() {
    return(
      <div>
        Hi
      </div>
    )
  }
}

export default withCharacterDataControl(CreateCharacterDialogTabDescription);