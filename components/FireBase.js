import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCDuk2nbIdG95i1hvELkBHaZ9EYpwZqCnw",
    authDomain: "quidioturistico.firebaseapp.com",
    databaseURL: "https://quidioturistico.firebaseio.com",
    projectId: "quidioturistico",
    storageBucket: "quidioturistico.appspot.com",
    messagingSenderId: "630899678718",
    appId: "1:630899678718:web:d9e90fe219494098de34af",
    measurementId: "G-34655FVGV1"
};

firebase.initializeApp(firebaseConfig);

// firebase.firestore().settings(settings);

export default firebase;
