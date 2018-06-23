import React, { Component } from 'react';

//Material-Ui
import Paper from '@material-ui/core/Paper';

//Images
import Logo from '../images/logo.svg';

class Title extends Component {
  render() {
    return (
      <Paper>
        <img src={Logo} className='responsive-image' alt='Title Ropu' />
      </Paper>
    )
  }
}

export default Title;