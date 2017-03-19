import { loginUser } from '../actions/userActions.js';
import user from './userReducer.js';

describe('user reducer', () => {
  it('should handle default state', () => {
    const action = loginUser();
    console.log(action);
    expect(user(undefined, action)).toEqual({});
  });

});