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

// Dialogs
import TitleDialog from '../dialogs/TitleDialog';
import HomeDialog from '../dialogs/HomeDialog';

// hoc
import withModal from '../hoc/withModal';

// Modals
import MarketModal from '../modals/MarketModal';
import GuideModal from '../modals/GuideModal';

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

const ShopButtonWithModal = (props) => {
  return (
    <TouchableOpacity
      onPress={()=>{
        props.updateModal(true, "Market Modal Opened");
      }}
    >
      <Image
        source={shop}
        style={[
          styles.icon24
        ]}
      />
    </TouchableOpacity>
  )
}

const ShopButton = withModal(ShopButtonWithModal, MarketModal);

const HelpButtonWithModal = (props) => {
  return (
    <TouchableOpacity
      onPress={()=>{
        props.updateModal(true, 'Guide Modal Opened');
      }}
    >
      <Image
        source={help}
        style={[
          styles.icon24
        ]}
      />
    </TouchableOpacity>
  )
}

const HelpButton = withModal(HelpButtonWithModal, GuideModal);

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

// Layout
const ConnectedAppBar = (props) => {
  return (
    <View
      style={[
        styles.vw100,
        {
          borderBottomColor: "black",
          borderBottomWidth: 1
        }
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
            {padding: '12px'}
          ]}
        >
          <HomeButton {...props} />
        </View>
        <View
          style={[
            {padding: '12px'}
          ]}
        >
          <ShopButton />
        </View>
        <View
          style={[
            {padding: '12px'}
          ]}
        >
          <HelpButton />
        </View>
        {props.loggedIn?
          (
            <View
              style={[
                {padding: '12px'}
              ]}
            >
              <AccountButton />
            </View>
          ) :
          (
            <View
              style={[
                {padding: '12px'}
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
