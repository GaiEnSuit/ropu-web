import { React } from 'react';

// Material-Ui Components
import Button from '@material-ui/core/Button';

// Higher Order Components
import withDialogControl from './hoc/withDialogControl';

// Icons
import ShopIcon from '@material-ui/icons/Shop';

const LargeMarketButton = (props) => {
  return(
    <Button
      size="large"
      onClick={()=>{
        {props.updateDialog(true, 'marketDialog')}
      }}
    >
      <ShopIcon />
    </Button>
  )
}


export default withDialogControl(LargeMarketButton);