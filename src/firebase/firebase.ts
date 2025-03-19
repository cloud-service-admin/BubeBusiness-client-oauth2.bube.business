/* eslint-disable @typescript-eslint/no-explicit-any */
// Import the functions you need from the SDKs you need
import envConfig from '@configs/env/envConfig.config';
// import firebaseConfig from '@configs/firebase/firebase.config';
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, MessagePayload } from 'firebase/messaging';
import { IFirebaseAction } from './firebase.interface';
import firebaseConfig from '@configs/firebase/firebase.config';
// TODO: Add SDKs for Firebase products that you want to use

const { VITE_FIREBASE_VAPIDKEY } = envConfig;

export type IFirebaseNotification = MessagePayload & {
  notification?: Record<string, any>;
  data: {
    action: IFirebaseAction;
    values: Record<string, any>;
  };
};

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const app = initializeApp(firebaseConfig);

// just run analytics if window is not undefined
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

const messaging = getMessaging(app);

// Hàm lấy token
const getFirebaseToken: () => Promise<string | undefined> = async () => {
  try {
    const token = await getToken(messaging, {
      vapidKey: VITE_FIREBASE_VAPIDKEY,
    });
    return token;
  } catch (error) {
    console.log(error);
    return;
  }
};

export { analytics, app, messaging };

const firebase_feature = {
  getFirebaseToken,
  messaging,
};

export default firebase_feature;
