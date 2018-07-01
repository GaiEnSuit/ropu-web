import React from 'react';

// Material-UI Components
import Toolbar from '@material-ui/core/Toolbar';

//Custom Components
import MenuButton from './MenuButton';
import HomeButton from './HomeButton';
import MarketButton from './MarketButton';
import GuideButton from './GuideButton';
import LogoButton from './LogoButton';
import AccountButton from './AccountButton';

const AppBarIcons = (props) => {
  return (
    <Toolbar>
      <LogoButton update={props.update} domain={props.domain} />
      <HomeButton update={props.update} domain={props.domain} />
      <MarketButton update={props.update} />
      <GuideButton update={props.update} />
      <AccountButton update={props.update} loggedIn={props.loggedIn} />
      <MenuButton update={props.update} />
    </Toolbar>
  )
}

export default AppBarIcons;