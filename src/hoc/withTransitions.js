import React, { Component } from 'react';

// Animations
import Fade from '@material-ui/core/Fade';
import Grow from '@material-ui/core/Grow';
import Collapse from '@material-ui/core/Collapse';
import Slide from '@material-ui/core/Slide';
import Zoom from '@material-ui/core/Zoom';

const withTransitions = (WrappedComponent, animation, timeout, delay, direction) => class extends Component {
  
  state = {
    in: false,
    timeout: null
  }
  
  // On Mount Hook
  componentDidMount() {
    this.updateTransition(true)
  }
  
  componentWillUnmount() {
    this.updateTransition(false)
  }
  
  // The style property must be applied to the DOM for animation to work
  updateTransition = (boolean, timeout) => {
    this.setState({in: boolean, timeout: timeout? timeout : 0})
  }
               
  render(){
    switch (animation) {
      case 'fade': 
        return (
          <Fade
            in={this.state.in}
            timeout={timeout}
            style={{transitionDelay: delay? delay : 0}}
          >
            <WrappedComponent
              updateTransition={this.updateTransition}
              {...this.props}
            />
          </Fade>
        );
        break;
      case 'grow':
        return (
          <Grow
            in={this.state.in}
            timeout={timeout}
            style={{transitionDelay: delay? delay : 0}}
          >
            <WrappedComponent
              updateTransition={this.updateTransition}
              {...this.props}
            />
          </Grow>
        )
        break;
      case 'collapse':
        return (
          <Collapse
            in={this.state.in}
            timeout={timeout}
            style={{transitionDelay: delay? delay : 0}}
            collapsedHeight="0px"
          >
            <WrappedComponent
              updateTransition={this.updateTransition}
              {...this.props}
            />
          </Collapse>
        )
        break;
      case 'slide':
        return (
          <Slide
            in={this.state.in}
            timeout={timeout}
            style={{transitionDelay: delay? delay : 0}}
            direction={direction? direction : 'up'} 
          >
            <WrappedComponent
              updateTransition={this.updateTransition}
              {...this.props}
            />
          </Slide>
        )
        break;
      case 'zoom':
        return (
          <Zoom
            in={this.state.in}
            timeout={timeout}
            style={{transitionDelay: delay? delay : 0}}
          >
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