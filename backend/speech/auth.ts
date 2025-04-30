import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '@/backend/firebase/client';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export const useAuth = () => {
  const router = useRouter();
  const [userId, setUserId] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    if (!auth) {
      toast.error('Login system nahi chal raha.');
      router.push('/sign-up');
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      if (user) {
        setUserId(user.uid);
        setUserName(user.displayName || 'User');
      } else {
        router.push('/sign-up');
      }
    });

    return () => unsubscribe();
  }, [router]);

  return { userId, userName };
};