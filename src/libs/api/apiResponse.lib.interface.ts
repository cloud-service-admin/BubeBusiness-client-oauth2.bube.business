export type IResApiSuccess<T> = {
  status: 'success';
  message: string;
  values: T;
};

export type IResApiError = {
  status: 'error';
  errorCode?: number | string | null;
  message?: string;
};

export type IHandleResApiSuccess = <T>(data: {
  message?: string;
  values?: T;
  notification?: boolean;
}) => IResApiSuccess<T>;

export type IResApi<T> = IResApiSuccess<T> | IResApiError;

export type I_resApi_success = <T>(data: {
  message?: string;
  values?: T;
  notification?: boolean;
}) => IResApiSuccess<T>;

export type I_resApi_error = (data: {
  errorCode?: number | string | null;
  message?: string;
  dispatch?: boolean;
}) => IResApiError;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type I_resApi_errorApp = (error: any) => IResApiError;
