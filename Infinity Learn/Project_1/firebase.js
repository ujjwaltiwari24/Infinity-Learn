import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

// Your web app's Firebase configuration
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
