import {authConstants} from './constants';

const initialState = {
  currentSession: {},
  fetching: true,
  authenticated: false
};

export const authReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
  case authConstants.SESSION_CREATE_REQUEST:
    return { ...state, error: '' };
  case authConstants.SESSION_CREATE_SUCCESS:
    return {
      ...state,
      currentSession: payload.data,
      authenticated: true,
      fetching: false
    };
  case authConstants.SESSION_CREATE_FAILURE:
    return { ...state, fetching: false, error: payload.response.data.errors };
  case authConstants.SESSION_DELETE_REQUEST:
    return { ...state };
  case authConstants.SESSION_DELETE_SUCCESS:
    return {
      ...state,
      authenticated: false,
      fetching: false
    };
  case authConstants.SESSION_DELETE_FAILURE:
    return { ...state, fetching: false };
  case authConstants.SESSION_RESTORE_REQUEST:
    return { ...state };
  case authConstants.SESSION_RESTORE_SUCCESS:
    return {
      ...state,
      currentSession: payload,
      authenticated: true,
      fetching: false
    };
  case authConstants.SESSION_RESTORE_FAILURE:
    return {
      ...state,
      authenticated: false,
      fetching: false
    };
  default:
    return state;
  }
};
