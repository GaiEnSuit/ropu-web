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
          text: 'How To Play',
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
          url: '/characters'
        },
        {
          text: 'Direct',
          url: '/Stories'
        },
        {
          text: 'How To Play',
          url: '/rules'
        }
      ],
      newsFeed: [
        {
          id: 1,
          img: 'https://images.freeimages.com/images/large-previews/c89/newspapers-2-1315373.jpg',
          title: 'Foo',
          text: 'Foo'
        },
        {
          id: 2,
          img: 'https://images.freeimages.com/images/large-previews/c89/newspapers-2-1315373.jpg',
          title: 'Bar',
          text: 'Bar'
        }
      ],
      characterList: [
        {
          id: 1,
          img: 'https://78.media.tumblr.com/d1eb4b3eebb39ac624c7be375d644909/tumblr_ou4loyzT8f1r7pa53o1_500.jpg',
          name: 'Solaire',
          description: 'A human male who loves to praise the sun',
          story: 'Demon\'s Souls',
          abilities: {
            str: 0,
            end: 0,
            int: 0,
            wil: 0,
            dex: 0,
            agi: 0
          },
          stats: {
            hp: 0,
            mp: 0,
            sp: 0
          },
          interactables: []
        },
        {
          id: 2,
          img: 'https://78.media.tumblr.com/d1eb4b3eebb39ac624c7be375d644909/tumblr_ou4loyzT8f1r7pa53o1_500.jpg',
          name: 'Ken',
          story: 'Himura Mansion',
          abilities: {
            str: 0,
            end: 0,
            int: 0,
            wil: 0,
            dex: 0,
            agi: 0
          },
          stats: {
            hp: 0,
            mp: 0,
            sp: 0
          },
          interactables: []
        }
      ],
      storyList: [
        {
          title: 'Family Main Story'
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