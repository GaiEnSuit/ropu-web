import React from 'react';

// Material-ui
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

// Custom Components
import CreateCharacterDialogActions from './CreateCharacterDialogActions';
import CreateCharacterDialogContent from './CreateCharacterDialogContent';
import CreateCharacterDialogTabToolbar from './CreateCharacterDialogTabToolbar';

// Higher Order Components
import withTabControl from '../../hoc/withTabControl';
import withDialogControl from '../../hoc/withDialogControl';
import withCharacterDataControl from '../../hoc/withCharacterDataControl';
import withGameDataControl from '../../hoc/withGameDataControl';

const CreateCharacterDialog = (props) => {
  return(
    <Dialog
      open={props.createCharacterDialog}
      onClose={()=>{
        props.closeCreateCharacterDialog();
        props.resetCreateCharacter();
        props.resetCreateCharacterDialogTab();
        props.resetGameSelect();
        props.resetSelectedTemplate();
      }}
      fullScreen
    >
      {/* Title */}
      <DialogTitle>
        {props.createCharacterDialogText.title}
      </DialogTitle>
      {/* Tab Navigation */}
      <CreateCharacterDialogTabToolbar
        createCharacterDialogText={props.createCharacterDialogText}
        createCharacterDialogTab={props.createCharacterDialogTab}
        update={props.update}
      />
      {/* Tabbed Dialog Content */}
      <CreateCharacterDialogContent
        createCharacterData={props.createCharacterData}
        createCharacterDialogTab={props.createCharacterDialogTab}
        createCharacterDialogText={props.createCharacterDialogText}
        characterListData={props.characterListData}
        gameListData={props.gameListData}
        selectedGame={props.selectedGame}
        selectedTemplate={props.selectedTemplate}
        update={props.update}
      />
      {/* Dialog Actions and Navigation */}
      <CreateCharacterDialogActions
        createCharacterData={props.createCharacterData}
        createCharacterDialogTab={props.createCharacterDialogTab}
        update={props.update}
      />
    </Dialog>
  )
}

export default withGameDataControl(withCharacterDataControl(withDialogControl(withTabControl(CreateCharacterDialog))));