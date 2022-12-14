import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
     apiKey: "AIzaSyCk3HUlwCCia_LHZM5TzeR2Jlut37Sm5kY",
     authDomain: "icam-distribution.firebaseapp.com",
     projectId: "icam-distribution",
     storageBucket: "icam-distribution.appspot.com",
     messagingSenderId: "694480752705",
     appId: "1:694480752705:web:888d7940dc271189df36c0"
     // apiKey: process.env.REACT_APP_FIREBASE_APP_KEY,
     // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
     // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
     // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
     // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
     // appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;