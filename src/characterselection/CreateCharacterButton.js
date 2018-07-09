import React from 'react';

// Material-ui
import Paper from '@material-ui/core/Paper';

// Icons
import AddCircleIcon from '@material-ui/icons/AddCircle';

// Higher Order Components 
import withDialogControl from '../hoc/withDialogControl';

// Styles Classes
import styles from '../styles';

const CreateCharacterButton = (props) => {
  return(
    <Paper
      onClick={()=>{
        props.updateDialog(true, 'createCharacterDialog')
      }}
      className="d-flex justify-center color-red bg-color-black"
      elevation={12}
    >
      <AddCircleIcon
        style={styles.icon}
      />
    </Paper>
  )
}

export default withDialogControl(CreateCharacterButton);