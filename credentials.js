import { initializeApp } from "firebase/app";
import {  initializeAuth, getReactNativePersistence } from 'firebase/auth'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { API_KEY, AUTH_DOMAIN, PROYECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID } from '@env'





const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROYECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID
};
 console.log(firebaseConfig.apiKey)




const appFirebase = initializeApp(firebaseConfig);
const auth = initializeAuth(appFirebase, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});


export {appFirebase, auth}
