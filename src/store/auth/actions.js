import {authConstants} from './constants';

export const authActions = {
  sessionCreateRequest: payload => ({type: authConstants.SESSION_CREATE_REQUEST, payload}),
  sessionCreateSuccess: item => ({type: authConstants.SESSION_CREATE_SUCCESS, payload: item}),
  sessionCreateFailure: error => ({type: authConstants.SESSION_CREATE_FAILURE, payload: error}),

  sessionDeleteRequest: payload => ({type: authConstants.SESSION_DELETE_REQUEST, payload}),
  sessionDeleteSuccess: payload => ({type: authConstants.SESSION_DELETE_SUCCESS, payload}),
  sessionDeleteFailure: error => ({type: authConstants.SESSION_DELETE_FAILURE, payload: error}),

  sessionRestoreRequest: () => ({type: authConstants.SESSION_RESTORE_REQUEST}),
  sessionRestoreSuccess: payload => ({type: authConstants.SESSION_RESTORE_SUCCESS, payload}),
  sessionRestoreFailure: error => ({type: authConstants.SESSION_RESTORE_FAILURE, payload: error}),
};
