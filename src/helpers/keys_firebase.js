import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCQjpTHoJ8FZ39gkV9gWPCnzEsDwljqUE",
  authDomain: "hiry-ai-bb47a.firebaseapp.com",
  projectId: "hiry-ai-bb47a",
  storageBucket: "hiry-ai-bb47a.appspot.com",
  messagingSenderId: "332829517606",
  appId: "1:332829517606:web:d9b5b80082d6c6b49503e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
