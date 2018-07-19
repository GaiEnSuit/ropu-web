import React from 'react';

// Material-UI Components
import IconButton from '@material-ui/core/IconButton';

// Icons
import HomeIcon from '@material-ui/icons/Home';

// Higher Order Components
import withDialog from '../hoc/withDialog';

const HomeButton = (props) => {
  return (
    <IconButton
      color="inherit"
      onClick={()=>{
        props.updateDialog(true)
      }}
    >
      <HomeIcon />
    </IconButton>
  )
}

export default HomeButton;