/**
 * Handles the given error.
 *
 * @param error - The error to be handled.
 */

import envConfig from '@configs/env/envConfig.config';
import handleMessage from './handleMessage.lib';

const APP_MODE = envConfig.VITE_APP_MODE;

function handleError(error: Error | unknown): void {
  // Handle the error here
  if (error instanceof Error) {
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
  }
}

export default handleError;
