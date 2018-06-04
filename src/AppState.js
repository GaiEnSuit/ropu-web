import React, { Component } from 'react';

class AppState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'RoPU',
      navLinks: [
        {
          text: 'Characters',
          url: '/characters'
        },
        {
          text: 'Stories',
          url: '/stories'
        },
        {
          text: 'Interactables',
          url: '/interactables'
        },
        {
          text: 'Rules',
          url: '/rules'
        },
        {
          text: 'Market',
          url: '/market'
        },
        {
          text: 'Forums',
          url: '/forums'
        }
      ],
      ropuappbar: {
        open: false,
        loggedIn: false
      },
      homecta: [
        {
          text: 'Play',
          subText: 'Characters',
          url: '/characters'
        },
        {
          text: 'Direct',
          subText: 'Stories',
          url: '/Stories'
        },
        {
          text: 'How To Play',
          subText: 'Rules',
          url: '/rules'
        }
      ]
    };
    this.setAppState = this.setAppState.bind(this);
  }

  setAppState(updater, callback) {
    // newState can be object or function!
    this.setState(updater, () => {
      if (this.props.debug) {
        console.log('setAppState', JSON.stringify(this.state));
      }
      if (callback) {
        callback();
      }
    });
  }

  render() {
    return (
      <div className="AppState">
        {React.Children.map(this.props.children, child => {
          return React.cloneElement(child, {
            appState: this.state,
            setAppState: this.setAppState
          });
        })}
      </div>
    );
  }
}

export default AppState;