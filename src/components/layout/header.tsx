import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/icons';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline inline-block">TutorGo</span>
          </Link>
          <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
            <Link href="/search" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Find a Tutor
            </Link>
            <Link href="/signup?role=tutor" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Become a Tutor
            </Link>
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-2 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="p-4">
                <Link href="/" className="mr-6 flex items-center space-x-2 mb-6">
                  <Logo className="h-6 w-6 text-primary" />
                  <span className="font-bold font-headline inline-block">TutorGo</span>
                </Link>
                <nav className="flex flex-col space-y-4 text-lg">
                  <Link href="/search" className="transition-colors hover:text-foreground/80 text-foreground/60">Find a Tutor</Link>
                  <Link href="/signup?role=tutor" className="transition-colors hover:text-foreground/80 text-foreground/60">Become a Tutor</Link>
                </nav>
                <div className="mt-6 pt-6 border-t flex flex-col space-y-2">
                  <Button variant="ghost" asChild><Link href="/login">Log In</Link></Button>
                  <Button asChild><Link href="/signup">Sign Up</Link></Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="hidden flex-1 items-center justify-end space-x-2 md:flex">
          <Button variant="ghost" asChild>
            <Link href="/login">Log In</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
