/**
 * Handles the given error.
 *
 * @param error - The error to be handled.
 */

import envConfig from '@configs/env/envConfig.config';
import { IResApiError } from '../handleApiResponse/apiResponse.interface';
import handleMessage from '../handleMessage/handleMessage';

const APP_MODE = envConfig.VITE_APP_MODE;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleError: (error: any) => IResApiError = (error) => {
  try {
    if (APP_MODE === 'development' || APP_MODE === 'test') {
      console.log(`message: ${error.message}`);
    }

    if (error.message) {
      handleMessage.error(error.message);
    }
  } catch (error) {
    console.log(error);
  }

  return {
    status: 'error',
    message: error.message || 'Error Occurred',
  };
};

export default handleError;
