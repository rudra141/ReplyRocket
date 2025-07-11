import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { AppLogo } from "@/components/AppLogo";
import { Check, CheckCircle, MoveRight } from "lucide-react";
import Image from "next/image";
import dynamic from 'next/dynamic';

const FeaturesSection = dynamic(() => import('@/components/FeaturesSection'));
const TestimonialsSection = dynamic(() => import('@/components/TestimonialsSection'));
const PricingSection = dynamic(() => import('@/components/PricingSection'));


const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
    <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
      <AppLogo />
      <nav className="hidden items-center gap-6 md:flex">
        <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">Features</Link>
        <Link href="#testimonials" className="text-sm font-medium hover:underline underline-offset-4">Testimonials</Link>
        <Link href="#pricing" className="text-sm font-medium hover:underline underline-offset-4">Pricing</Link>
      </nav>
      <div className="flex items-center gap-4">
        <Button variant="ghost" asChild>
          <Link href="/login">Login</Link>
        </Button>
        <Button asChild>
          <Link href="/sign-up">Get Started Free</Link>
        </Button>
      </div>
    </div>
  </header>
);

const HeroSection = () => (
  <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-background dark:bg-gray-950">
     <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] dark:bg-slate-950 dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)]">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#dbeafe,transparent)] dark:bg-[radial-gradient(circle_500px_at_50%_200px,#1e3a8a,transparent)]"></div>
    </div>

    <div className="container mx-auto text-center px-4 md:px-6">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
        Stop Guessing. Start Converting.
      </h1>
      <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
        ReplyRocket uses AI to craft personalized outreach messages that actually get replies. Supercharge your sales pipeline in minutes.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <Button size="lg" asChild>
          <Link href="/sign-up">Get Started Free <MoveRight className="ml-2" /></Link>
        </Button>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-8 bg-background border-t">
    <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
      <AppLogo />
       <div className="flex gap-4 mt-4 md:mt-0">
        <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</Link>
        <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</Link>
      </div>
      <p className="text-sm text-muted-foreground mt-4 md:mt-0">&copy; {new Date().getFullYear()} ReplyRocket. All rights reserved.</p>
    </div>
  </footer>
);


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}
