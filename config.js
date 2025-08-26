// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBwFhfy2FKjGH-dcOfRviAnzvJdDPGyc3k",
    authDomain: "green-hanga-ltd.firebaseapp.com",
    projectId: "green-hanga-ltd",
    storageBucket: "green-hanga-ltd.firebasestorage.app",
    messagingSenderId: "1083882165505",
    appId: "1:1083882165505:web:35aa186db8c8e2c08ef700",
    measurementId: "G-F511WK8NVN"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  console.log(app)
  console.log(analytics)