import React from 'react';

// Routes
import { Link } from 'react-router-dom';

// Material-ui
import Button from '@material-ui/core/Button';

// Icons
import AddIcon from '@material-ui/icons/Add';

// Higher Order Components 
import withDialog from '../hoc/withDialog';

// Dialogs
import HomeDialog from '../dialogs/HomeDialog';

// Styles Classes
import styles from '../styles/styles';

const CreateCharacterButton = (props) => {
  return(
    <Link to="/charactercreation">
      <Button
        variant="extendedFab"
        style={{...styles.colorWhite, ...styles.bgColorRed}}
      >
        <AddIcon />
        {props.text}
      </Button>
    </Link>
  )
}

export default withDialog(CreateCharacterButton, HomeDialog);