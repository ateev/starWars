import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import user from './reducers/userReducer.js';

export const finalReducer = combineReducers({
  user,
});

const composeEnhancers =
  process.env.NODE_ENV === 'development' &&
  typeof window !== 'undefined' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
);

export const createNewStore = initialState =>
  createStore(finalReducer, initialState, enhancer);