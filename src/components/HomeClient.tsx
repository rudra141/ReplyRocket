'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AppLogo } from "@/components/AppLogo";
import dynamic from 'next/dynamic';
import React from "react";

const FeaturesSection = dynamic(() => import('@/components/FeaturesSection'));
const ProductDemoSection = dynamic(() => import('@/components/ProductDemoSection'));
const AuroraHero = dynamic(() => import('@/components/AuroraHero').then(mod => mod.AuroraHero), { ssr: false });

const Header = ({ isSignedIn }: { isSignedIn: boolean }) => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
    <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6 text-white">
      <AppLogo />
      <nav className="hidden items-center gap-6 md:flex">
        <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">Features</Link>
        <Link href="#demo" className="text-sm font-medium hover:underline underline-offset-4">Demo</Link>
      </nav>
      <div className="flex items-center gap-4">
        {isSignedIn ? (
            <Button variant="outline" asChild className="bg-transparent text-white hover:bg-white hover:text-black">
              <Link href="/dashboard">Dashboard</Link>
            </Button>
        ) : (
          <>
            <Button variant="ghost" asChild className="text-white hover:bg-white/10 hover:text-white">
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild className="text-white bg-white/20 hover:bg-white/30">
              <Link href="/sign-up">Get Started Free</Link>
            </Button>
          </>
        )}
      </div>
    </div>
  </header>
);

const Footer = () => (
    <footer className="py-8 bg-transparent text-gray-400 border-t border-gray-800">
    <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
      <AppLogo />
       <div className="flex gap-4 mt-4 md:mt-0">
        <Link href="#" className="text-sm hover:text-white">Privacy Policy</Link>
        <Link href="#" className="text-sm hover:text-white">Terms of Service</Link>
      </div>
      <p className="text-sm mt-4 md:mt-0">&copy; {new Date().getFullYear()} ReplyRocket. All rights reserved.</p>
    </div>
  </footer>
);


export function HomeClient({ isSignedIn }: { isSignedIn: boolean }) {
  return (
    <AuroraHero>
      <Header isSignedIn={isSignedIn} />
      <ProductDemoSection />
      <FeaturesSection />
      <Footer />
    </AuroraHero>
  );
}
