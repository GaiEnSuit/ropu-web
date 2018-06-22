import React, { Component } from 'react';

// Material-UI Components
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';

//Custom Components
import MenuButton from './MenuButton';
import HomeButton from './HomeButton';
import MarketButton from './MarketButton';
import GuideButton from './GuideButton';
import LogoButton from './LogoButton';

// Icons
import AccountBoxIcon from '@material-ui/icons/AccountBox';

class AppBarIcons extends Component {
  
  render() {
    return (
        <Toolbar>
          <LogoButton update={this.props.update} domain={this.props.domain} />
          <HomeButton update={this.props.update} domain={this.props.domain}/>
          <MarketButton />
          <GuideButton update={this.props.update} />
          {/* Account Navigation Button */}
          { !this.props.loggedIn &&
            <IconButton>
              <AccountBoxIcon />
            </IconButton>
          }
          { this.props.loggedIn &&
            <IconButton>
              <AccountBoxIcon />
            </IconButton>
          }
          {/* Menu Button */}
          <MenuButton update={this.props.update}/>
        </Toolbar>
    );
  }
}

export default AppBarIcons;