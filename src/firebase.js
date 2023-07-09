​​import {
    ​​  GoogleAuthProvider,
    ​​  getAuth,
    ​​  signInWithPopup,
    ​​  signInWithEmailAndPassword,
    ​​  createUserWithEmailAndPassword,
    ​​  sendPasswordResetEmail,
    ​​  signOut,
    ​​} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCtGsA1ZsO3Ty9ARLgvmJa1hJLDeRPbLG8",
    authDomain: "libraryproject-142cb.firebaseapp.com",
    projectId: "libraryproject-142cb",
    storageBucket: "libraryproject-142cb.appspot.com",
    messagingSenderId: "581618867603",
    appId: "1:581618867603:web:ffe2813c99b2821f47dc66",
    measurementId: "G-ME2K3BL5ZC"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export default app;