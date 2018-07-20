import React, { Component } from 'react';

// Buttons
import Button from '@material-ui/core/Button';

// styles
import styles from '../styles/styles';

const withA2HS = (WrappedComponent) => class extends Component {
  
  state = {
    ready: false,
    defferedPrompt: null
  }
  
  componentWillMount () {
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      this.setState({ready: true, deferredPrompt: e});
      // For testing purposes
      console.log('app ready to be installed');
    });
  }
  
  handleA2HS = (props) => {
    if (!this.state.deferredPrompt) {
      console.log("A2HS Not Ready");
    } else {
      this.state.deferredPrompt.prompt();
    }
  }
  
  render () {
    return (
      <div>
        {this.state.ready &&
          <Button
            style={{...styles.absoluteTopRight, ...styles.colorWhite}}
            onClick={()=>{
              this.handleA2HS();
            }}
          >
            <WrappedComponent />
          </Button>
        }
      </div>
    )
  }
}

export default withA2HS;