'use server';

import { adminAuth, adminDb } from '@/backend/firebase/admin';
import { SignupParams, SignInParams } from '@/backend/types/form.types';
import validator from 'validator';

// Signup action
export async function signup(params: SignupParams) {
  const { uid, email, fullName } = params;

  // Validate inputs
  if (!uid || !email || !fullName) {
    return { success: false, message: 'UID, email, and full name are required.' };
  }
  if (!validator.isEmail(email)) {
    return { success: false, message: 'Invalid email format.' };
  }
  if (!/^[a-zA-Z0-9_-]{28}$/.test(uid)) {
    return { success: false, message: 'Invalid UID format.' };
  }

  try {
    const userRef = adminDb.collection('users').doc(uid);
    const userRecord = await userRef.get();

    if (userRecord.exists) {
      return { success: false, message: 'User already exists.' };
    }

    await userRef.set({
      fullName,
      email,
      createdAt: new Date().toISOString(),
    });

    return { success: true, message: 'User created successfully.' };
  } catch (error: any) {
    console.error('Error creating user:', error);
    if (error.code === 'firestore/permission-denied') {
      return { success: false, message: 'Permission denied when accessing database.' };
    }
    return { success: false, message: `Failed to create user: ${error.message}` };
  }
}

// SignIn action
export async function signIn(params: SignInParams) {
  const { email, idToken } = params;

  // Validate inputs
  if (!email || !idToken) {
    return { success: false, message: 'Email and ID token are required.' };
  }

  try {
    // Verify ID token
    const decodedToken = await adminAuth.verifyIdToken(idToken);
    if (decodedToken.email !== email) {
      return { success: false, message: 'Email does not match ID token.' };
    }

    // Check if user exists in Firestore
    const userRef = adminDb.collection('users').doc(decodedToken.uid);
    const userDoc = await userRef.get();

    if (!userDoc.exists) {
      return { success: false, message: 'User not found in database.' };
    }

    return { success: true, message: 'pass' };
  } catch (error: any) {
    console.error('Error signing in:', error);
    switch (error.code) {
      case 'auth/invalid-id-token':
        return { success: false, message: 'Invalid ID token.' };
      case 'auth/user-not-found':
        return { success: false, message: 'No user found with this email.' };
      case 'auth/invalid-email':
        return { success: false, message: 'Invalid email format.' };
      default:
        return { success: false, message: `Failed to sign in: ${error.message}` };
    }
  }
}