import { IResApi } from './apiResponse.lib.interface';

export type I_set_refreshToken = (refreshToken: string) => IResApi<null>;

export type I_get_cookie = (cookieName: string) => string | null;
