import React from 'react';

// Material-UI
import Toolbar from '@material-ui/core/Toolbar';

// Header
import TitleBar from './headers/TitleBar';

// Styles
import styles from './styles/styles';
import Typography from '@material-ui/core/Typography';

// Buttons
import BackButton from './buttons/BackButton';

// HOC
import withDialog from './hoc/withDialog';

const BackButtonWithDialog = withDialog(BackButton, 'homeDialog');

// Footer
const HomebrewPageActionBar = (props) => {
  return(
    <Toolbar
      style={{...styles.bgColorTransparant, ...styles.actionBar, ...styles.displayFlex, ...styles.justifyBetween}}
    >
      <BackButtonWithDialog
        {...props}
      />
    </Toolbar>
  )
}

// Layout
const HomebrewPage = (props) => {
  return (
    <div>
      <TitleBar {...props} />
      <div>
        <Toolbar />
        <Typography variant="display1">This Feature is Currently Unavailable</Typography>
        <Toolbar />
      </div>
      <HomebrewPageActionBar {...props} />
    </div>
  )
}

export default HomebrewPage;