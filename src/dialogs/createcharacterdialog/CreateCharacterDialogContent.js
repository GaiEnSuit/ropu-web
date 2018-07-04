import React from 'react';

// Material-ui
import DialogContent from '@material-ui/core/DialogContent';

// Customer Components
import CreateCharacterDialogTabGame from './CreateCharacterDialogTabGame';
import CreateCharacterDialogTabDescription from './CreateCharacterDialogTabDescription';
import CreateCharacterDialogTabAbilities from './CreateCharacterDialogTabAbilities';
import CreateCharacterDialogTabInteractables from './CreateCharacterDialogTabInteractables';
import CreateCharacterDialogTabSummary from './CreateCharacterDialogTabSummary';

const CreateCharacterDialogContent = (props) => {
  return(
    <DialogContent>
      {props.createCharacterDialogTab === 0 && <CreateCharacterDialogTabGame {...props} />}
      {props.createCharacterDialogTab === 1 && <CreateCharacterDialogTabInteractables {...props}/>}
      {props.createCharacterDialogTab === 2 && <CreateCharacterDialogTabDescription {...props} />}
      {props.createCharacterDialogTab === 3 && <CreateCharacterDialogTabAbilities {...props} />}
      {props.createCharacterDialogTab === 4 && <CreateCharacterDialogTabSummary {...props} />}
    </DialogContent>
  )
}

export default CreateCharacterDialogContent;