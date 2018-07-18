import React, { Component } from 'react';

// Material-Ui Components
import Dialog from '@material-ui/core/Dialog';

const withDialog = (WrappedComponent, SelectedDialog) => class extends Component {
  
  state = {
    open: false,
    dialog: null,
    fullScreen: false,
    fullWidth: false
  }
  
  // DialogControl
  updateDialog = (value, dialog, size) => {
    this.setState({open: value, dialog: dialog, [size]: true})
  }
  
  render () {
    return (
      <div>
        <WrappedComponent
          updateDialog={this.updateDialog}
          {...this.props}
        />
        <Dialog
          open={this.state.open}
          onClose={()=>{
            this.updateDialog(false, null)
          }}
          disableBackdropClick={this.state.fullScreen}
          fullWidth={this.state.fullWidth}
          fullScreen={this.state.fullScreen}
        >
          <SelectedDialog updateDialog={this.updateDialog} {...this.props} />
        </Dialog>
      </div>
    )
  }
}

export default withDialog;