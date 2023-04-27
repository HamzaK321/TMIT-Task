 
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
    const auth = getAuth();
    const firestore = getFirestore(app);
    
    export { auth, firestore,app };
    export default firestore;