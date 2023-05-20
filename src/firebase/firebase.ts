import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyAeYMqq1BTD6qUUgVw14m5m9ZaIcaM01kA',
    authDomain: 'devgetaway.firebaseapp.com',
    projectId: 'devgetaway',
    storageBucket: 'devgetaway.appspot.com',
    messagingSenderId: '826106578110',
    appId: '1:826106578110:web:c8337055c170deddd1caef',
    measurementId: 'G-L1KY7LHL2L',
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export default firebaseApp;
