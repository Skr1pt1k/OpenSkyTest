import React, {useEffect} from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import {useDispatch} from 'react-redux';

import {authActions} from '../store/auth';

import Login from './Login';
import Info from './Info';
import {NotFound} from '../components/NotFound';
import PrivateRoute from './PrivateRouter';

import history from '../lib/history';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authActions.sessionRestoreRequest());
  }, []);

  return (
    <Router history={ history }>
      <Switch>
        <PrivateRoute path="/" exact component={ Login } />
        <PrivateRoute path="/info" exact component={ Info } />
        <Route path="" component={ NotFound } />
      </Switch>
    </Router>
  );
};

export default App;
