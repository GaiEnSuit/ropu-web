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
      ropuAppBar: {
        open: false,
        loggedIn: false
      },
      callToAction: [
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
          id: 0,
          img: 'https://pbs.twimg.com/profile_images/817396686955888640/i-N1s3sl_400x400.jpg',
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
            sp: 0,
            maxhp: 5,
            maxmp: 8,
            maxsp: 10
          },
          interactables: [
            {
              id: 1,
              image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Trp-Sword-14226124129-v06.png/250px-Trp-Sword-14226124129-v06.png',
              active: true,
              name: 'Shortword',
              type: 'tangible',
              description: 'A sword...that is rather short',
              usage: ''
            },
            {
              id: 2,
              image: 'https://i.gifer.com/Kfc9.gif',
              active: false,
              name: 'Demon Fang',
              type: 'intangible',
              description: 'A wave of energy emits from your weapon and streaks across the ground',
              usage: 'Reduces enemies HP by 3+ STR'
            },
            {
              id: 3,
              name: 'Potion',
              active: false,
              image: 'https://orig00.deviantart.net/deb3/f/2016/199/a/5/potion_by_saramfdraws-daaiys0.gif',
              type: 'tangible',
              description: 'A wave of energy emits from your weapon and streaks across the ground',
              usage: ''
            }
          ]
        },
        {
          id: 1,
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
            sp: 0,
            maxhp: 0,
            maxmp: 0,
            maxsp: 0
          },
          interactables: []
        }
      ],
      storyList: [
        {
          title: 'Family Main Story',
          story: 'demon\'s souls',
          interactableList: [
            {
              id: 1,
              image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Trp-Sword-14226124129-v06.png/250px-Trp-Sword-14226124129-v06.png',
              name: 'Shortword',
              active: 'yes',
              type: 'Equipment',
              description: 'A sword...that is rather short',
              usage: ''
            },
            {
              id: 2,
              image: 'https://i.gifer.com/Kfc9.gif',
              name: 'Demon Fang',
              active: 'yes',
              type: 'Skill',
              description: 'A wave of energy emits from your weapon and streaks across the ground',
              usage: ''
            },
            {
              id: 3,
              name: 'Potion',
              active: 'yes',
              image: 'https://orig00.deviantart.net/deb3/f/2016/199/a/5/potion_by_saramfdraws-daaiys0.gif',
              type: 'Consumable',
              description: 'A wave of energy emits from your weapon and streaks across the ground',
              usage: ''
            }
          ]
        }
      ],
      
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