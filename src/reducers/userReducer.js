import { setBrowserCookie, deleteCookie } from '../helpers/cookieHandler.js';

const user = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
        let newUser = {};
        const username = action.username;
        const password = action.password;
        const user = action.user;
        if(
            typeof username !== 'undefined' ||
            typeof password !== 'undefined' ||
            typeof user !== 'undefined'
        ) {
            if (
                username === user.name &&
                password === user.birth_year
            ) {
                newUser = action.user;
                setBrowserCookie('LoggedIn username', user.name, 7);
            } else {
                setBrowserCookie('isLoggedIn', false, 7);
                deleteCookie('LoggedIn username');
            }
        }
      return newUser;
    case 'LOGOUT_USER':
        deleteCookie('LoggedIn username');
        return {};
    default:
      return state;
  }
};
export default user;
