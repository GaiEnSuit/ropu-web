// Images
import spinner from './images/spinner-loop.gif';

export const newsFeedHeight = () => {
  if (window.innerWidth >= 1920) {
    return '900px'
  } else if (window.innerWidth >= 1280) {
    return '600px'
  } else if (window.innerWidth >= 960) {
    return '600px'
  } else if (window.innerWidth >= 600) {
    return '450px'
  } else {
    return '200px'
  }
}

// Override Classes
const styles = {
  root: {
    color: '#ff5c5c',
    backgroundColor: 'black'
  },
  logoButton: {
    marginRight: 'auto'
  },
  gridContainer: {
    margin: '0',
    width: '100%',
    height: '100%'
  },
  title: {
    color: '#ff5c5c',
    textAlign: 'center',
    backgroundColor: 'black'
  },
  footerLink: {
    color: '#ff5c5c',
    textDecoration: 'none'
  },
  icon: {
    width: '64px',
    height: '64px'
  },
  image: {
    width: '100%',
    height: '100%',
    color: '#ff5c5c'
  },
  playIcon: {
    backgroundColor: '#2eb2ff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '10%',
    paddingBottom: '10%',
  },
  directIcon: {
    backgroundColor: '#99e265',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '10%',
    paddingBottom: '10%',
    alignItems: 'center',
  },
  homebrewIcon: {
    backgroundColor: '#b760e6',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '10%',
    paddingBottom: '10%',
  },
  newsFeed: {
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingBottom: '5%'
  },
  newsFeedEmpty: {
    minHeight: newsFeedHeight(),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'height'
  },
  newsFeedContent: {
    minHeight: newsFeedHeight(),
    backgroundColor: '#ffffff',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundImage: 'url(' + spinner + ')',
  },
  footerText: {
    color: 'white'
  },
  cardActions: {
    color: '#ff5c5c'
  },
  tabs: {
    color: '#ff5c5c'
  },
  toolbar: {
    position: 'fixed',
    backgroundColor: 'black',
    width: '100%',
    justifyContent: 'center'
  },
  createCharacterDialogActions: {
    display: 'flex',
    justifyContent: 'center'
  },
  createCharacterDialogContent: {
    paddingLeft: '0',
    paddingRight: '0'
  },
  fab: {
    position: 'fixed',
    bottom: '20px',
    left: '20px',
    color: '#ff5c5c',
    backgroundColor: 'black'
  }
};

export default styles;