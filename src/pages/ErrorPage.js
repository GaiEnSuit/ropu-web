import React from 'react';

import { withRouter } from '../routing/Routing';

import { connect } from 'react-redux';

import { View, Text, Image } from 'react-native';

// Icons
import errorIcon from '../images/error.png';

// styles
import styles from '../styles/styles';

// headers
import TitleBar from '../headers/TitleBar';

const mapStateToProps = state => {
  return{
    errorPageText: state.errorPageText,
    titlePath: state.titlePath
  }
}

const ConnectedErrorPage = (props) => {

  setTimeout(()=>{props.history.push(props.titlePath)}, 1000);

  return (
    <View
      style={[
        styles.flex1,
        styles.justifyCenter,
        styles.alignCenter,
        styles.bgColorMediumRed
      ]}
    >
      <TitleBar title={props.errorPageTitle} />
      <Image
        source={errorIcon}
        style={styles.icon64}
      />
      <Text
        style={[
          styles.textCenter,
          styles.h5,
          styles.colorWhite
        ]}
      >
        {props.errorPageText}
      </Text>
    </View>
  )
}

const ErrorPage = withRouter(connect(mapStateToProps)(ConnectedErrorPage));

export default ErrorPage;
