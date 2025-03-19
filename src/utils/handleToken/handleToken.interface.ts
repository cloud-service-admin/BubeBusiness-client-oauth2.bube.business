import { IResApi } from '../handleApiResponse/apiResponse.interface';

export type ISetRefreshTokenToCookie = (refreshToken: string) => IResApi<never>;

export type IGetTokenFromStore = () => IResApi<{
  accessToken: string;
  refreshToken: string;
}>;

export type IGetRefreshTokenFromCookie = () => IResApi<string>;

export type IGetEmployeeTokenFromStore = () => IResApi<string>;
