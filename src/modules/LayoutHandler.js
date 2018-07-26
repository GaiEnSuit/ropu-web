import { Component } from 'react';

import { Dimensions } from 'react-native';

class LayoutHandler extends Component {
  constructor () {
    super();
    // Handles Orientatino Changes
    Dimensions.addEventListener('change', () => {
      this.props.update({
        orientation: Dimensions.get('window').width < Dimensions.get('window').height ? 'portrait' : 'landscape'
      });
      console.log('Orientation Changed');
    });
  }
  
  render ()
  {
    return null
  }
}

export default LayoutHandler;