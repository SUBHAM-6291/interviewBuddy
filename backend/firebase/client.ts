import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getStorage, FirebaseStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBMkfw5upN7RFlB3czcElDNL3p5CYM4NnY',
  authDomain: 'interviewbuddy-82f78.firebaseapp.com',
  projectId: 'interviewbuddy-82f78',
  storageBucket: 'interviewbuddy-82f78.firebasestorage.app',
  messagingSenderId: '1019638124515',
  appId: '1:1019638124515:web:165676ad972961af1f1ad6',
};

let app: FirebaseApp | null = null;
let auth: Auth | null = null;
let db: Firestore | null = null;
let storage: FirebaseStorage | null = null;

if (typeof window !== 'undefined') {
  try {
    app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
    auth = getAuth(app);
    db = getFirestore(app);
    storage = getStorage(app);
  } catch (error) {
    console.error('Failed to initialize Firebase:', error);
    throw error;
  }
}

export { auth, db, storage };