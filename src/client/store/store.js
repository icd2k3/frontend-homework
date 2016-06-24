import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutable';
import immutable from 'immutable';
import { logger } from '../middleware/logger.js';
import exceptionReporter from '../middleware/exceptionReporter';
import * as reducers from '../reducers/reducers';

const reducer = combineReducers(reducers);

let state = immutable.fromJS({});

state = reducer(state, {
    name: 'CONSTRUCT'
});

export default applyMiddleware(logger, exceptionReporter)(createStore)(reducer, state);
