import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
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

document.addEventListener("DOMContentLoaded", () => {
  const handleSignOut = () => {
    signOut(auth);
    localStorage.removeItem("displayName");
  };
  onAuthStateChanged(auth, (user) => {
    const inforElement = document.getElementById("information");
    const displayName = localStorage.getItem("displayName");
    if (user) {
      const displayName = user.displayName || "User";
      inforElement.innerHTML = `
                <div>
                    <span  class='hello'>Hello, </span>
                    <span id="displayName">${displayName}</span>
                    <button                   class="Sign_Out"
                    id="signOut"
                    id="buttonSignOut"
                    class="btn my-2 my-sm-0 nav_search-btn" id='buttonSignOut'>Sign out</button>
                </div>
            `;
      const buttonSignOut = document.getElementById("buttonSignOut");
      buttonSignOut.addEventListener("click", handleSignOut);
    } else if (displayName) {
      inforElement.innerHTML = `
                <div>
                    <span class='hello'>Hello, </span>
                    <span id="displayName">${displayName}</span>
                    <button  id='buttonSignOut'>Sign out</button>
                </div>
            `;
      const buttonSignOut = document.getElementById("buttonSignOut");
      buttonSignOut.addEventListener("click", handleSignOut);
    } else {
      inforElement.innerHTML = `
            <div class='signin'>
                <a href="./signInAndSignUp.html">Sign in</a>
            </div>
        `;
    }
  });
});