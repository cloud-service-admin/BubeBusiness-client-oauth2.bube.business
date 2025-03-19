import { _Error, _Success } from './handleResApi.lib.interface';

const success: _Success = (values, message) => {
  return {
    status: 'success',
    values,
    message,
  };
};

const error: _Error = (values, errorCode, message) => {
  return {
    status: 'error',
    errorCode,
    message,
    values,
  };
};

const handleResApi = {
  success,
  error,
};

export default handleResApi;
