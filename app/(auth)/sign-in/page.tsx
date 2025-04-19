"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { signInSchema } from "@/backend/zod/form.zod";
import { SignInFormData } from "@/backend/types/form.types";
import { useState } from "react";
import Logo from "@/components/authform/logo";

interface NavButtonProps {
  icon: string;
  route: string;
  label: string;
}

const NavButton: React.FC<NavButtonProps> = ({ icon, route, label }) => {
  const router = useRouter();
  return (
    <div className="relative flex flex-col items-center">
      <button
        onClick={() => router.push(route)}
        className="w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-lg rounded-xl hover:bg-white/20 transition-all duration-300"
        aria-label={`Navigate to ${label}`}
      >
        <svg className="w-5 h-5 stroke-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icon} />
        </svg>
      </button>
      <span className="absolute bottom-[-16px] text-xs text-white/70 truncate w-12 text-center">{label}</span>
    </div>
  );
};

const SignInForm: React.FC = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (data: SignInFormData) => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    try {
      console.log("Sign-in Data:", data);
      router.push("/dashboard");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black p-4 sm:p-6">
      <div className="w-full max-w-md bg-gradient-to-br from-gray-950/90 to-gray-900/90 border border-gray-800/50 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl">
        <div className="flex-1 flex items-center justify-center py-10 px-4 sm:px-12">
          <div className="w-full max-w-sm transition-all duration-700 ease-out opacity-100 translate-y-0">
            <div className="flex flex-col items-center relative">
              <Logo />
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">Interview Buddy</h2>
              <p className="text-sm text-white/70 text-center max-w-[80%] leading-5">
                Unlock your journey with us
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-6 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-white">
                  Email
                </label>
                <div className="relative">
                  <input
                    id="email"
                    {...register("email")}
                    type="email"
                    placeholder="Enter your email"
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
                      d="M3 8l9-6 9 6v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"
                    />
                  </svg>
                </div>
                {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>}
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="password" className="text-sm font-medium text-white">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    {...register("password")}
                    type="password"
                    placeholder="Enter your password"
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
                      d="M12 11c0-1.1-.9-2-2-2s-2 .9-2 2 2 4 2 4m2-4c0-1.1.9-2 2-2s2 .9 2 2-2 4-2 4m-2 2v2m-6 0h12"
                    />
                  </svg>
                </div>
                {errors.password && <p className="text-xs text-red-400 mt-1">{errors.password.message}</p>}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 bg-teal-500 rounded-lg text-white text-sm font-medium hover:bg-teal-600 transition-all duration-300 ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Processing..." : "Sign In"}
              </button>
              <p className="text-center text-sm text-white/70 mt-4">
                New user?{" "}
                <Link href="/auth/sign-up" className="text-teal-500 hover:text-teal-600 underline">
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
        <div className="h-16 bg-white/5 backdrop-blur-lg flex items-center justify-around border-t border-white/10 shadow-sm">
    
        </div>
      </div>
    </div>
  );
};

export default SignInForm;