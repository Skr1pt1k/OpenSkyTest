import { takeLatest, put, call } from 'redux-saga/effects';

import {authConstants} from './constants';
import {authActions} from './actions';

import Api from '../../lib/api';

function* watchResourceCreateRequest({payload}) {
  try {
    const response = yield call(Api.Session.create, payload);
    yield put(authActions.sessionCreateSuccess(response));
  } catch (error) {
    yield put(authActions.sessionCreateFailure(error));
  }
}

function* watchResourceDeleteRequest({ payload: { history } }) {
  try {
    yield call(Api.Session.delete);
    yield put(authActions.sessionDeleteSuccess());
    history.push('/');
  } catch (error) {
    yield put(authActions.sessionDeleteFailure(error));
  }
}

function * watchResourceRestoreRequest() {
  try {
    const response = yield call(Api.Session.restore);
    yield put(authActions.sessionRestoreSuccess(response));
  } catch (error) {
    yield put(authActions.sessionRestoreFailure(error));
  }
}

export function *authSaga() {
  yield takeLatest(authConstants.SESSION_CREATE_REQUEST, watchResourceCreateRequest),
  yield takeLatest(authConstants.SESSION_DELETE_REQUEST, watchResourceDeleteRequest),
  yield takeLatest(authConstants.SESSION_RESTORE_REQUEST, watchResourceRestoreRequest);
}
