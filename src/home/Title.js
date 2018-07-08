import React from 'react';

//Material-Ui
import Paper from '@material-ui/core/Paper';

//Images
import Banner from '../images/banner.png';

const Title = (props) => {
  return (
    <Paper>
      <img src={Banner} className='responsive-image' alt='Title Banner' />
    </Paper>
  )
}

export default Title;