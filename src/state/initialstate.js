import { Dimensions } from 'react-native';

const initialState = {

  // Account Control
  loggedIn: false,

  // Orientation
  orientation: Dimensions.get('window').width < Dimensions.get('window').height ? 'portrait' : 'landscape',

  // Paths
  titlePath: '/',
  homePath: '/home',
  characterSelectionPath: '/characterselection',
  characterCreationPath: '/charactercreation',
  storySelectionPath: '/storyselection',
  homebrewPath: '/homebrew',

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
    game: null,
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
  version: '0.3.00',

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
    },
    {
      id: 3,
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
    },
    {
      id: 4,
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
    },
    {
      id: 1,
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
    },
    {
      id: 2,
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
    },
    {
      id: 3,
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
  // Log In Text
  logInTitle: 'Log In',
  createAccountTitle: 'Create Account',
  submitText: 'Subit',
  accountText: 'Account',
  //Account Menu Text
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
  // Guide Text
  guideModalText: 'Guide',
  guideTextData: [
    {
      key: 'Getting Started',
      text: `Role Playing Unlimited is a social game of collective storytelling where the Game Master controls the game and Players control Player Characters in the game.\n\nSelect "Direct" from the Home Page to be a Game Master. \n\nSelect "Play" from the Home Page to be a Player.`
    },
    {
      key: 'Game Flow',
      text: `1. The Game Master describes the situation the Player Characters are in, then asks the Players what they want to do\n\n2. Players decide what Actions their Player Characters take\n\n3. Determine the outcome of Actions by making rolls or resolving conflicts if necessary \n\n4. Repeat!`
    },
    {
      key: 'Direct As Game Master',
      text: `The Game Master is responsible for enforcing the rules and controlling everything that is not a Player Character.\n\nIt is recommended that the Game Master is familer with the rules and remain as neutral as possible while keeping the game an enjoyable experience for everyone.\n\nThe game will contain information such as Locations or Non-Player Characters that the Game Master can use to build the world around players.\n\nBe ready to get creative, but reasonably realistic as Players will often do something unexpected that the game may not handle.`
    },
    {
      key: 'Play A Character',
      text: `Players are responsible for controlling their own Characters through actions.\n\nWhen a Player Character does something it is called an Action and depending on the context different rules apply.\n\nWhen an Action is taken against any opposition that is not a character, a Roll must be made against a target number determined by the Game Master to determine if the action is successfull (See Rolling for more detail).\n\nIf an action is taken in opposition to another character's wishes a Conflict ensues (See Conflicts for more details).\n\nCharacters can also use Interactables in tandem with Actions (See Interactables)`
    },
    {
      key: 'Rolling',
      text: 'Rolls are based on a 10-sided dice roll and are used through various ways by the game. The value of the roll is often modified by other aspects of the game (*When making calculations round down to the nearest whole number*).\n\nThe most common use for a roll is to determine the outcome of an action.\n\nFor example, a Player Character tries to grab onto a tree branch after falling off a cliff. The Game Master determines that the Player must Roll an 10 or higher to succeed. The Player Rolls a 7 and adds 2 (Dexterity) to the score which equals 9. The character does not succeed and falls into the ravine below...'
    },
    {
      key: 'Interactables',
      text: 'An Interactable is anything that a Character can... well interact with and are are divided into two main categories; physical and non-physical.\n\nInteractables include (but are not limited to) things such as wearable equipment, weapons, objects, special skills, magical abilities.\n\nThe use of Interactables changes the way Actions work usually with the cost of spending Action Points (See Action Points).'
    },
    {
      key: 'Conflicts',
      text: 'A Conflict begins when two or more Characters have conflicting intentions. For example, a Character wants to fight another Character. Intention being the keyword; In the previous example if one a Character is unaware that someone is trying to fight them, then a conflict has yet to begin. a Make an INT competition roll. On success reduce your opponents MP by your character’s INT. Repeat until a character’s MP is reduced to 0 or no more arguments can be made.'
    },
    {
      key: 'Positioning',
      text: 'Everyone works together to keep track of the general location of involved characters and the environment'
    },
    {
      key: 'Turn Order',
      text: `Turn order is determined by the characters' AGI from hgihest to lowest. In the case of ties a competition roll is made and whomever succeeds goes first`
    },
    {
      key: 'Actions During Conflict',
      text: 'Characters can take action by spending 1 SP on their turn Inconsequential actions cost 0 SP (breathing, closing your eyes etc.), completely replenish SP at the beggining of your turn'
    },
    {
      key: `Reactions`,
      text: `Reactions can be made in response to another character’s action Spend 1 Stamina Point (SP), this usually ends up in a competition roll.`
    }
  ],
  // Credits
  credits: 'Credits',
  by: ' by ',
  license: ' is licensed under ',
  // Section Texts
  versionText: 'Version',
  startText: 'TOUCH TO START',
  copyrightText: 'Written by K Truong',
  // Home Page Text
  playText: 'PLAY',
  directText: 'DIRECT',
  homebrewText: 'CREATE',
  newsText: 'NEWS',
  guideText: 'GUIDE',
  // User Feedback Text
  offlineText: 'Unable to Retrieve Data',
  // Character Creation Text
  CharacterCreationPagetitle: 'Character Creation',
  game: 'Game',
  description: 'Description',
  abilities: 'Abilities',
  summary: 'Summary',
  selectGame: 'Select A Game',
  continue: 'Continue',
  placeholderName: `My Character's Name`,
  name: 'Name',
  decription: 'Description',
  placeholderDescription: 'Input Description Here! (Age, Race, Sex, Quirks etc.)',
  abilitiesInstructions: 'Increase and decrease the values of the abilities, the total value should equal the recommended value for your game',
  selectTemplate: `Select A Character Template (Interactables)`,
  gameNotSelected: `You must select a game before continuing`,
  tags: 'Tags',
  changeTemplate: 'Change Template',
  add: `Add Interactable(s)`,
  startingInteractbles: 'Starting Interactables',
  selectImage: 'Select or upload an image',
  complete: 'Finish',
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
  expand: 'Description',
  // Story Selection Text
  storySelectionPageTitle: 'Select A Story',
  // Homebrew Text
  homebrewPageTitle: 'Homebrew',
  // Character Selection Text
  characterSelectionPageTitle: 'Select A Character',
  noCharacters: 'No Characters',
  noStory: 'No Story',
  noName: 'No Name',
  // Dialog Text
  confirmDelete: 'Delete Character?',
  titleNavigateText: 'Return To Title Screen?',
  homeNavigateText: 'Return To Home Screen?',
  characterSelectionPageDialogTitle: 'Cancel Character Creation',
  // Market Modal text
  marketModalTitle: 'Market',
  // Actions text
  delete: 'Delete',
  // Error Page Text
  errorPageText: 'Oops! Something Went Wrong',
  // Offline text
  offline: 'Error Unable to Retrieve Data'
}

export default initialState;
