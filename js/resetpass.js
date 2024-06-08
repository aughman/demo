import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {
  getAuth,
  sendPasswordResetEmail,
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
let formForgetPass = document.getElementById('forget_password')
formForgetPass.addEventListener("submit", function(event){
    let email = document.getElementById("email").value;

    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!  
        alert("Password reset email has sent, please check your email inbox that you have entered!!")
        window.location.href = '/signInAndSignUp.html'
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
})

