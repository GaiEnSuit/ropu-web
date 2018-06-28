import React, { Component } from 'react';

// Material-ui
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import IconButton from '@material-ui/core/IconButton';

//Icons
import CloseIcon from '@material-ui/icons/Close';

class MarketDialog extends Component {
  render() {
    return (
      <Dialog
        open={this.props.marketDialog}
        onClose={() => this.props.update({marketDialog: false})}
        aria-labelledby="Market Dialog"
        fullScreen
      >
        <DialogActions>
          {/* Cancel Button */}
          <IconButton aria-label="Close" onClick={() => this.props.update({marketDialog: false})}>
            <CloseIcon />
          </IconButton>
        </DialogActions>
        <DialogTitle>
          {this.props.marketDialogTitle}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
              Feature Currently Unavailable
          </DialogContentText>
        </DialogContent>
      </Dialog>
    )
  }
}

export default MarketDialog;