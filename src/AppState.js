import React, { Component } from 'react';

class AppState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      domain: 'https://ropu-453a6.firebaseapp.com/',
      version: 'v0.1.28',
      homeDialog: false,
      homeDialogData: {
        text: 'Exit to the home screen?'
      },
      guideDialog: false,
      guideDialogTitle: 'Guide',
      guideDialogData: [
        {
          title: 'How To Play',
          text: 'Role Playing Unlimited (RoPU) is a storytelling game where the Director controls the story and the Actors control the characters in the story.'
        },
        {
          title: 'Game Flow',
          text: 'The Director describes the Story, The Actors then decide how their Character\'s take action, Actors Roll to determine the outcome of the Action, Resolve Conflicts if any'
        },
        {
          title: 'Actions',
          text: 'Actions are when characters DO something. When an action is taken and the outcome is uncertain, make a roll and add the related ability and other modifiers. Determines the best related ability and modifiers that apply. If the action has no opposition, the roll is compared against a number decided by the Director. When two or more characters are competing against each other for an outcome a conflict ensues.'
        },
        {
          title: 'Stories',
          text: 'Contains information about the name of the world, the locations that make up the world, the charcters that inhabit them, and the plots that ensues within it, and the interables that charcters can interact with. Go to direct a story for details.'
        },
        {
          title: 'Rolling',
          text: 'A roll is a random number from 1-10 inclusively. Determine ability values or other modifiers that change the value of the roll. (ex. Someone tries to break down a door, Make a roll and add strength). Round down to the nearest whole number when necessary. If a roll is made against another roll (Competition Roll) then the higher number is successful. The Reaction is successful in ties.'
        },
        {
          title: 'Interactables',
          text: 'Interactables are anything that a character may use to effect the outcome of an action, this includes things such as equipment, weapons, magic, skills. These are provided for in the story module or determined by the director. When using interactables follow the edscription of the interactble.'
        },
        {
          title: 'Conflicts',
          text: 'Conflicts are either physical or mental'
        },
        {
          title: 'Physical Conflicts',
          text: 'Everyone works together to keep track of the general location of involved characters and the environment'
        },
        {
          title: 'Positioning',
          text: 'Everyone works together to keep track of the general location of involved characters and the environment'
        },
        {
          title: 'Turn Order',
          text: ' Turn order is determined by the Characters\' AGI from hgihest to lowest. In the case of ties a competition roll is made and whomever succeeds goes first'
        },
        {
          title: 'On Your Turn',
          text: 'Characters can take action by spending 1 SP on their turn Inconsequential actions cost 0 SP (breathing, closing your eyes etc.), completely replenish SP at the beggining of your turn'
        },
        {
          title: 'On Other Player\'s Turns\'',
          text: 'Actions can be made on other characters\' turns in response to another character’s action Spend 1 Stamina Point (SP), this usually ends up in a competition roll.'
        },
        {
          title: 'Social Conflicts',
          text: 'The character(s) must present a logical argument towards the opposing character(s). Make an INT competition roll. On success reduce your opponents MP by your character’s INT. Repeat until a character’s MP is reduced to 0 or no more arguments can be made.'
        }
      ],
      loggedIn: false,
      logInDialog: false,
      logInDialogData: {
        logInTitle: 'LOG IN',
        createAccountTitle: 'CREATE ACCOUNT',
        submitText: 'Submit'
      },
      anchorEl: null,
      accountMenu: false,
      accountMenuData: {
        account: 'account',
        logout: 'logout'
      },
      menuDialog: false,
      menuDialogTitle: 'Menu',
      menuDialogData: {
        home: {
          text: 'Home'
        },
        guide: {
          text: 'Guide'
        },
        market: {
          text: 'Market',
          url: '/market'
        },
        account: {
          text: 'Account',
          login: 'Log In',
          logout: 'Log Out'
        }
      },
      homePageIconsData: {
        playIcon: {
          text: 'Play',
          url: '/characters'
        },
        directIcon: {
          text: 'Direct',
          url: '/stories'
        },
        homeBrewIcon: {
          text: 'Homebrew',
          url: '/homebrew'
        }
      },
      newsFeed: {
        title: 'News Feed'
      },
      footer: {
        credits: {
          text: 'Credits',
          data: [
            {
              name: 'Kyrise',
              profile: 'https://kyrise.itch.io/',
              type: 'art',
              license: 'Creative Commons Attribution 4.0 International (CC BY 4.0)',
              licenseUrl: 'https://creativecommons.org/licenses/by/4.0/'
            }
          ]
        }
      },
      marketDialog: false,
      marketDialogTitle: 'Market',
      createCharacterDialog: false,
      createCharacterDialogData: {
        
      },
      characterSelectionPage: {
        title: 'Select A Character'
      },
      characterListData: [
        {
          id: 0,
          img: 'https://pbs.twimg.com/profile_images/817396686955888640/i-N1s3sl_400x400.jpg',
          name: 'Solaire',
          description: 'A human male who loves to praise the sun',
          game: 'Demon\'s Souls',
          campaign: 'My Solo Campaign',
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
              usage: null
            }
          ]
        },
        {
          id: 1,
          img: 'https://78.media.tumblr.com/d1eb4b3eebb39ac624c7be375d644909/tumblr_ou4loyzT8f1r7pa53o1_500.jpg',
          name: 'Ken',
          game: 'Himura Mansion',
          campaign: 'Weekly Saturday Meetings',
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
              usage: null
            },
            {
              id: 2,
              image: 'https://i.gifer.com/Kfc9.gif',
              name: 'Demon Fang',
              active: 'yes',
              type: 'Skill',
              description: 'A wave of energy emits from your weapon and streaks across the ground',
              usage: null
            },
            {
              id: 3,
              name: 'Potion',
              active: 'yes',
              image: 'https://orig00.deviantart.net/deb3/f/2016/199/a/5/potion_by_saramfdraws-daaiys0.gif',
              type: 'Consumable',
              description: 'A wave of energy emits from your weapon and streaks across the ground',
              usage: null
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