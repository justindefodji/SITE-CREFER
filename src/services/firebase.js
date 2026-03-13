import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'AIzaSyBEsxtnCTGWm8AqhDCrE9isyW1PS0DSpIE',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'sitecrefer.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'sitecrefer',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'sitecrefer.firebasestorage.app',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '457114712643',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:457114712643:web:7894ea16950ccd6f4b72f6',
};

let app, auth, db, storage;

try {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
  storage = getStorage(app);
  console.log('Firebase initialized successfully');
} catch (error) {
  console.error('Firebase initialization error:', error);
}

export { app, auth, db, storage };
