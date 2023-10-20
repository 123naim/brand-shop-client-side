// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmFmt506wBnZIZyJoelBbNzpsJ75l4y9Q",
  authDomain: "brand-shop-client-side.firebaseapp.com",
  projectId: "brand-shop-client-side",
  storageBucket: "brand-shop-client-side.appspot.com",
  messagingSenderId: "437068630361",
  appId: "1:437068630361:web:cfa117b082df1dbf5f6448"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;