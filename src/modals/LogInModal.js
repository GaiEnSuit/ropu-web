import React from 'react';

import { View, Text, TouchableOpacity, Image, Button } from 'react-native';

import Modal from 'react-native-web-modal';

import { connect } from 'react-redux';

// headers
import ModalTitle from '../headers/ModalTitle';

//Icons
import closeIcon from '../images/closeIcon.png';
import inputIcon from '../images/input.png';
import accountIcon from '../images/account.png';

// Styles
import styles from '../styles/styles';

const mapStateToProps = state => {
  return {
    logInTitle: state.logInTitle,
    createAccountTitle: state.createAccountTitle,
    submitText: state.createAccountTitle,
    accountText: state.accountText
  }
}

const ConnectedLogInModal = (props) => {
  return (
    <Modal
      visible={props.open}
      onRequestClose={()=>{
        props.updateModal(false, "Log In Modal Closed");
      }}
    >
      <ModalTitle title={props.accountText} {...props} />
      <View>
        <TouchableOpacity
          onPress={()=>{
            props.updateModal(false, "Log In Modal Closed");
          }}
        >
          <Image
            style={[
              styles.icon24
            ]}
            source={closeIcon}
          />
        </TouchableOpacity>
      </View>
      {/* Log In Section */}
      <View>
        <View>
          <Image
            source={inputIcon}
            style={[
              styles.icon24
            ]}
          />
        </View>
        <Text>
          {props.logInTitle}
        </Text>
      </View>
      <View>
        <Text>
            Feature Currently Unavailable
        </Text>
        <View>
          <Button
            onPress={()=>{
              console.log("Button Pressed");
            }}
            disabled
            title={props.logInTitle}
          />
        </View>
      </View>
      {/* Create Account Section */}
      <View>
        <View>
          <Image
            source={accountIcon}
            style={[
              styles.icon24
            ]}
          />
        </View>
        <Text>
          {props.createAccountTitle}
        </Text>
      </View>
      <View>
        <Text>
            Feature Currently Unavailable
        </Text>
        <View>
          <Button
            onPress={()=>{
              console.log("Button Pressed");
            }}
            disabled
            title={props.submitText}
          />
        </View>
      </View>
    </Modal>
  )
}

const LogInModal = connect(mapStateToProps)(ConnectedLogInModal);

export default LogInModal;
