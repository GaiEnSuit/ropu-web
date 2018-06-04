import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';


import './index.css';
import 'typeface-roboto';

import App from './App';
import AppState from './AppState';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <AppState>
      <App />
    </AppState>
  </BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();
