import React from 'react';

// Material-UI Components
import IconButton from '@material-ui/core/IconButton';

// Icons
import ShopIcon from '@material-ui/icons/Shop';

// Higher Order Components
import withDialogControl from '../../hoc/withDialogControl';

const MarketButton = (props) => {
  return (
    <IconButton
      onClick={()=>{
        props.updateDialog(true, "marketDialog")
      }}
      color="inherit"
    >
      <ShopIcon />
    </IconButton>
  )
}

export default withDialogControl(MarketButton);