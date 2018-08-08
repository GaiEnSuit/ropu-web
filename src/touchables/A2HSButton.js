import React, { Component } from 'react';

// Buttons
import Button from '@material-ui/core/Button';

// styles
import styles from '../styles/styles';

// Icons
import PlayForWorkIcon from '@material-ui/icons/PlayForWork';

class A2HSButton extends Component {
  
  state = {
    disabled: true,
    installPromptEvent: null
  }
  
  componentWillMount () {
    window.addEventListener('beforeinstallprompt', (event) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      event.preventDefault();
      // Stash the event so it can be triggered later.
      this.setState({disabled: false, installPromptEvent: event});
      // For testing purposes
      console.log('app ready to be installed');
    });
  }
  
  showPrompt = (props) => {
    this.state.installPromptEvent.prompt();
    // Wait for the user to respond to the prompt
    this.state.installPromptEvent.userChoice.then((choice) => {
      if (choice.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      // Clear the saved prompt since it can't be used again
    this.setState({installPromptEvent: null, disabled: true})
    });
  }
  
  render () {
    return (
      <div>
        {!this.state.disabled &&
          <Button
            style={[styles.absoluteTopRight, styles.colorWhite, styles.bgColorTransparent]}
            onClick={()=>{
              this.showPrompt();
            }}
            variant="extendedFab"
          >
            <PlayForWorkIcon
              style={{...styles.colorWhite}}
            />
            Add To Home Screen
          </Button>
        }

      </div>
    )
  }
}

export default A2HSButton;