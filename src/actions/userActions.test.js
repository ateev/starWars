import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import api from '../api.js';
import user from '../mocks/user.json';
import { loginUser, checkCreds } from './userActions.js';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('../api.js', () => ({ getUserByName: jest.fn() }));

describe('User Actions', () => {
  it('should create an action to login a user', () => {
    const expectedAction = {
        type: 'LOGIN_USER',
        username: 'luke',
        password: '123',
        user,
    };
    expect(loginUser('luke', '123', user)).toEqual(expectedAction);
  });

  it('should request for user details', () => {
    const expectedActions = [{
        type: 'LOGIN_USER',
        username: 'luke',
        password: '123',
        user,
    }];
    const sampleBody = {
      results: [user]
    };
    const store = mockStore({});
    api.getUserByName.mockImplementation(() => ({ end: cb => cb(null, { body: sampleBody }) }));
    store.dispatch(checkCreds('luke', '123', user));
    expect(store.getActions()).toEqual(expectedActions);
  });
});