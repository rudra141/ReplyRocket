'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AppLogo } from "@/components/AppLogo";
import dynamic from 'next/dynamic';
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

const AuroraHero = dynamic(() => import('@/components/AuroraHero').then(mod => mod.AuroraHero), { ssr: false });
const FeaturesSection = dynamic(() => import('@/components/FeaturesSection'));
const ProductDemoSection = dynamic(() => import('@/components/ProductDemoSection'));

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
      <div className="grid min-h-screen place-content-center px-4 py-24">
          <div className="relative z-10 flex flex-col items-center">
              <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
              Beta Now Live!
              </span>
              <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
              Stop Guessing. Start Converting.
              </h1>
              <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
              ReplyRocket uses AI to craft personalized outreach messages that actually get replies. Supercharge your sales pipeline in minutes.
              </p>
              <Link href="/sign-up">
                  <motion.button
                  whileHover={{
                      scale: 1.015,
                  }}
                  whileTap={{
                      scale: 0.985,
                  }}
                  className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50 border border-white/50 shadow-[0_0_15px_hsl(var(--primary)/0.5)]"
                  >
                  Start free trial
                  <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
                  </motion.button>
              </Link>
          </div>
      </div>
      <ProductDemoSection />
      <FeaturesSection />
      <Footer />
    </AuroraHero>
  );
}
