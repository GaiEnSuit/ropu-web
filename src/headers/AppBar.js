import React from 'react';

import { View, Image } from 'react-native';

// Styles
import styles from '../styles/styles';

// routing
import { withRouter } from '../routing/Routing';

// Images
import logo from '../images/circle_logo_2.svg';
import home from '../images/home.png';
import shop from '../images/shop.png';
import help from '../images/help.png';
import account from '../images/account.png';
import input from '../images/input.png';

const LogoButton = (props) => {
  return (
    <Image
      onClick={()=>{
        props.history.push('/');
      }}
      source={logo}
      style={[
        styles.icon36
      ]}
    />
  )
}

const LogoButtonWithRouter = withRouter(LogoButton);

const HomeButton = (props) => {
  return (
    <Image
      source={home}
      style={[
        styles.icon36
      ]}
    />
  )
}

const ShopButton = (props) => {
  return (
    <Image
      source={shop}
      style={[
        styles.icon36
      ]}
    />
  )
}

const HelpButton = (props) => {
  return (
    <Image
      source={help}
      style={[
        styles.icon36
      ]}
    />
  )
}

const AccountButton = (props) => {
  return (
    <Image
      source={account}
      style={[
        styles.icon36
      ]}
    />
  )
}

const LogInButton = (props) => {
  return (
    <Image
      source={input}
      style={[
        styles.icon36
      ]}
    />
  )
}



// Layout
const AppBar = (props) => {
  return (
    <View
      style={props.style}
    >
      <View
        style={[
          styles.directionRow,
          styles.justifyAround,
          styles.bgColorMediumRed
        ]}
      >
        <View
          style={[
            {padding: '10px'}
          ]}
        >
          <LogoButtonWithRouter update={props.update} {...props} />
        </View>
        <View
          style={[
            {padding: '10px'}
          ]}
        >
          <HomeButton update={props.update} />
        </View>
        <View
          style={[
            {padding: '10px'}
          ]}
        >
          <ShopButton update={props.update} />
        </View>
        <View
          style={[
            {padding: '10px'}
          ]}
        >
          <HelpButton update={props.update} />
        </View>
        {props.loggedIn?
          (
            <View
              style={[
                {padding: '10px'}
              ]}
            >
              <AccountButton update={props.update} />
            </View>
          ) :
          (
            <View
              style={[
                {padding: '10px'}
              ]}
            >
              <LogInButton update={props.update} />
            </View>
          )
        }
      </View >
    </View>
  )
}

export default AppBar;
