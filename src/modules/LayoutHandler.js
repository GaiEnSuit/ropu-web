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
    // Handles Orientatino Changes
    Dimensions.addEventListener('change', () => {
      this.props.changeOrientation(
        {orientation: Dimensions.get('window').width < Dimensions.get('window').height ? 'portrait' : 'landscape'},
        console.log(Dimensions.get('window').width < Dimensions.get('window').height ? 'Orientation Changed to Portrait' : 'Orientation Changed to Landscape')
      );
    });
  }

  render ()
  {
    return null
  }
}

const LayoutHandler = connect(null, mapDispatchToProps)(ConnectedLayoutHandler);

export default LayoutHandler;
