'use server';

import { adminDb } from '@/backend/firebase/admin';
import { SignupParams } from '@/backend/types/form.types';
import validator from 'validator';

export async function signup(params: SignupParams) {
  const { uid, email, fullName } = params;

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
    const userRef = adminDb.collection('interviewbuddy_users').doc(uid);
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