import React from 'react';

// Material-ui
import Toolbar from '@material-ui/core/Toolbar';

// Icons
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

// styles
import styles from './styles/styles';
import Typography from '@material-ui/core/Typography';

// headers
import TitleBar from './headers/TitleBar';

const ErrorPage = (props) => {
  return (
    <main
      id="error"
      style={{...styles.minHeight, ...styles.displayFlex, ...styles.justifyCenter, ...styles.alignCenter, ...styles.directionColumn}}
    >
      <Toolbar />
      <TitleBar {...props} />
      <ErrorOutlineIcon
        style={styles.icon64}
      />
      <Typography
        variant="display1"
        style={styles.textCenter}
      >
        {props.text.text}
      </Typography>
    </main>
  )
}

export default ErrorPage;