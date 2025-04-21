'use server'

import { initializeApp, applicationDefault } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'

const app = initializeApp({
  credential: applicationDefault(),
})

const db = getFirestore(app)

interface SignupParams {
  uid: string
  email: string
  name: string
}

export async function signup(params: SignupParams) {
  const { uid, email, name } = params

  if (!uid || !email || !name) {
    return {
      success: false,
      message: 'UID, email, and name are required.'
    }
  }
  if (!email.includes('@')) {
    return {
      success: false,
      message: 'Invalid email format.'
    }
  }

  try {
    const userRecord = await db.collection('users').doc(uid).get()

    if (userRecord.exists) {
      return {
        success: false,
        message: 'User already exists.'
      }
    }

    await db.collection('users').doc(uid).set({
      name,
      email,
      createdAt: new Date().toISOString()
    })

    return {
      success: true,
      message: 'User created successfully.'
    }
  } catch (error: any) {
    console.error('Error creating a user:', error)

    if (error.code === 'firestore/permission-denied') {
      return {
        success: false,
        message: 'Permission denied when accessing database.'
      }
    }

    return {
      success: false,
      message: 'Failed to create an account.'
    }
  }
}
