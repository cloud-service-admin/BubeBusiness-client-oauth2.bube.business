import envConfig from '@configs/env/envConfig.config';

const APP_MODE = envConfig.VITE_APP_MODE;

const {
  VITE_FIREBASE_APIKEY,
  VITE_FIREBASE_AUTHDOMAIN,
  VITE_FIREBASE_PROJECTID,
  VITE_FIREBASE_STORAGEBUCKET,
  VITE_FIREBASE_MESSAGINGSENDERID,
  VITE_FIREBASE_APPID,
  VITE_FIREBASE_MEASUREMENTID,
} = envConfig;

const firebaseConfig =
  APP_MODE === 'development'
    ? {
        apiKey: '123',
        authDomain: '123',
        projectId: '123',
        storageBucket: '123',
        messagingSenderId: '123',
        appId: '123',
        measurementId: '123',
      }
    : {
        apiKey: VITE_FIREBASE_APIKEY,
        authDomain: VITE_FIREBASE_AUTHDOMAIN,
        projectId: VITE_FIREBASE_PROJECTID,
        storageBucket: VITE_FIREBASE_STORAGEBUCKET,
        messagingSenderId: VITE_FIREBASE_MESSAGINGSENDERID,
        appId: VITE_FIREBASE_APPID,
        measurementId: VITE_FIREBASE_MEASUREMENTID,
      };

export default firebaseConfig;
