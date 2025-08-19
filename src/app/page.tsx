import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AppLogo } from "@/components/AppLogo";
import { MoveRight } from "lucide-react";
import dynamic from 'next/dynamic';
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const FeaturesSection = dynamic(() => import('@/components/FeaturesSection'));
const ProductDemoSection = dynamic(() => import('@/components/ProductDemoSection'));
const PricingSection = dynamic(() => import('@/components/PricingSection'));


const Header = ({ isSignedIn }: { isSignedIn: boolean }) => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
    <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
      <AppLogo />
      <nav className="hidden items-center gap-6 md:flex">
        <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">Features</Link>
        <Link href="#pricing" className="text-sm font-medium hover:underline underline-offset-4">Pricing</Link>
      </nav>
      <div className="flex items-center gap-4">
        {isSignedIn ? (
            <Button asChild>
              <Link href="/dashboard">Dashboard</Link>
            </Button>
        ) : (
          <>
            <Button variant="ghost" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/sign-up">Get Started Free</Link>
            </Button>
          </>
        )}
      </div>
    </div>
  </header>
);

const HeroSection = () => (
  <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-background dark:bg-gray-950">
     <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div>

    <div className="container mx-auto text-center px-4 md:px-6">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-600">
        Stop Guessing. Start Converting.
      </h1>
      <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-slate-600">
        ReplyRocket uses AI to craft personalized outreach messages that actually get replies. Supercharge your sales pipeline in minutes.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <Button size="lg" asChild className="bg-slate-900 hover:bg-slate-800">
          <Link href="/sign-up">Get Started Free <MoveRight className="ml-2" /></Link>
        </Button>
      </div>
    </div>
  </section>
);

const Footer = () => (
    <footer className="py-8 bg-slate-50 border-t">
    <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
      <AppLogo />
       <div className="flex gap-4 mt-4 md:mt-0">
        <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</Link>
        <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</Link>
      </div>
      <p className="text-sm text-muted-foreground mt-4 md:mt-0">&copy; {new Date().getFullYear()} ReplyRocket. All rights reserved.</p>
    </div>
  </footer>
);


export default function Home() {
  const { userId } = auth();

  if (userId) {
    // If the user is logged in, redirect them to the dashboard.
    // This is a common pattern for marketing pages.
    redirect('/dashboard');
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header isSignedIn={!!userId} />
      <main className="flex-1">
        <HeroSection />
        <ProductDemoSection />
        <FeaturesSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}
