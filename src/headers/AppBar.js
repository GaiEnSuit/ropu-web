import React from 'react';

import { View, Image, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';

import { withRouter } from '../routing/Routing';

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

//redux
const mapStateToProps = state => {
  return {
    homePath: state.homePath,
    loggedIn: state.loggedIn
  }
}

const LogoButtonWithModal = (props) => {
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

const LogoButton = withModal(LogoButtonWithModal, TitleDialog);

const ConnectedHomeButton = (props) => {
  return (
    <TouchableOpacity
      disabled={props.location.pathname === props.homePath || props.location.pathname === props.homePath + "/" ? true : false}
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

const HomeButton = withRouter(withModal(connect(mapStateToProps)(ConnectedHomeButton), HomeDialog));

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
const ConnectedAppBar = (props) => {
  return (
    <View
      style={[
        styles.vw100
      ]}
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
          <LogoButton />
        </View>
        <View
          style={[
            {padding: '10px'}
          ]}
        >
          <HomeButton {...props} />
        </View>
        <View
          style={[
            {padding: '10px'}
          ]}
        >
          <ShopButton />
        </View>
        <View
          style={[
            {padding: '10px'}
          ]}
        >
          <NewsFeedButton />
        </View>
        <View
          style={[
            {padding: '10px'}
          ]}
        >
          <HelpButton />
        </View>
        {props.loggedIn?
          (
            <View
              style={[
                {padding: '10px'}
              ]}
            >
              <AccountButton />
            </View>
          ) :
          (
            <View
              style={[
                {padding: '10px'}
              ]}
            >
              <LogInButton />
            </View>
          )
        }
      </View>
    </View>
  )
}

const AppBar = connect(mapStateToProps)(ConnectedAppBar);

export default AppBar;
