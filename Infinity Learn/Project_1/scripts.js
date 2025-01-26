// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAN3foHijgQlcvRn3iNNX9J_r_A3lGi5go",
  authDomain: "onechange25.firebaseapp.com",
  projectId: "onechange25",
  storageBucket: "onechange25.firebasestorage.app",
  messagingSenderId: "960575610017",
  appId: "1:960575610017:web:a464203316b13012e8e4e0",
  measurementId: "G-SJMX03R1G7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Login form handler
const loginForm = document.getElementById("login-form");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        window.location.href = "home.html"; // Redirect to the home page after successful login
      })
      .catch((error) => {
        alert("Login failed: " + error.message);
      });
  });
}

// Register form handler
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Registration successful!");
        window.location.href = "home.html"; // Redirect to the home page after successful registration
      })
      .catch((error) => {
        alert("Registration failed: " + error.message);
      });
  });
}
