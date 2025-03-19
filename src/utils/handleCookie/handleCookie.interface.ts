import { IResApi } from '../handleApiResponse/apiResponse.interface';

export type ISetCookie = (cookieName: string, value: string) => IResApi<never>;

export type IGetCookie = (cookieName: string) => IResApi<string>;

export type _IRemoveCookie = (cookieName: string) => IResApi<never>;
