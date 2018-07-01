import React, { Component } from 'react';

// Material-ui
import DialogContent from '@material-ui/core/DialogContent';

// Customer Components
import CreateCharacterDialogTabGame from './CreateCharacterDialogTabGame';
import CreateCharacterDialogTabDescription from './CreateCharacterDialogTabDescription';

class CreateCharacterDialogContent extends Component {
  
  render() {
    return(
      <DialogContent>
        {this.props.createCharacterDialogTab === 0 && <CreateCharacterDialogTabGame
                                                        createCharacterData={this.props.createCharacterData}
                                                        createCharacterDialogTab={this.props.createCharacterDialogTab}
                                                        createCharacterDialogText={this.props.createCharacterDialogText}
                                                        gameListData={this.props.gameListData}
                                                        update={this.props.update}
                                                      />}
        {this.props.createCharacterDialogTab === 1 && <CreateCharacterDialogTabDescription
                                                        update={this.props.update}
                                                      />}
        {this.props.createCharacterDialogTab === 2 && <div>Currently Unavailable</div>}
        {this.props.createCharacterDialogTab === 3 && <div>Currently Unavailable</div>}
        {this.props.createCharacterDialogTab === 4 && <div>Currently Unavailable</div>}
      </DialogContent>
    )
  }
}

export default CreateCharacterDialogContent;