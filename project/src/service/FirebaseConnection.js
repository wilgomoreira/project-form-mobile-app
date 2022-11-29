import firebase from "firebase/app";
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyA7hmt6t3BFqzhpDWf6bSNtGPsoGsQXuAM",
  authDomain: "form-restaurant.firebaseapp.com",
  databaseURL: "https://form-restaurant-default-rtdb.firebaseio.com",
  projectId: "form-restaurant",
  storageBucket: "form-restaurant.appspot.com",
  messagingSenderId: "351926179422",
  appId: "1:351926179422:web:2593ab960d438fb380c6cf"
};
  
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;