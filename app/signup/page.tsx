import AcmeLogo from '@/app/ui/acme-logo';
import SignupForm from '@/app/ui/signup-form';
import Link from 'next/link';
import { Suspense } from 'react';

export default function SignupPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-green-500 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
            <AcmeLogo />
          </div>
        </div>
        <Suspense>
          <SignupForm />
        </Suspense>
        <div className="mt-4 text-center">
          <span>Already have an account?</span>
          <Link href="/login" className="text-blue-600 hover:underline">Login</Link>
        </div>
      </div>
    </main>
  );
}
