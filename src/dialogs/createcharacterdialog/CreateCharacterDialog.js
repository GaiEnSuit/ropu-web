import React, { Component } from 'react';

// Material-ui
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

// Custom Components
import CreateCharacterDialogActions from './CreateCharacterDialogActions';
import CreateCharacterDialogContent from './CreateCharacterDialogContent';
import CreateCharacterDialogTabToolbar from './CreateCharacterDialogTabToolbar';

class CreateCharacterDialog extends Component {
  
  // Empty Character Template
  characterTemplate = {
    id: null,
    img: null,
    name: null,
    description: null,
    game: null,
    campaign: null,
    abilities: {
      str: 0,
      end: 0,
      int: 0,
      wil: 0,
      dex: 0,
      agi: 0
    },
    stats: {
      hp: 0,
      mp: 0,
      sp: 0,
      maxhp: 0,
      maxmp: 0,
      maxsp: 0
    },
    interactables: [
    ]
  }
  
  render() {
    return(
      <Dialog
        open={this.props.createCharacterDialog}
        onClose={()=>{
          this.props.update({createCharacterDialog: false})
        }}
        fullScreen
      >
        {/* Title */}
        <DialogTitle>
          {this.props.createCharacterDialogText.title}
        </DialogTitle>
        {/* Tab Navigation */}
        <CreateCharacterDialogTabToolbar
          createCharacterDialogTab={this.props.createCharacterDialogTab}
          createCharacterDialogText={this.props.createCharacterDialogText}
          update={this.props.update}
        />
        {/* Tabbed Dialog Content */}
        <CreateCharacterDialogContent
          createCharacterDialogTab={this.props.createCharacterDialogTab}
          gameListData={this.props.gameListData}
          update={this.props.update}
        />
        {/* Dialog Actions and Navigation */}
        <CreateCharacterDialogActions
          createCharacterDialogTab={this.props.createCharacterDialogTab}
          update={this.props.update}
        />
      </Dialog>
    )
  }
}

export default CreateCharacterDialog;