import { getFirestore } from 'firebase-admin/firestore';
import { getAuth } from 'firebase-admin/auth';
import pkg from 'firebase-admin';

try {
  console.log('initializing firebase admin');
  pkg.initializeApp({
    credential: pkg.credential.cert({
      projectId: process.env.FB_PROJECT_ID,
      clientEmail: process.env.FB_CLIENT_EMAIL,
      privateKey: process.env.FB_PRIVATE_KEY
    })
  });
} catch (err: any) {
  if (!/already exists/u.test(err.message)) {
    console.error('Firebase admin initialization error', err.stack);
  }
}

export const adminDB = getFirestore();
export const adminAuth = getAuth();
