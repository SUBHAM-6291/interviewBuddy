'use client';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { SignInInput,  } from '@/backend/types/form.types';
import { signInSchema } from '@/backend/zod/form.zod';
import { useState, useCallback, useEffect } from 'react';
import Logo from '@/components/authform/logo';
import { toast } from 'sonner';
import { auth } from '@/backend/firebase/client';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { signIn } from '@/lib/actions/auth.actions';

const SignInForm: React.FC = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [isFirebaseReady, setIsFirebaseReady] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInInput>({
    resolver: zodResolver(signInSchema),
    defaultValues: { email: '', password: '' },
  });

  useEffect(() => {
    if (auth) {
      setIsFirebaseReady(true);
    } else {
      setFormError('Firebase is not initialized. Please try again later.');
    }
  }, []);

  const onSubmit = useCallback(
    async (data: SignInInput) => {
      if (isSubmitting || !auth) return;
      setIsSubmitting(true);
      setFormError(null);

      try {
        const authResult = await signInWithEmailAndPassword(auth, data.email, data.password);
        const idToken = await authResult.user.getIdToken();

        const result = await signIn({ email: data.email, idToken });

        if (!result.success) {
          throw new Error(result.message);
        }

        toast.success('Signed in successfully!');
        router.push('/dashboard');
      } catch (error: any) {
        let errorMessage = 'Sign-in failed. Please try again.';
        if (error.code) {
          switch (error.code) {
            case 'auth/invalid-email':
              errorMessage = 'Invalid email address.';
              break;
            case 'auth/user-not-found':
              errorMessage = 'No account found with this email.';
              break;
            case 'auth/wrong-password':
              errorMessage = 'Incorrect password.';
              break;
            case 'auth/too-many-requests':
              errorMessage = 'Too many attempts. Please try again later.';
              break;
            case 'auth/user-disabled':
              errorMessage = 'This account has been disabled.';
              break;
            case 'auth/invalid-credential':
              errorMessage = 'Invalid credentials provided.';
              break;
            case 'auth/operation-not-allowed':
              errorMessage = 'Email/password accounts are not enabled.';
              break;
            default:
              errorMessage = error.message || errorMessage;
          }
        } else {
          errorMessage = error.message || errorMessage;
        }
        setFormError(errorMessage);
        toast.error(errorMessage);
      } finally {
        setIsSubmitting(false);
      }
    },
    [isSubmitting, router]
  );

  const onTogglePassword = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  if (!isFirebaseReady) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black p-4 sm:p-6">
        <div className="text-white text-center">
          {formError ? <p className="text-red-400">{formError}</p> : <p>Loading...</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black p-4 sm:p-6">
      <div className="w-full max-w-md bg-gradient-to-br from-gray-950/90 to-gray-900/90 border border-gray-800/50 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl">
        <div className="flex-1 flex items-center justify-center py-10 px-4 sm:px-12">
          <div className="w-full max-w-sm transition-all duration-700 ease-out opacity-100 translate-y-0">
            <div className="flex flex-col items-center relative">
              <Logo />
              <h2
                id="sign-in-heading"
                className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2"
              >
                Interview Buddy
              </h2>
              <p className="text-sm text-white/70 text-center max-w-[80%] leading-5">
                Unlock your journey with us
              </p>
            </div>
            {formError && (
              <p className="text-sm text-red-400 text-center mb-4">{formError}</p>
            )}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-6 flex flex-col gap-4"
              role="form"
              aria-labelledby="sign-in-heading"
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-white">
                  Email
                </label>
                <div className="relative">
                  <input
                    id="email"
                    {...register('email')}
                    type="email"
                    placeholder="Enter your email"
                    disabled={isSubmitting}
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className="w-full p-3 pl-10 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-500/30 outline-none transition-all"
                  />
                  <svg
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 stroke-white/60"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5"
                    />
                  </svg>
                </div>
                {errors.email && (
                  <p id="email-error" className="text-xs text-red-400 mt-1">{errors.email.message}</p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="password" className="text-sm font-medium text-white">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    {...register('password')}
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    disabled={isSubmitting}
                    aria-invalid={errors.password ? 'true' : 'false'}
                    aria-describedby={errors.password ? 'password-error' : undefined}
                    className="w-full p-3 pl-10 pr-10 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-500/30 outline-none transition-all"
                  />
                  <svg
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 stroke-white/60"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 11c0-1.1-.9-2-2-2s-2 .9-2 2 2 4 2 4m2-4c0-1.1.9-2 2-2s2 .9 2 2-2 4-2 4m-2 2v2m-6 0h12"
                    />
                  </svg>
                  <button
                    type="button"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white/80"
                    onClick={onTogglePassword}
                    disabled={isSubmitting}
                  >
                    {showPassword ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                        />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p id="password-error" className="text-xs text-red-400 mt-1">{errors.password.message}</p>
                )}
              </div>
              <div className="flex justify-between text-sm text-white/70">
                <Link
                  href="/forgot-password"
                  className="text-teal-500 hover:text-teal-600 underline"
                >
                  Forgot Password?
                </Link>
                <Link
                  href="/sign-up"
                  className="text-teal-500 hover:text-teal-600 underline"
                >
                  New user? Sign Up
                </Link>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 bg-teal-500 rounded-lg text-white text-sm font-medium hover:bg-teal-600 transition-all duration-300 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                    </svg>
                    Processing...
                  </span>
                ) : (
                  'Sign In'
                )}
              </button>
            </form>
          </div>
        </div>
        <div className="h-16 bg-white/5 backdrop-blur-lg flex items-center justify-around border-t border-white/10 shadow-sm"></div>
      </div>
    </div>
  );
};

export default SignInForm;