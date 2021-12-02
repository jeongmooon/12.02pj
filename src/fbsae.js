import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "react-9c695.firebaseapp.com",
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: "react-9c695.appspot.com",
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: "G-7WDDNWJ9RS"
};

// export default를 사용하면 하나의 모듈만 넘겨준다.
//export default firebase.initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);

export const authService = firebase.auth();
export const storageService = firebase.storage();
export const dbService = firebase.firestore();
export const firebaseInstance = firebase;