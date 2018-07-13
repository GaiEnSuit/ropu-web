import React from 'react';

// Material-ui
import DialogContent from '@material-ui/core/DialogContent';
import { withStyles } from '@material-ui/core/styles'

// Customer Components
import CreateCharacterDialogTabGame from './createcharacterdialogtabgame/CreateCharacterDialogTabGame';
import CreateCharacterDialogTabDescription from './CreateCharacterDialogTabDescription';
import CreateCharacterDialogTabAbilities from './CreateCharacterDialogTabAbilities';
import CreateCharacterDialogTabInteractables from './CreateCharacterDialogTabInteractables';
import CreateCharacterDialogTabSummary from './CreateCharacterDialogTabSummary';

// Style OVerrides
import styles from '../../../styles';

const CreateCharacterDialogContent = (props) => {
  return(
    <DialogContent
      className={props.classes.createCharacterDialogContent}
    >
      {props.createCharacterDialogTab === 0 && <CreateCharacterDialogTabGame {...props} />}
      {props.createCharacterDialogTab === 1 && <CreateCharacterDialogTabInteractables {...props}/>}
      {props.createCharacterDialogTab === 2 && <CreateCharacterDialogTabDescription {...props} />}
      {props.createCharacterDialogTab === 3 && <CreateCharacterDialogTabAbilities {...props} />}
      {props.createCharacterDialogTab === 4 && <CreateCharacterDialogTabSummary {...props} />}
    </DialogContent>
  )
}

export default withStyles(styles)(CreateCharacterDialogContent);