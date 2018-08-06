import { Component } from 'react';

import { Dimensions } from 'react-native';

import { connect } from 'react-redux';

import { changeOrientation } from '../state/actions';

const mapDispatchToProps = dispatch => {
  return {
    changeOrientation: orientation => dispatch(changeOrientation(orientation))
  };
};

class ConnectedLayoutHandler extends Component {
  constructor () {
    super();
    // Handles Orientation Changes
    Dimensions.addEventListener('change', () => {
      let orientation = Dimensions.get('window').width < Dimensions.get('window').height ? 'portrait' : 'landscape';
      this.props.changeOrientation({orientation});
    });
  }

  render ()
  {
    return null
  }
}

const LayoutHandler = connect(null, mapDispatchToProps)(ConnectedLayoutHandler);

export default LayoutHandler;
