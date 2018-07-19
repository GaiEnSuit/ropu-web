import React, { Component } from 'react';

// Material-Ui Components
import Dialog from '@material-ui/core/Dialog';

// Dialogs
import DeleteCharacterDialog from '../dialogs/DeleteCharacterDialog';
import HomeDialog from '../dialogs/HomeDialog';

const withDialog = (WrappedComponent, selectedDialog) => class extends Component {
  
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
    switch (selectedDialog) {
      case 'deleteCharacterDialog':
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
              <DeleteCharacterDialog updateDialog={this.updateDialog} {...this.props} />
            </Dialog>
          </div>
        )
        break;
      case 'homeDialog':
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
              <HomeDialog updateDialog={this.updateDialog} {...this.props} />
            </Dialog>
          </div>
        )
        break;
      default:
        return (
          <WrappedComponent
            updateDialog={this.updateDialog}
            {...this.props}
          />
        );
        break;
    }
    
    
  }
}

export default withDialog;