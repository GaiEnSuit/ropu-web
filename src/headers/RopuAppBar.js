import React, { Component } from 'react';

// Material-UI Components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

// Animations
import withTransitions from '../hoc/withTransitions';

// Styles
import styles from '../styles/styles';

// Buttons
import MenuButton from '../buttons/MenuButton';
import HomeButton from '../buttons/HomeButton';
import MarketButton from '../buttons/MarketButton';
import GuideButton from '../buttons/GuideButton';
import AccountButton from '../buttons/AccountButton';
import LogoButton from '../buttons/LogoButton';
import LogInButton from '../buttons/LogInButton';

// Higher Order Components
import withFullWidthDialog from '../hoc/withFullWidthDialog';

// Logo Button With Dialog to Home Prompt
const LogoButtonWithDialog = withFullWidthDialog(LogoButton)

// Layout
class RopuAppBar extends Component {
  
  componentWillMount() {
    this.props.updateTransition('fade', true, 500)
  }
  
  componentWillUnmount() {
    this.props.updateTransition('fade', false, 500)
  }
  
  render() {
    return (
      <AppBar
        id="appbar"
        style={this.props.style}
      >
        <Toolbar style={{...styles.displayFlex, ...styles.justifyEnd, ...styles.bgColorBlack, ...styles.colorRed}}>
          <div
            style={styles.marginRA}
          >
            <LogoButtonWithDialog update={this.props.update} {...this.props} />
          </div>
          <HomeButton update={this.props.update} />
          <MarketButton update={this.props.update} />
          <GuideButton update={this.props.update} />
          {this.props.loggedIn? <AccountButton update={this.props.update} /> : <LogInButton update={this.props.update} />}
          <MenuButton update={this.props.update} />
        </Toolbar>
      </AppBar>
    )
  }
}

export default withTransitions(RopuAppBar);