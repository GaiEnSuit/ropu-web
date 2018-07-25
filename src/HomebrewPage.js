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
import withNavigation from './hoc/withNavigation';

const BackButtonWithNavigation = withNavigation(BackButton, '/');

// Footer
const HomebrewPageActionBar = (props) => {
  return(
    <Toolbar
      style={{...styles.bgColorTransparant, ...styles.actionBar, ...styles.displayFlex, ...styles.justifyBetween}}
    >
      <BackButtonWithNavigation
        {...props}
      />
    </Toolbar>
  )
}

// Layout
const HomebrewPage = (props) => {
  return (
    <main
      id="homebrew"
      style={{...styles.minHeight}}
    >
      <TitleBar {...props} />
      <div>
        <Toolbar />
        <Typography variant="display1">This Feature is Currently Unavailable</Typography>
        <Toolbar />
      </div>
      <HomebrewPageActionBar {...props} />
    </main>
  )
}

export default HomebrewPage;