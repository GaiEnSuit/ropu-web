import React from 'react';

// Material-UI Components
import Toolbar from '@material-ui/core/Toolbar';

//Custom Components
import MenuButton from './MenuButton';
import HomeButton from './HomeButton';
import MarketButton from './MarketButton';
import GuideButton from './GuideButton';
import AccountButton from './AccountButton';
import LogoButton from './LogoButton';
import LogInButton from './LogInButton';

const AppBarIcons = (props) => {
  return (
    <Toolbar className="justify-flex-end" >
      {window.location.pathname !== "/" && <LogoButton update={props.update} />}
      {window.location.pathname !== "/" && <HomeButton update={props.update} />}
      <MarketButton update={props.update} />
      <GuideButton update={props.update} />
      {props.loggedIn? <AccountButton update={props.update} /> : <LogInButton update={props.update} />}
      <MenuButton update={props.update} />
    </Toolbar>
  )
}

export default AppBarIcons;