import Cookies from 'cookies';
import uuid from 'uuid';

export function readBrowserCookie(cookieName) {
  if (typeof document !== 'undefined') {
    const d = [];
    const e = document.cookie.split(';');
    const a = RegExp(`^\\s*${cookieName}=\\s*(.*?)\\s*$`);
    for (let b = 0; b < e.length; b++) {
      const f = e[b].match(a);
      f && d.push(f[1]);
    }
    return d;
  } else {
    return '';
  }
}

export function setBrowserCookie(cookieName, cookieValue, expirydays) {
  const d = new Date();
  d.setTime(d.getTime() + (expirydays * 24 * 60 * 60 * 1000));
  document.cookie = `${cookieName}=${cookieValue}; expires=${d.toGMTString()}`;
}

export function deleteCookie(cookieName) {
  const newCookieToSet = `${cookieName}=;expires=Thu, 01 Jan 1970 00:00:01 GMT`;
  document.cookie = newCookieToSet;
}