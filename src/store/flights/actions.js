import {flightsConstants} from './constants';

export const flightsActions = {
  fetch: payload => ({type: flightsConstants.FLIGHTS_GET_REQUEST, payload}),
  fetchSuccess: item => ({type: flightsConstants.FLIGHTS_GET_SUCCESS, payload: item}),
  fetchFailure: error => ({type: flightsConstants.FLIGHTS_GET_FAILURE, payload: error}),
};
