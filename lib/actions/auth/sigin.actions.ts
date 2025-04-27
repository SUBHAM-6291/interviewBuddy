'use server';

import { adminAuth, adminDb } from '@/backend/firebase/admin';
import { SignInParams } from '@/backend/types/form.types';

export async function signIn(params: SignInParams) {
  const { email, idToken } = params;

  if (!email || !idToken) {
    return { success: false, message: 'Email and ID token are required.' };
  }

  try {
    const decodedToken = await adminAuth.verifyIdToken(idToken);
    if (decodedToken.email !== email) {
      return { success: false, message: 'Email does not match ID token.' };
    }

    const userRef = adminDb.collection('interviewbuddy_users').doc(decodedToken.uid);
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