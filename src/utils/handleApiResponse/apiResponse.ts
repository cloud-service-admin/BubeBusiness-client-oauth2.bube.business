import envConfig from '@configs/env/envConfig.config';
import { messageAntdAction } from '@features/app_system/messageAntd.slice';
import { store } from '@store/store';
import {
  I_resApi_error,
  I_resApi_errorApp,
  I_resApi_success,
} from './apiResponse.interface';

const APP_MODE = envConfig.VITE_APP_MODE;

const success: I_resApi_success = (values, message, notification) => {
  if (notification) {
    store.dispatch(
      messageAntdAction.open({
        type: 'success',
        content: message,
      }),
    );
  }

  return {
    status: 'success',
    message: message || '',
    values: values || ({} as never),
  };
};

const error: I_resApi_error = (message?: string, errorCode?: number) => {
  if (message) {
    store.dispatch(
      messageAntdAction.open({
        type: 'error',
        content: message,
      }),
    );
  }

  return {
    status: 'error',
    errorCode,
    message: message || 'error',
  };
};

const errorApp: I_resApi_errorApp = (error) => {
  if (APP_MODE === 'development' || APP_MODE === 'test') {
    console.log(`message: ${error.message}`);
    console.log(`error: ${error}`);

    store.dispatch(
      messageAntdAction.open({
        type: 'error',
        content: error.message || 'Error App',
      }),
    );
  } else {
    store.dispatch(
      messageAntdAction.open({
        type: 'error',
        content: 'Error App',
      }),
    );
  }

  return {
    status: 'error',
    message: 'error app',
  };
};

const resApi = {
  success,
  error,
  errorApp,
};

export default resApi;
