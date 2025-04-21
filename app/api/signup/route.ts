/*import { SignUpFormData } from '@/backend/types/form.types'
import { signup } from  '@/lib/actions/auth.actions'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()
    const params = {
      fullName: formData.get('fullName') as string,
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      profilePicture: formData.get('profilePicture') as Blob | undefined,
      resume: formData.get('resume') as Blob | undefined,
    }
    const result = await signup(params as SignUpFormData)
    return NextResponse.json(result, { status: result.success ? 200 : 400 })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 })
  }
}*/