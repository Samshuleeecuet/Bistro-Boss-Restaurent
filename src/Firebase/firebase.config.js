// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA78G3vzOwL9ZPIWUKqSruiAURrQOmB4Ds" ,
  authDomain: "bistro-boss-f0123.firebaseapp.com",
  projectId: "bistro-boss-f0123",
  storageBucket: "bistro-boss-f0123.appspot.com",
  messagingSenderId: "989912520706",
  appId: "1:989912520706:web:db1fc935ce3176f723ef1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;