// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyDSqgOdoAoOjrOMIaj_pUuPPKSNCBYlhnQ",
  authDomain: "backendapp-e7687.firebaseapp.com",
  projectId: "backendapp-e7687",
  storageBucket: "backendapp-e7687.appspot.com",
  messagingSenderId: "816345679495",
  appId: "1:816345679495:web:028109be772a9238419a22",
  measurementId: "G-V06R8ZM8LN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
