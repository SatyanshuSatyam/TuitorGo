'use client';

import {Footer} from '@/components/layout/footer';
import {Header} from '@/components/layout/header';
import {useSearchParams} from 'next/navigation';
import {Suspense} from 'react';

function SignupContent() {
  const searchParams = useSearchParams();
  const role = searchParams.get('role');

  const title =
    role === 'tutor' ? 'Become a Tutor' : 'Sign Up for TutorGo';
  const description =
    role === 'tutor'
      ? 'This is where the tutor signup form will be.'
      : 'This is where the student signup form will be.';

  return (
    <>
      <Header />
      <main className="flex-1 container py-8">
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="text-muted-foreground">{description}</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default function SignupPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignupContent />
    </Suspense>
  );
}
