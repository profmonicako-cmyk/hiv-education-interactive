import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";

const firebaseConfig = {
  projectId: "database-3dd5b",
  appId: "1:924885924242:web:d12a5d45dcdb1be414a94b",
  storageBucket: "database-3dd5b.firebasestorage.app",
  apiKey: "AIzaSyBSZk7BNo7Y6e8DMBJNTbyCrrfPDHKzNxM",
  authDomain: "database-3dd5b.firebaseapp.com",
  messagingSenderId: "924885924242",
  measurementId: "G-HLNCMN13QK"
};

window.hivEducationFirebase = {
  app: initializeApp(firebaseConfig),
  projectId: firebaseConfig.projectId
};
