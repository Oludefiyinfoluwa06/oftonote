import { initializeApp } from "firebase/app";
import { initializeAuth, getAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyBaBhKDCfO9pG-Mkv8O1FSxsBuWRZ_XiTg",
  authDomain: "oftonote.firebaseapp.com",
  projectId: "oftonote",
  storageBucket: "oftonote.appspot.com",
  messagingSenderId: "705561896721",
  appId: "1:705561896721:web:5d68c018933cd9856b8eb0",
  measurementId: "G-DZ4M4LPBV5"
};

export const app = initializeApp(firebaseConfig);

export const authInit = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const auth = getAuth();