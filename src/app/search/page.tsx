import {Footer} from '@/components/layout/footer';
import {Header} from '@/components/layout/header';

export default function SearchPage() {
  return (
    <>
      <Header />
      <main className="flex-1 container py-8">
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Search Tutors</h1>
            <p className="text-muted-foreground">
              This is where the tutor search and filtering will be.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
