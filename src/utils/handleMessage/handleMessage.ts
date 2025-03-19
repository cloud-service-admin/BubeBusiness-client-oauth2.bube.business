import envConfig from '@configs/env/envConfig.config';
import { messageAntdAction } from '@features/app_system/messageAntd.slice';
import { store } from '@store/store';

const APP_MODE = envConfig.VITE_APP_MODE;

const featureInDevelopment = () => {
  store.dispatch(
    messageAntdAction.open({
      type: 'info',
      content: 'Tính năng đang phát triển',
    }),
  );
};
const success = (message?: string) => {
  store.dispatch(
    messageAntdAction.open({
      type: 'success',
      content: message,
    }),
  );
};

const info = (message?: string) => {
  store.dispatch(
    messageAntdAction.open({
      type: 'info',
      content: message,
    }),
  );
};

const error = (message?: string) => {
  store.dispatch(
    messageAntdAction.open({
      type: 'error',
      content: message,
    }),
  );
};

const errorApp = (error: Error | unknown) => {
  // Handle the error here
  if (error instanceof Error) {
    try {
      if (APP_MODE === 'development' || APP_MODE === 'test') {
        console.log(`message: ${error.message}`);
        console.log(`error: ${error}`);
      }
      console.log(error.message);
      store.dispatch(
        messageAntdAction.open({
          type: 'error',
          content: error.message || 'Error App',
        }),
      );
    } catch (error) {
      console.log(error);
    }
  }
};

const handleMessage = { featureInDevelopment, success, info, error, errorApp };

export default handleMessage;
