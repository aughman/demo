import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

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

let formSignIn = document.getElementById("formSign-in");
formSignIn.addEventListener("submit", (e) => {
  e.preventDefault();

  let email = document.getElementById("emailSign-in").value;
  let password = document.getElementById("passwordSign-In").value;

  signInWithEmailAndPassword(auth, email, password);

  localStorage.setItem('displayName', auth.currentUser.displayName)

  alert("Sign In Successfully!");
  window.location.href = "./index.html";
});