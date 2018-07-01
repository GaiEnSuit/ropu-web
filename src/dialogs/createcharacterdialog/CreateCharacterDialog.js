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

const CreateCharacterDialog = (props) => {
  return(
    <Dialog
      open={props.createCharacterDialog}
      onClose={()=>{
        props.resetCharacter();
        props.resetCreateCharacterDialogTab();
        props.closeCreateCharacterDialog();
      }}
      fullScreen
    >
      {/* Title */}
      <DialogTitle>
        {props.createCharacterDialogText.title}
      </DialogTitle>
      {/* Tab Navigation */}
      <CreateCharacterDialogTabToolbar
        {...props}
      />
      {/* Tabbed Dialog Content */}
      <CreateCharacterDialogContent
        createCharacterData={props.createCharacterData}
        createCharacterDialogTab={props.createCharacterDialogTab}
        createCharacterDialogText={props.createCharacterDialogText}
        gameListData={props.gameListData}
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

export default withCharacterDataControl(withDialogControl(withTabControl(CreateCharacterDialog)));