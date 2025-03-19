import envConfig from '@configs/env/envConfig.config';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import resApi from '../handleApiResponse/apiResponse';
import {
  _IRemoveCookie,
  IGetCookie,
  ISetCookie,
} from './handleCookie.interface';

const APP_MODE = envConfig.VITE_APP_MODE;

export const cookieName = {
  userRefreshToken: 'user.refreshToken',
};

const getCookie: IGetCookie = (name) => {
  try {
    const cookie = Cookies.get(name);

    if (!cookie) return resApi.error();

    return resApi.success(cookie);
  } catch (error) {
    return resApi.errorApp(error);
  }
};

const setCookie: ISetCookie = (name, value) => {
  try {
    const decodedRefreshToken = jwtDecode(value);
    const { exp } = decodedRefreshToken;

    let maxAge;

    if (!exp) {
      maxAge = 60 * 60 * 24 * 30;
    } else {
      maxAge = exp * 1000 - Date.now();
    }

    if (APP_MODE === 'production' || APP_MODE === 'test') {
      Cookies.set(name, value, {
        expires: 30,
        path: '/',
        secure: true,
        sameSite: 'strict',
      });
    } else {
      Cookies.set(name, value, {
        expires: maxAge,
        path: '/',
        secure: false,
        httpOnly: false,
        sameSite: 'strict',
      });
    }

    return resApi.success();
  } catch (error) {
    return resApi.errorApp(error);
  }
};

const removeCookie: _IRemoveCookie = (cookieName) => {
  try {
    Cookies.remove(cookieName);
    return resApi.success();
  } catch (error) {
    return resApi.errorApp(error);
  }
};

const handleCookieUtils = {
  setCookie,
  getCookie,
  removeCookie,
};

export default handleCookieUtils;
