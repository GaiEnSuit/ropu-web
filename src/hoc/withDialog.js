import React, { Component } from 'react';

// Material-Ui Components
import Dialog from '@material-ui/core/Dialog';

// Dialogs
import DeleteCharacterDialog from '../dialogs/DeleteCharacterDialog';
import HomeDialog from '../dialogs/HomeDialog';
import GuideDialog from '../dialogs/GuideDialog';
import NewsFeedDialog from '../dialogs/NewsFeedDialog';
import CharacterSelectionDialog from '../dialogs/CharacterSelectionDialog';

// Styles
import styles from '../styles/styles';

const withDialog = (WrappedComponent, selectedDialog) => class extends Component {
  
  state = {
    open: false,
    dialog: selectedDialog
  }
  
  // DialogControl
  updateDialog = (value) => {
    this.setState({open: value})
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
                this.updateDialog(false)
              }}
              style={styles.overflowHidden}
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
                this.updateDialog(false)
              }}
              style={styles.overflowHidden}
            >
              <HomeDialog updateDialog={this.updateDialog} {...this.props} />
            </Dialog>
          </div>
        )
        break;
      case 'guideDialog':
        return (
          <div>
            <WrappedComponent
              updateDialog={this.updateDialog}
              {...this.props}
            />
            <Dialog
              open={this.state.open}
              onClose={()=>{
                this.updateDialog(false)
              }}
              fullScreen
            >
              <GuideDialog updateDialog={this.updateDialog} {...this.props} />
            </Dialog>
          </div>
        )
        break;
     case 'newsFeedDialog':
        return (
          <div>
            <WrappedComponent
              updateDialog={this.updateDialog}
              {...this.props}
            />
            <Dialog
              open={this.state.open}
              onClose={()=>{
                this.updateDialog(false)
              }}
            >
              <NewsFeedDialog
                updateDialog={this.updateDialog}
                {...this.props}
              />
            </Dialog>
          </div>
        )
        break;
      case 'characterSelectionDialog':
        return (
          <div>
            <WrappedComponent
              updateDialog={this.updateDialog}
              {...this.props}
            />
            <Dialog
              open={this.state.open}
              onClose={()=>{
                this.updateDialog(false)
              }}
              style={styles.overflowHidden}
            >
              <CharacterSelectionDialog updateDialog={this.updateDialog} {...this.props} />
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