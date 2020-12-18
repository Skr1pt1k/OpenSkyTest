import {combineReducers} from 'redux';

import {authReducer} from './auth';
import {flightsReducer} from './flights';

export default combineReducers({
  auth: authReducer,
  flights: flightsReducer,
});
