import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBk7HwvD1a9_-3U0198MsX9tJ7uD1yyV1E",
    authDomain: "nuxtjs-cbfa9.firebaseapp.com",
    databaseURL: "https://nuxtjs-cbfa9.firebaseio.com",
    projectId: "nuxtjs-cbfa9",
    storageBucket: "nuxtjs-cbfa9.appspot.com",
    messagingSenderId: "39000934016",
    appId: "1:39000934016:web:7b26bfd88c067747928865",
    measurementId: "G-KYWGWC76QP"
  };

if(!firebase.apps.length)
{
    firebase.initializeApp(firebaseConfig)
}


export default firebase 
