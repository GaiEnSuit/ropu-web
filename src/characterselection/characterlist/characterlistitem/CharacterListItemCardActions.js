import React from 'react';

// Material-ui
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

// Higher Order Components
import withCharacterDataControl from '../../../hoc/withCharacterDataControl';
import withDialogControl from '../../../hoc/withDialogControl';

// Style Classes
import styles from '../../../styles';

const CharacterListItemCardActions = (props) => {
  return(
    <CardActions
      className="display-flex justify-flex-end"
    >
      {/* Delete Button */}
      <Button
        onClick={()=>{
          props.updateDialog(true, "deleteDialog");
          props.selectCharacter(props.character);
        }}
        className={props.classes.cardActions}
      >
        {props.characterSelectionPageText.delete}
      </Button>
    </CardActions>
  )
}

export default withStyles(styles)(withDialogControl(withCharacterDataControl(CharacterListItemCardActions)));