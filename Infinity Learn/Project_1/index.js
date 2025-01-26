import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

// Initialize Firebase Authentication
const auth = getAuth();

// Get elements
const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      // Redirect to home page after successful login
      window.location.href = "home.html";
    })
    .catch((error) => {
      alert("Login Failed: " + error.message);
    });
});
