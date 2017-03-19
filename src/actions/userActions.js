import api from '../api.js';

export function loginUser(username, password, user) {
  return {
    type: 'LOGIN_USER',
    username,
    password,
    user,
  };
}

export function logoutUser() {
  return {
    type: 'LOGOUT_USER',
  };
}

export function checkCreds(name, password) {
  return (dispatch) => {
    api.getUserByName(name)
      .end((err, data) => {
        if (err === null && err !== undefined) {
          dispatch(loginUser(name, password, data.body.results[0]))
        } else {
          throw new Error("Couldn't get the schema from server.");
        }
      });
  };
}