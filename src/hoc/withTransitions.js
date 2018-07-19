import React, { Component } from 'react';

// Animations
import Fade from '@material-ui/core/Fade';
import Grow from '@material-ui/core/Grow';
import Collapse from '@material-ui/core/Collapse';
import Slide from '@material-ui/core/Slide';
import Zoom from '@material-ui/core/Zoom';

const withTransitions = (WrappedComponent, animation, timeout, direction) => class extends Component {
  
  state = {
    fade: false,
    grow: false,
    collapse: false,
    zoom: false,
    timeout: 0,
    direction: null
  }
  
  // On Mount Hook
  componentWillMount() {
    this.updateTransition(animation, true, timeout)
  }

  componentWillUnmount() {
    this.updateTransition(animation, false, timeout)
  }
  
  // The style property must be applied to the DOM for animation to work
  updateTransition = (animation, boolean, timeout) => {
    this.setState({[animation]: boolean, timeout: timeout, direction: direction})
  }
               
  render(){
    switch (animation) {
      case 'fade': 
        return (
          <Fade in={this.state.fade} timeout={this.state.timeout} >
            <WrappedComponent
              updateTransition={this.updateTransition}
              {...this.props}
            />
          </Fade>
        );
        break;
      case 'grow':
        return (
          <Grow in={this.state.grow} timeout={this.state.timeout} >
            <WrappedComponent
              updateTransition={this.updateTransition}
              {...this.props}
            />
          </Grow>
        )
        break;
      case 'collapse':
        return (
          <Collapse in={this.state.collapse} timeout={this.state.timeout} collapsedHeight="0px" >
            <WrappedComponent
              updateTransition={this.updateTransition}
              {...this.props}
            />
          </Collapse>
        )
        break;
      case 'slide':
        return (
          <Slide in={this.state.slide} timeout={this.state.timeout} direction={this.state.direction} style={{transitionDelay: this.state.zoom ? 500 : 0}} >
            <WrappedComponent
              updateTransition={this.updateTransition}
              {...this.props}
            />
          </Slide>
        )
        break;
      case 'zoom':
        return (
          <Zoom in={this.state.zoom} timeout={this.state.timeout} style={{transitionDelay: this.state.zoom ? 500 : 0}} >
            <WrappedComponent
              updateTransition={this.updateTransition}
              {...this.props}
            />
          </Zoom>
        )
        break;
      default:
        return null;
        break;
    }
  }
}

export default withTransitions;