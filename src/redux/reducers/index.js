import { combineReducers } from 'redux';

import movie from './movie';
import auth from './auth';
import favourite from './favourite';

export default combineReducers({ movie, auth, favourite });