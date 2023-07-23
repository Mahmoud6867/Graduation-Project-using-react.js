// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth , GoogleAuthProvider, signInWithPopup} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGzw3oUcNcStq3-kXArQL_DsALBjBcUU0",
  authDomain: "trivago-215f0.firebaseapp.com",
  projectId: "trivago-215f0",
  storageBucket: "trivago-215f0.appspot.com",
  messagingSenderId: "286442717903",
  appId: "1:286442717903:web:3c894c9a24d9361167adba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db =getFirestore(app)

export const auth = getAuth(app);

const provider = new GoogleAuthProvider();


export const signInWithGoogle = ()=>{
  signInWithPopup(auth,provider).then((result)=>{
    const name = result.user.displayName;
    const photo = result.user.photoURL;

    
    localStorage.setItem("name", name);
    localStorage.setItem("photo", photo);

    window.location.reload(false);
    
    
    
  }).catch((error)=>{
    console.log(error);
  })
}
