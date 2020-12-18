import { takeLatest, put, call } from 'redux-saga/effects';

import {flightsConstants} from './constants';
import {flightsActions} from './actions';

import Api from '../../lib/api';

function* fetch() {
  try {
    const response = yield call(Api.Flights.fetch);
    yield put(flightsActions.fetchSuccess(response));
  } catch (error) {
    yield put(flightsActions.fetchFailure(error));
  }
}

export function *flightsSaga() {
  yield takeLatest(flightsConstants.FLIGHTS_GET_REQUEST, fetch);
}
