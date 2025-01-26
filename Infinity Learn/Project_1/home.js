// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

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

// Show user's email on the home page
const userName = document.getElementById("user-name");
const logoutButton = document.getElementById("logout-btn");

auth.onAuthStateChanged((user) => {
  if (user) {
    userName.textContent = `Welcome, ${user.email}`; // Show the logged-in user's email
  } else {
    window.location.href = "index.html"; // If no user is logged in, redirect to login page
  }
});

// Logout functionality
logoutButton.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      window.location.href = "index.html"; // Redirect to login page after logout
    })
    .catch((error) => {
      console.error("Error during logout: ", error.message);
      alert("Logout failed. Please try again.");
    });
});
