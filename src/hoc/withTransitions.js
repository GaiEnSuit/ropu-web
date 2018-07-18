import React, { Component } from 'react';

// Animations
import Fade from '@material-ui/core/Fade';

const withTransitions = (WrappedComponent, animation, boolean, timeout) => class extends Component {
  
  state = {
    fade: false,
    timeout: 0
  }
  
  // On Mount Hook
  componentWillMount() {
    this.updateTransition(animation, boolean, timeout)
  }
  
  // The style property must be applied to the DOM for animation to work
  updateTransition = (animation, boolean, timeout) => {
    this.setState({[animation]: boolean, timeout: timeout})
  }
               
  render(){
    return (
      <Fade in={this.state.fade} timeout={this.state.timeout}>
        <WrappedComponent
          {...this.props}
        />
      </Fade>
    )
  }
}

export default withTransitions;