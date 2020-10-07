import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import App from './components/App.jsx';

ReactDOM.render(

  <Router>
    <Switch>
      <Route path="/:siteId">
        <App />
      </Route>
    </Switch>
  </Router>,

  document.getElementById('photo-module'),
)