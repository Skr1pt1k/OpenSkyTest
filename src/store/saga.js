import {all} from 'redux-saga/effects';

import {authSaga} from './auth';
import {flightsSaga} from './flights';

export default function *() {
  yield all([authSaga(), flightsSaga()]);
}
