import { AppRegistry } from 'react-native';

// Global CSS for web
import './index.css';

// Fonts
import 'typeface-roboto';

// Root Component
import App from './App';

// Service Worker
import registerServiceWorker from './registerServiceWorker';

// Register The App
AppRegistry.registerComponent('App', () => App);

AppRegistry.runApplication('App', {
  initialProps: {},
  rootTag: document.getElementById('root')
});

registerServiceWorker();
