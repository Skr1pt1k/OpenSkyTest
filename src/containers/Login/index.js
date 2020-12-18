import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import LoginComponent from '../../components/Login';
import {authActions} from '../../store/auth';

const Login = () => {
  const {error} = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const handleSubmit = (inputs) => {
    dispatch(authActions.sessionCreateRequest(inputs));
  };

  return (
    <LoginComponent handleSubmitRequest={ handleSubmit } sessionError={ error } />
  );
};

export default Login;
