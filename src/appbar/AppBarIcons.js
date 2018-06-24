import React, { Component } from 'react';

// Material-UI Components
import Toolbar from '@material-ui/core/Toolbar';

//Custom Components
import MenuButton from './MenuButton';
import HomeButton from './HomeButton';
import MarketButton from './MarketButton';
import GuideButton from './GuideButton';
import LogoButton from './LogoButton';
import AccountButton from './AccountButton';

class AppBarIcons extends Component {
  render() {
    return (
      <Toolbar>
        <LogoButton update={this.props.update} domain={this.props.domain} />
        <HomeButton update={this.props.update} domain={this.props.domain} />
        <MarketButton />
        <GuideButton update={this.props.update} />
        <AccountButton update={this.props.update} loggedIn={this.props.loggedIn} />
        <MenuButton update={this.props.update} />
      </Toolbar>
    );
  }
}

export default AppBarIcons;