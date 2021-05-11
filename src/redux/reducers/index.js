import { combineReducers } from 'redux';

import movie from './movie';
import auth from './auth';

export default combineReducers({ movie, auth });