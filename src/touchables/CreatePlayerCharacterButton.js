import React from 'react';

// Routes
import { Link } from 'react-router-dom';

// Material-ui
import IconButton from '@material-ui/core/IconButton';

// Icons
import AddIcon from '@material-ui/icons/Add';

// Styles Classes
import styles from '../styles/styles';

const CreatePlayerCharacterButton = (props) => {
  return(
    <Link to="/charactercreation">
      <IconButton
        variant="extendedFab"
        style={[styles.colorWhite, styles.bgColorRed]}
      >
        <AddIcon />
      </IconButton>
    </Link>
  )
}

export default CreatePlayerCharacterButton;