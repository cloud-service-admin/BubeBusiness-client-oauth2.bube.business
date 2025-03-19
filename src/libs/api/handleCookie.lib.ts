import { jwtDecode } from 'jwt-decode';
import resApi from './apiResponse.lib';
import { I_get_cookie, I_set_refreshToken } from './handleCookie.lib.interface';

export const cookieName = {
  userRefreshToken: 'user.refreshToken',
};

const set_refreshToken: I_set_refreshToken = (refreshToken) => {
  try {
    const refreshTokenDecode = jwtDecode(refreshToken);
    let expires;
    if (refreshTokenDecode.exp) {
      expires = new Date(refreshTokenDecode.exp * 1000);
    } else {
      expires = '';
    }

    document.cookie = `${cookieName.userRefreshToken}=${refreshToken};expires=${expires};path=/;secure=true;SameSite=Strict`;
    return resApi.success({});
  } catch (error) {
    return resApi.errorApp(error);
  }
};

const get_cookie: I_get_cookie = (name) => {
  const cookieString = document.cookie;
  const cookies = cookieString.split('; ');

  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split('=');
    if (cookieName === name) {
      return cookieValue;
    }
  }

  return null;
};

const handleCookie = {
  set_refreshToken,
  get_cookie,
};

export default handleCookie;
