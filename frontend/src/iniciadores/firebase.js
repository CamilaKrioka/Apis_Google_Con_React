import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDDRJrShC7uH4IdgjNJXNTSVdz0y3s8Xe8",
  authDomain: "portfolio-ed9c4.firebaseapp.com",
  databaseURL: "https://portfolio-ed9c4.firebaseio.com",
  projectId: "portfolio-ed9c4",
  storageBucket: "portfolio-ed9c4.appspot.com",
  messagingSenderId: "243402962460",
  appId: "1:243402962460:web:fda8d5e98dd8ff93d211d9",
  measurementId: "G-N3DZ4K4LEY",
};

firebase.initializeApp(firebaseConfig);
export default firebase;
