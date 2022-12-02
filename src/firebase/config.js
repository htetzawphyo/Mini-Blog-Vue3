  // =============  VERSION 8 + ============

// import firebase from 'firebase/app';
// import 'firebase/firestore';

// const firebaseConfig = {
//     apiKey: "AIzaSyDbZz84Z0EE8g2bpWBLKVclsyMQDQxHzOk",
//     authDomain: "vue-blog-system-68a45.firebaseapp.com",
//     projectId: "vue-blog-system-68a45",
//     storageBucket: "vue-blog-system-68a45.appspot.com",
//     messagingSenderId: "302821740385",
//     appId: "1:302821740385:web:8d8946f98179aeb0c03f20"
//   };

//   // init firebase
// firebase.initializeApp(firebaseConfig);

// // database setup
// let db = firebase.firestore();

// export {db};


  // =================== VERSION 9 + ===============
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyDbZz84Z0EE8g2bpWBLKVclsyMQDQxHzOk",
    authDomain: "vue-blog-system-68a45.firebaseapp.com",
    projectId: "vue-blog-system-68a45",
    storageBucket: "vue-blog-system-68a45.appspot.com",
    messagingSenderId: "302821740385",
    appId: "1:302821740385:web:8d8946f98179aeb0c03f20"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);

export {db}