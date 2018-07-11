import React from 'react';

// Material-ui
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// Style Overrides
import styles from '../../styles';

const CreateCharacterDialogTitle = (props) => {
  return(
    <Toolbar
      className="bg-color-black justify-center"
    >
      <Typography
        variant="display1"
        style={styles.title}
      >
        {props.createCharacterDialogText.title}
      </Typography>
    </Toolbar>
  )
}

export default CreateCharacterDialogTitle;