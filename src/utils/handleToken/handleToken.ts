import { store } from '@store/store';
import resApi from '../handleApiResponse/apiResponse';
import handleCookie, { cookieName } from '../handleCookie/handleCookie';
import handleError from '../handleError/handleError';
import {
  IGetEmployeeTokenFromStore,
  IGetRefreshTokenFromCookie,
  IGetTokenFromStore,
  ISetRefreshTokenToCookie,
} from './handleToken.interface';

// TODO: USER TOKEN
const setRefreshTokenToCookie: ISetRefreshTokenToCookie = (refreshToken) => {
  try {
    const handle = handleCookie.setCookie(
      cookieName.userRefreshToken,
      refreshToken,
    );

    if (handle.status === 'error') throw new Error(handle.message);

    return resApi.success();
  } catch (error) {
    return handleError(error);
  }
};

const getTokenFromStore: IGetTokenFromStore = () => {
  try {
    const token = store.getState().user.token;
    if (!token) {
      throw new Error('Token not found');
    }

    return resApi.success({
      accessToken: token.accessToken,
      refreshToken: token.refreshToken,
    });
  } catch (error) {
    return handleError(error as Error);
  }
};

const getRefreshTokenFromCookie: IGetRefreshTokenFromCookie = () => {
  try {
    const getCookie = handleCookie.getCookie(cookieName.userRefreshToken);

    if (getCookie.status === 'error') return resApi.error();

    return resApi.success(getCookie.values);
  } catch (error) {
    return resApi.errorApp(error);
  }
};

// TODO EMPLOYEE TOKEN
const getEmployeeAccessTokenFromStore: IGetEmployeeTokenFromStore = () => {
  try {
    const token =
      store.getState().myEmployee.workCompany?.myEmployee.token.accessToken;
    if (!token) {
      return resApi.error('Token not found');
    }

    return resApi.success(token);
  } catch (error) {
    return handleError(error as Error);
  }
};

const delete_social_user_token = () => {
  try {
    const handle = handleCookie.removeCookie(cookieName.userRefreshToken);

    if (handle.status === 'error') {
      throw new Error(handle.message);
    }

    return resApi.success();
  } catch (error) {
    return handleError(error);
  }
};

const handleTokenUtils = {
  setRefreshTokenToCookie,
  getTokenFromStore,
  getEmployeeAccessTokenFromStore,
  getRefreshTokenFromCookie,
  delete_social_user_token,
};

export default handleTokenUtils;
