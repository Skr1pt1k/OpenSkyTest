import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {render} from 'react-dom';

import {store} from './store/configureStore';
import App from './containers';

import './assets/scss/main.scss';

render(
  <Provider store={ store }>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
