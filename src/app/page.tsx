import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BookOpen, Calendar, MapPin, Search, Star } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero');
  const featureSearchImage = PlaceHolderImages.find(p => p.id === 'feature-search');
  const featureBookingImage = PlaceHolderImages.find(p => p.id === 'feature-booking');
  const featureChatImage = PlaceHolderImages.find(p => p.id === 'feature-chat');

  const testimonials = [
    {
      name: 'Sarah L.',
      role: 'High School Student',
      avatar: 'https://picsum.photos/seed/user1/100/100',
      text: "TutorGo helped me find a fantastic math tutor in my neighborhood. My grades have improved so much!",
    },
    {
      name: 'David C.',
      role: 'University Student',
      avatar: 'https://picsum.photos/seed/user2/100/100',
      text: "The real-time chat and easy booking system make scheduling lessons a breeze. Highly recommended for any student.",
    },
    {
      name: 'Emily R.',
      role: 'Parent',
      avatar: 'https://picsum.photos/seed/user3/100/100',
      text: "As a parent, I love that I can find verified tutors and manage bookings all in one place. It's safe and convenient.",
    },
  ];

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32">
          <div className="container relative z-10">
            <div className="max-w-3xl text-center mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tighter mb-4">
                Find Your Perfect Tutor, Right Around the Corner
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                TutorGo connects you with expert tutors in your area for personalized, one-on-one learning.
              </p>
              <div className="max-w-xl mx-auto">
                <form className="flex flex-col sm:flex-row gap-2">
                  <Input
                    type="text"
                    placeholder="Enter your location or subject"
                    className="flex-grow text-base"
                  />
                  <Button size="lg" asChild className="w-full sm:w-auto">
                    <Link href="/search">
                      <Search className="mr-2" />
                      Find Tutors
                    </Link>
                  </Button>
                </form>
              </div>
            </div>
          </div>
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              data-ai-hint={heroImage.imageHint}
              fill
              className="object-cover object-center"
              aria-hidden="true"
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-0" />
        </section>

        {/* How It Works Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">How It Works</h2>
              <p className="text-muted-foreground mt-4">Three simple steps to academic success.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 text-primary rounded-full p-3 w-fit">
                    <Search className="h-8 w-8" />
                  </div>
                  <CardTitle className="font-headline mt-4">1. Search & Discover</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Use our powerful search to find qualified tutors by subject, location, and price. View profiles and demo videos to find the perfect match.</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 text-primary rounded-full p-3 w-fit">
                    <Calendar className="h-8 w-8" />
                  </div>
                  <CardTitle className="font-headline mt-4">2. Book & Pay</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Select an available time slot that works for you and securely book your session. Our mock payment system makes it simple and safe.</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 text-primary rounded-full p-3 w-fit">
                    <BookOpen className="h-8 w-8" />
                  </div>
                  <CardTitle className="font-headline mt-4">3. Connect & Learn</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Connect with your tutor through real-time chat and start your personalized learning journey. Achieve your academic goals with expert help.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24">
          <div className="container space-y-16">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <Badge variant="outline" className="mb-2">Geospatial Search</Badge>
                <h3 className="text-2xl md:text-3xl font-bold font-headline mb-4">Find Tutors Near You</h3>
                <p className="text-muted-foreground text-lg mb-6">Our core feature lets you search for tutors within a specific radius of your location. Whether you need help with algebra or a new language, find local experts ready to assist.</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <MapPin className="text-accent mt-1 flex-shrink-0" />
                    <span>Filter by distance, subject, rating, and hourly rate to narrow down your options.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="text-accent mt-1 flex-shrink-0" />
                    <span>View detailed profiles with ratings and reviews from other students.</span>
                  </li>
                </ul>
              </div>
              {featureSearchImage && (
                <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={featureSearchImage.imageUrl}
                    alt={featureSearchImage.description}
                    data-ai-hint={featureSearchImage.imageHint}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="md:order-2">
                <Badge variant="outline" className="mb-2">Seamless Booking</Badge>
                <h3 className="text-2xl md:text-3xl font-bold font-headline mb-4">Effortless Scheduling</h3>
                <p className="text-muted-foreground text-lg mb-6">TutorGo simplifies the booking process. Tutors set their availability, and students can book a session in just a few clicks. It's that easy.</p>
                 <Button variant="link" asChild className="p-0 h-auto">
                  <Link href="/search">
                    Explore available slots now <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              {featureBookingImage && (
                <div className="aspect-video rounded-lg overflow-hidden shadow-lg md:order-1">
                  <Image
                    src={featureBookingImage.imageUrl}
                    alt={featureBookingImage.description}
                    data-ai-hint={featureBookingImage.imageHint}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Loved by Students & Parents</h2>
              <p className="text-muted-foreground mt-4">See what our users are saying about their TutorGo experience.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, i) => (
                <Card key={i}>
                  <CardContent className="pt-6">
                    <p className="italic text-muted-foreground">"{testimonial.text}"</p>
                  </CardContent>
                  <CardHeader className="flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint="person portrait" />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-base font-semibold">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="bg-primary text-primary-foreground p-8 md:p-12 rounded-lg text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Ready to Start Your Learning Journey?</h2>
              <p className="max-w-xl mx-auto mb-8">Join thousands of students finding success, or become a tutor and share your expertise with the world.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" asChild>
                  <Link href="/search">Find a Tutor</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/signup?role=tutor">Become a Tutor</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
