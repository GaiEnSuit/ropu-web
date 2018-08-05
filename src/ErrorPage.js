import React from 'react';

import { connect } from 'react-redux';

import { View, Text } from 'react-native';

// Icons
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

// styles
import styles from './styles/styles';
import Typography from '@material-ui/core/Typography';

// headers
import TitleBar from './headers/TitleBar';

const mapStateToProps = state => {
  return{
    errorPageText: state.errorPageText
  }
}

const ConnectedErrorPage = ({errorPageText, errorPageTitle}) => {
  return (
    <View
      style={[
        styles.flex1,
        styles.justifyCenter,
        styles.alignCenter
      ]}
    >
      <TitleBar title={errorPageTitle} />
      <ErrorOutlineIcon
        style={styles.icon64}
      />
      <Text
        style={[
          styles.textCenter,
          styles.h5
        ]}
      >
        {errorPageText}
      </Text>
    </View>
  )
}

const ErrorPage = connect(mapStateToProps)(ConnectedErrorPage);

export default ErrorPage;
