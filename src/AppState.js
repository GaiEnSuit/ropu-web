import React, { Component } from 'react';

class AppState extends Component {
  constructor(props) {
    super(props);
    this.state = {

      // Account Control
      loggedIn: false,

      // Paths
      paths: {
        home: '/',
        characterSelection: '/characterselection',
        characterCreation: '/charactercreation',
        storySelection: '/storyselection',
        homebrew: '/homebrew'
      },
      
      // Dialog Control
      homeDialog: false,
      guideDialog: false,
      logInDialog: false,
      accountMenu: false,
      menuDialog: false,
      interactableCardDialog: false,
      marketDialog: false,
      createCharacterDialog: false,
      cancelCreateCharacterDialog: false,
      deleteDialog: false,
      
      // Function Control
      anchorEl: null,
      createCharacterDialogTab: 0,

      // Temporary Data
      selectedCharacter: null,
      selectedInteractable: null,
      selectedGame: null,
      selectedTemplate: null,
      createCharacterData: {
        id: null,
        img: null,
        name: '',
        description: '',
        gameID: null,
        story: null,
        str: 0,
        end: 0,
        int: 0,
        wil: 0,
        dex: 0,
        agi: 0,
        hp: 0,
        mp: 0,
        sp: 0,
        maxhp: 5,
        maxmp: 5,
        maxsp: 5,
        interactableListData: [
        ]
      },
      
      // Static Data
      licenseData: [
        {
          title: 'Artwork',
          sourceUrl: 'https://opengameart.org/content/kyrises-free-16x16-rpg-icon-pack',
          author: 'Kyrise',
          authorUrl: 'https://kyrise.itch.io/',
          license: 'Creative Commons Attribution 4.0 International (CC BY 4.0)',
          licenseUrl: 'https://creativecommons.org/licenses/by/4.0/'
        },
        {
          title: 'Game Icons',
          sourceUrl: 'https://game-icons.net/',
          author: 'Lorc, Delapouite & contributors',
          authorUrl: 'https://game-icons.net/about.html#authors',
          license: 'Creative Commons Attribution 3.0 International (CC BY 3.0)',
          licenseUrl: 'https://creativecommons.org/licenses/by/3.0/'
        }
      ],
      
      // Dynamic Data
      characterListData: [
        {
          id: 1,
          img: 'https://pbs.twimg.com/profile_images/817396686955888640/i-N1s3sl_400x400.jpg',
          name: 'Solaire Longest Name in The Universe',
          description: 'A human male who loves to praise the sun',
          game: `Demon's Souls`,
          story: 'My Solo Campaign',
          str: 0,
          end: 0,
          int: 0,
          wil: 0,
          dex: 0,
          agi: 0,
          hp: 0,
          mp: 0,
          sp: 0,
          maxhp: 5,
          maxmp: 8,
          maxsp: 10,
          interactableListData: [
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
              image: 'https://i.pinimg.com/originals/29/a7/b7/29a7b78e9f06f5cfbb8543423765e133.gif',
              active: false,
              name: 'FireBall',
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
          id: 2,
          img: 'https://78.media.tumblr.com/d1eb4b3eebb39ac624c7be375d644909/tumblr_ou4loyzT8f1r7pa53o1_500.jpg',
          name: 'Ken',
          game: 'Himura Mansion',
          story: 'Weekly Saturday Meetings',
          str: 0,
          end: 0,
          int: 0,
          wil: 0,
          dex: 0,
          agi: 0,
          hp: 0,
          mp: 0,
          sp: 0,
          maxhp: 0,
          maxmp: 0,
          maxsp: 0,
          interactableListData: []
        }
      ],
      storyListData: [
      ],
      gameListData: [
        {
          id: 0,
          name: `SoulsBorne`,
          image: 'https://darksouls.wiki.fextralife.com/file/Dark-Souls/Bonfire_Header_2.jpg',
          tags: [`Medieval Fantasy`, 'Dungeon Crawler', 'Brutal'],
          description: `The game is set in the fictional kingdom of Boletaria, ruled by the aging King Allant XII. Because of his greed, the king searched for power and prosperity through a dark ritual of channeling the power of souls that brought unprecedented prosperity to Boletaria, until the "Deep Fog" covered the land's outskirts, cutting off the kingdom from the outside world. Neighboring kingdoms sent scouts to investigate but none returned after entering the fog. It was only after Vallarfax of the royal Twin Fangs broke free from the fog that the rest of the world could be told of Boletaria's plight. By channeling souls, King Allant had awakened the Old One, a great demon residing below the Nexus. With the Old One's awakening, a dark fog had swept in, that within it unleashed demons who feasted on the souls of mankind, where those left alive without a soul became insane and violent. Without resistance, the fog slowly begins to spread beyond Boletaria.`,
          locations: [
            {
              name: 'Boletaria',
              description: `The game is set in the fictional kingdom of Boletaria, ruled by the aging King Allant XII. Because of his greed, the king searched for power and prosperity through a dark ritual of channeling the power of souls that brought unprecedented prosperity to Boletaria, until the "Deep Fog" covered the land's outskirts, cutting off the kingdom from the outside world. Neighboring kingdoms sent scouts to investigate but none returned after entering the fog. It was only after Vallarfax of the royal Twin Fangs broke free from the fog that the rest of the world could be told of Boletaria's plight. By channeling souls, King Allant had awakened the Old One, a great demon residing below the Nexus. With the Old One's awakening, a dark fog had swept in, that within it unleashed demons who feasted on the souls of mankind, where those left alive without a soul became insane and violent. Without resistance, the fog slowly begins to spread beyond Boletaria.`,
              image: ''
            }
          ],
          templateInteractableListData: [
            {
              name: 'Warrior',
              description: `Heavy Tank Type Character`,
              interactableListData: [
                {
                  id: 1,
                  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Trp-Sword-14226124129-v06.png/250px-Trp-Sword-14226124129-v06.png',
                  name: 'Shortword',
                  type: 'Equipment',
                  description: 'A sword...that is rather short',
                  usage: ``
                },
                {
                  id: 3,
                  name: 'Potion',
                  image: 'https://orig00.deviantart.net/deb3/f/2016/199/a/5/potion_by_saramfdraws-daaiys0.gif',
                  type: 'Consumable',
                  description: 'A wave of energy emits from your weapon and streaks across the ground',
                  usage: ``
                }
              ]
            },
            {
              name: 'Mage',
              description: `The Glass Canon Type Character`,
              interactableListData: [
                {
                  id: 2,
                  image: 'https://i.pinimg.com/originals/29/a7/b7/29a7b78e9f06f5cfbb8543423765e133.gif',
                  name: 'Fire Ball',
                  type: 'Skill',
                  description: 'Hurl a ball of fire',
                  usage: ``
                },
                {
                  id: 4,
                  name: 'Mental Potion',
                  image: 'http://i665.photobucket.com/albums/vv15/Glass-Sneakers/Gifs%20and%20Tiny%20Things/MetterschlingelBlueBottle.gif',
                  type: 'Consumable',
                  description: 'A wave of energy emits from your weapon and streaks across the ground',
                  usage: ``
                }
              ]
            }
          ],
          interactableListData: [
            {
              id: 1,
              image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Trp-Sword-14226124129-v06.png/250px-Trp-Sword-14226124129-v06.png',
              name: 'Shortword',
              type: 'Equipment',
              description: 'A sword...that is rather short',
              usage: ``
            },
            {
              id: 2,
              image: 'https://i.pinimg.com/originals/29/a7/b7/29a7b78e9f06f5cfbb8543423765e133.gif',
              name: 'Fire Ball',
              type: 'Skill',
              description: 'A wave of energy emits from your weapon and streaks across the ground',
              usage: ``
            },
            {
              id: 3,
              name: 'Potion',
              image: 'https://orig00.deviantart.net/deb3/f/2016/199/a/5/potion_by_saramfdraws-daaiys0.gif',
              type: 'Consumable',
              description: 'A wave of energy emits from your weapon and streaks across the ground',
              usage: ``
            },
            {
              id: 4,
              name: 'Mental Potion',
              image: 'http://i665.photobucket.com/albums/vv15/Glass-Sneakers/Gifs%20and%20Tiny%20Things/MetterschlingelBlueBottle.gif',
              type: 'Consumable',
              description: 'A wave of energy emits from your weapon and streaks across the ground',
              usage: ``
            },
            {
              id: 5,
              name: 'Fire Bolt',
              image: 'https://orig00.deviantart.net/deb3/f/2016/199/a/5/potion_by_saramfdraws-daaiys0.gif',
              type: 'Consumable',
              description: 'A wave of energy emits from your weapon and streaks across the ground',
              usage: ``
            }
          ]
        }
      ],

      // Text Data
      homeDialogText: {
        text: 'Exit to the home screen?'
      },
      deleteDialogText: {
        delete: 'Delete Character?'
      },
      guideDialogText: {
        title: 'Guide'
      },
      guideDialogData: [
        {
          title: 'How To Play',
          text: 'Role Playing Unlimited (RoPU) is a storytelling game where the Director controls the story and the Actors control the characters in the story.'
        },
        {
          title: 'Game Flow',
          text: `The Director describes the Story, The Actors then decide how their Character's take action, Actors Roll to determine the outcome of the Action, Resolve Conflicts if any`
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
          text: `Turn order is determined by the Characters' AGI from hgihest to lowest. In the case of ties a competition roll is made and whomever succeeds goes first`
        },
        {
          title: 'On Your Turn',
          text: 'Characters can take action by spending 1 SP on their turn Inconsequential actions cost 0 SP (breathing, closing your eyes etc.), completely replenish SP at the beggining of your turn'
        },
        {
          title: `On Other Player's Turns`,
          text: `Actions can be made on other characters' turns in response to another character’s action Spend 1 Stamina Point (SP), this usually ends up in a competition roll.`
        },
        {
          title: 'Social Conflicts',
          text: 'The character(s) must present a logical argument towards the opposing character(s). Make an INT competition roll. On success reduce your opponents MP by your character’s INT. Repeat until a character’s MP is reduced to 0 or no more arguments can be made.'
        }
      ],
      logInDialogText: {
        logInTitle: 'LOG IN',
        createAccountTitle: 'CREATE ACCOUNT',
        submitText: 'SUBMIT'
      },
      accountMenuText: {
        account: 'account',
        logout: 'logout'
      },
      menuDialogText: {
        title: 'Menu',
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
      homePageText: {
        play: 'Play',
        direct: 'Direct',
        homebrew: 'Create',
        newsFeed: 'News Feed',
        offline: 'Unable to Retrieve Data',
        credits: 'Credits',
        by: ' by ',
        license: ' is licensed under ',
        version: 'Version',
        copyright: '',
      },
      marketDialogText: {
        title: 'Market'
      },
      cancelCreateCharacterDialogText: 'Cancel Character Creation?',
      characterCreationPageText: {
        title: 'Create Character',
        game: 'Game',
        description: 'Description',
        abilities: 'Abilities',
        interactables: 'Interactables',
        summary: 'Summary',
        selectGame: 'Select A Game',
        selectedGame: 'Selected Game',
        continue: 'Continue',
        placeholderName: `My Character's Name`,
        name: 'Name',
        decription: 'Description',
        placeholderDescription: 'Input Description Here! (Age, Race, Sex, Quirks etc.)',
        abilitiesInstructions: 'Increase and decrease the values of the abilities, the total value should equal the recommended value for your game',
        selectTemplate: `Select A Character Template (Interactables)`,
        gameNotSelected: `You must select a game before continuing`,
        tags: 'Tags',
        selectedTemplate: 'Selected Template',
        changeTemplate: 'Change Template',
        add: `Add Interactable(s)`,
        startingInteractbles: 'Starting Interactables',
        selectImage: 'Select or upload an image',
        complete: 'Complete Character Creation',
        strength: 'Strength',
        endurance: 'Endurance',
        intelligence: 'Intelligence',
        will: 'Will',
        dexterity: 'Dexterity',
        agility: 'Agility',
        abilitiesTotal: 'Total Combined Score',
        abilitiesTotalInstructions: 'Total combined score should equal to 0',
        next: 'Next',
        back: 'Back',
        cancel: 'Cancel',
        expand: 'Description'
      },
      characterSelectionPageText: {
        title: 'Select A Character',
        noCharacters: 'No Characters',
        newCharacter: 'New Character',
        noStory: 'No Story',
        noName: 'No Name',
        delete: 'Delete',
        confirmDelete: 'Delete this character?',
        confirm: 'Confirm',
        cancel: 'Cancel',
        createCharacter: 'Create Character',
        back: 'back',
        confirmHome: 'Return to Title Screen?'
      }
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