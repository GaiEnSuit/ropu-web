import React from 'react';

// Material-ui
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import IconButton from '@material-ui/core/IconButton';

// Icons
import CloseIcon from '@material-ui/icons/Close';

// Higher Order Components
import withDialogControl from '../hoc/withDialogControl';

const MarketDialog = (props) => {
  return (
    <Dialog
      open={props.marketDialog}
      onClose={props.closeMarketDialog}
      aria-labelledby="Market Dialog"
      fullScreen
    >
      <DialogActions>
        {/* Cancel Button */}
        <IconButton aria-label="Close" onClick={props.closeMarketDialog}>
          <CloseIcon />
        </IconButton>
      </DialogActions>
      <DialogTitle>
        {props.marketDialogText.title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
            Feature Currently Unavailable
        </DialogContentText>
      </DialogContent>
    </Dialog>
  )
}

export default withDialogControl(MarketDialog);