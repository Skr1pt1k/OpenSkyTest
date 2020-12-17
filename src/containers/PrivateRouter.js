import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import {useSelector} from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const {authenticated, fetching} = useSelector(state => state.auth);

  return (
    <Route
      { ...rest }
      render={ props =>
        authenticated ?
          window.location.pathname === '/' ?
            <Redirect to={ { pathname: '/info', state: { from: props.location } } } /> : fetching === false ? <Component { ...props } /> : null
          : window.location.pathname !== '/' && fetching === false ?
            <Redirect to={ { pathname: '/', state: { from: props.location } } } /> : fetching === false ?
              <Component { ...props } /> : null }
    />
  );
};


export default withRouter(PrivateRoute);
