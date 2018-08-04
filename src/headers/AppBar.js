import React from 'react';

import { View, Image, TouchableOpacity } from 'react-native';

// Styles
import styles from '../styles/styles';

// Images
import logo from '../images/circle_logo_2.svg';
import home from '../images/home.png';
import shop from '../images/shop.png';
import help from '../images/help.png';
import account from '../images/account.png';
import input from '../images/input.png';
import announcement from '../images/announcement.png';

// Dialogs
import TitleDialog from '../dialogs/TitleDialog';
import HomeDialog from '../dialogs/HomeDialog';

// hoc
import withModal from '../hoc/withModal';

const LogoButton = (props) => {
  return (
    <TouchableOpacity
      onPress={()=>{
        props.updateModal(true, 'Title Dialog Opened');
      }}
    >
      <Image
        source={logo}
        style={[
          styles.icon24
        ]}
      />
    </TouchableOpacity>
  )
}

const LogoButtonWithModal = withModal(LogoButton, TitleDialog);

const HomeButton = (props) => {
  return (
    <TouchableOpacity
      onPress={()=>{
        props.updateModal(true, 'Home Dialog Opened');
      }}
    >
      <Image
        source={home}
        style={[
          styles.icon24
        ]}
      />
    </TouchableOpacity>
  )
}

const HomeButtonWithModal = withModal(HomeButton, HomeDialog);

const ShopButton = (props) => {
  return (
    <Image
      source={shop}
      style={[
        styles.icon24
      ]}
    />
  )
}

const HelpButton = (props) => {
  return (
    <Image
      source={help}
      style={[
        styles.icon24
      ]}
    />
  )
}

const AccountButton = (props) => {
  return (
    <Image
      source={account}
      style={[
        styles.icon24
      ]}
    />
  )
}

const LogInButton = (props) => {
  return (
    <Image
      source={input}
      style={[
        styles.icon24
      ]}
    />
  )
}

const NewsFeedButton = (props) => {
  return (
    <Image
      source={announcement}
      style={[
        styles.icon24
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
            {padding: '12px'}
          ]}
        >
          <LogoButtonWithModal update={props.update} {...props} />
        </View>
        <View
          style={[
            {padding: '10px'}
          ]}
        >
          <HomeButtonWithModal update={props.update} {...props} />
        </View>
        <View
          style={[
            {padding: '10px'}
          ]}
        >
          <ShopButton update={props.update} {...props} />
        </View>
        <View
          style={[
            {padding: '10px'}
          ]}
        >
          <NewsFeedButton update={props.update} {...props} />
        </View>
        <View
          style={[
            {padding: '10px'}
          ]}
        >
          <HelpButton update={props.update} {...props} />
        </View>
        {props.loggedIn?
          (
            <View
              style={[
                {padding: '10px'}
              ]}
            >
              <AccountButton update={props.update} {...props} />
            </View>
          ) :
          (
            <View
              style={[
                {padding: '10px'}
              ]}
            >
              <LogInButton update={props.update} {...props} />
            </View>
          )
        }
      </View>
    </View>
  )
}

export default AppBar;
