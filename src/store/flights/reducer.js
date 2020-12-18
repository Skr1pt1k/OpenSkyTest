import {flightsConstants} from './constants';

const initialState = {
  loading: false,
  data: {},
  error: null
};

export const flightsReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
  case flightsConstants.FLIGHTS_GET_REQUEST:
    return {...state, loading: true, error: null};

  case flightsConstants.FLIGHTS_GET_SUCCESS:
    return {...state, data: payload.data, loading: false};

  case flightsConstants.FLIGHTS_GET_FAILURE:
    return {...state, loading: false, error: payload};

  default:
    return state;
  }
};
