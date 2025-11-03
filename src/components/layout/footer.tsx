import { Logo } from '@/components/icons';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-secondary/50">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
          <div className="flex items-center space-x-2">
            <Logo className="h-6 w-6" />
            <span className="font-bold font-headline">TutorGo</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {currentYear} TutorGo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
