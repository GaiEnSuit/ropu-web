import React from 'react';

// Material-ui
import Button from '@material-ui/core/Button';

// Icons
import AddIcon from '@material-ui/icons/Add';

// Higher Order Components 
import withDialogControl from '../hoc/withDialogControl';
import withGameDataControl from '../hoc/withGameDataControl';
import withCharacterDataControl from '../hoc/withCharacterDataControl';

// Styles Classes
import styles from '../styles';

const CreateCharacterButton = (props) => {
  return(
    <Button
      onClick={()=>{
        props.setDefaultGame(props.gameListData)
        props.updateDialog(true, 'createCharacterDialog')
      }}
      className="d-flex justify-center color-red bg-color-black"
      variant="fab"
      style={styles.fab}
    >
      <AddIcon style={styles.image} />
    </Button>
  )
}

export default withCharacterDataControl(withGameDataControl(withDialogControl(CreateCharacterButton)));