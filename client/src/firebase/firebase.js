// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyCaCRp1OQW6CJGeZcczQjKFdB8KK30P_UQ",
  authDomain: "smartcrystalfacility.firebaseapp.com",
  projectId: "smartcrystalfacility",
  storageBucket: "smartcrystalfacility.appspot.com",
  messagingSenderId: "1095948828197",
  appId: "1:1095948828197:web:9b915bf28dc388788549cc",
  measurementId: "G-7RBHR1FLTG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app)