// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAi8U-G0RVBdGdsrnoZebQzwaXluq-RvM",
  authDomain: "timesnap-710e1.firebaseapp.com",
  databaseURL: "https://timesnap-710e1-default-rtdb.firebaseio.com",
  projectId: "timesnap-710e1",
  storageBucket: "timesnap-710e1.appspot.com",
  messagingSenderId: "833669342197",
  appId: "1:833669342197:web:68707287b651705e6576bc",
  measurementId: "G-1FES4MFRMH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const storage = getStorage(app);

export { database, storage };
