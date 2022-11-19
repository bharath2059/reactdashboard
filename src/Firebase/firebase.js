import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  updateProfile,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

// Firebase app details
const firebaseconfig = {
  apiKey: "AIzaSyB5n24y8URx3AeHPNJESYVkPGNciHQWmaA",
  authDomain: "reactdashboard-6625f.firebaseapp.com",
  projectId: "reactdashboard-6625f",
  storageBucket: "reactdashboard-6625f.appspot.com",
  messagingSenderId: "748816640735",
  appId: "1:748816640735:web:c3cc411d4473e544e4576a",
  measurementId: "G-LEB6ZMXPF4",
};

// intializing firebase
const app = initializeApp(firebaseconfig);
//intializing auth
const auth = getAuth(app);
//intializing database
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

// function for login with email and password
const logInWithEmailAndPassword = async (email, password) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

//function for registration with email and password
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await updateProfile(user, {
      displayName: name,
    });
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
    alert("your account is created");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
//function to reset the password
const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
// Logout function
const logout = () => {
  signOut(auth);
};
//exporting all the functions.
export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};
