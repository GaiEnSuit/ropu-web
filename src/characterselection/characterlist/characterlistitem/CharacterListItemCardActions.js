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
  
  const { classes } = props;
  
  return(
    <CardActions
      classes={{action: classes.cardActions}}
    >
      {/* Delete Button */}
      <Button
        onClick={()=>{
          props.updateDialog(true, "deleteDialog");
          props.selectCharacter(props.character);
        }}
        style={styles.colorRed}
      >
        Delete
      </Button>
    </CardActions>
  )
}

export default withStyles(styles)(withDialogControl(withCharacterDataControl(CharacterListItemCardActions)));