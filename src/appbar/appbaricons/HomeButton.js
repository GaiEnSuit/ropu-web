import React from 'react';

// Material-UI Components
import IconButton from '@material-ui/core/IconButton';

// Icons
import HomeIcon from '@material-ui/icons/Home';

// Higher Order Components
import withDialogControl from '../../hoc/withDialogControl';

const HomeButton = (props) => {
  return (
    <IconButton
      color="inherit"
      onClick={()=>{
        props.updateDialog(true, "homeDialog")
      }}
    >
      <HomeIcon />
    </IconButton>
  )
}

export default withDialogControl(HomeButton);