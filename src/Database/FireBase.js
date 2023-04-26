// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAZ9VMK-W-X1BAP6ZbR6oS7ph43P2rQqUY",
//   authDomain: "payment-app-tm.firebaseapp.com",
//   projectId: "payment-app-tm",
//   storageBucket: "payment-app-tm.appspot.com",
//   messagingSenderId: "985677653890",
//   appId: "1:985677653890:web:c1b878bbe4016b4d79119b",
//   measurementId: "G-65D1EMG84T"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
import {getAuth} from 'firebase/auth';
import {initializeApp} from "firebase/app"
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAz-lxSRKDzV5OcJdJwPr6JahAbKn7onm0",
    authDomain: "tm-user-payment.firebaseapp.com",
    projectId: "tm-user-payment",
    storageBucket: "tm-user-payment.appspot.com",
    messagingSenderId: "601196192183",
    appId: "1:601196192183:web:0cefee5faf41a48ef48832"
  };

  const app = initializeApp(firebaseConfig);

  export const auth  = getAuth();

  export default getFirestore(app);