import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import {
  doc,
  setDoc,
  getFirestore,
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBXhX5inofoQXlHjltM7ZweDnbhDWpO38A",
    authDomain: "altproject-2166c.firebaseapp.com",
    projectId: "altproject-2166c",
    storageBucket: "altproject-2166c.appspot.com",
    messagingSenderId: "54512690477",
    appId: "1:54512690477:web:57d1594de3ab1b3e381fa4"
  };
  const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const formSignUp = document.getElementById("form-signup");
formSignUp.addEventListener("submit", async (e) => {
  e.preventDefault();

  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  await createUserWithEmailAndPassword(auth, email, password);

  updateProfile(auth.currentUser, {
    displayName: firstName + " " + lastName,
  });

  await setDoc(doc(db, "users", auth.currentUser.uid), {
    firstName,
    lastName,
    email,
    password,
  });

  alert("Register Successfully!");
  window.location.href = "./index.html";
});
