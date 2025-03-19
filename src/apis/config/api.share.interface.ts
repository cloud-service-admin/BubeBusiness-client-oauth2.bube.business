import { IResApi } from '@libs/api/apiResponse.lib.interface';
import { AxiosResponse, Method } from 'axios';

export const method: { [key: string]: Method } = {
  post: 'post',
  get: 'get',
  delete: 'delete',
  head: 'head',
  options: 'options',
  put: 'put',
  patch: 'patch',
  purge: 'purge',
  link: 'link',
  unlink: 'unlink',
  Post: 'POST',
  Get: 'GET',
  Delete: 'DELETE',
  Head: 'HEAD',
  Options: 'OPTIONS',
  Put: 'PUT',
  Patch: 'PATCH',
  Purge: 'PURGE',
  Link: 'LINK',
  Unlink: 'UNLINK',
};

export type IResAxios<T> = Promise<AxiosResponse<IResApi<T>>>;
