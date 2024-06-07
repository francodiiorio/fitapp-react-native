import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBrTxppbgyzllmmywnQxpxr4UGjCh_kk_A",
  authDomain: "fitapp-react-native.firebaseapp.com",
  projectId: "fitapp-react-native",
  storageBucket: "fitapp-react-native.appspot.com",
  messagingSenderId: "1026664357773",
  appId: "1:1026664357773:web:69d3bfd51ca462d0ade7c4"
};


const appFirebase = initializeApp(firebaseConfig);

export default appFirebase