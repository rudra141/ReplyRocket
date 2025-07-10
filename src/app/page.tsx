import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { AppLogo } from "@/components/AppLogo";
import { Check, CheckCircle, MoveRight } from "lucide-react";
import Image from "next/image";


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
  <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-white dark:bg-gray-950">
     <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] dark:bg-slate-950 dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)]">
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


const FeaturesSection = () => {
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-primary"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" x2="4" y1="22" y2="15"></line></svg>
      ),
      title: "AI-Powered Replies",
      description: "Generate dozens of personalized outreach messages in the time it takes to write one.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-primary"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
      ),
      title: "Personalized at Scale",
      description: "Connect with prospects on a human level, without sacrificing speed or volume.",
    },
    {
      icon: (
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-primary"><path d="m18 1-6 4-6-4-6 4v14l6-4 6 4 6-4-6-4Z"></path><path d="m6 9 6 4"></path><path d="m18 9-6 4"></path></svg>
      ),
      title: "Easy to Use",
      description: "Our intuitive interface makes it easy for anyone to create high-converting campaigns.",
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
            The Future of Outreach is Here
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Everything you need to supercharge your sales pipeline.
            </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border-2 hover:border-primary/50 transition-colors duration-300">
              <CardHeader className="items-center text-center">
                 <div className="p-3 bg-primary/10 rounded-full">
                    {feature.icon}
                </div>
                <CardTitle className="mt-4">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};


const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah L.",
      role: "Sales Director @ TechCorp",
      testimonial: "ReplyRocket has been a game-changer for our outbound strategy. Our reply rates have tripled!",
      avatar: "https://placehold.co/100x100.png",
      aiHint: "woman smiling"
    },
    {
      name: "Mike D.",
      role: "Founder, Growth Agency",
      testimonial: "I was skeptical at first, but the quality of AI-generated messages is outstanding. Highly recommended.",
      avatar: "https://placehold.co/100x100.png",
      aiHint: "man portrait"
    },
    {
      name: "Jessica P.",
      role: "Marketing Manager",
      testimonial: "The time saved is incredible. What used to take hours now takes minutes, with better results.",
      avatar: "https://placehold.co/100x100.png",
      aiHint: "woman portrait"
    },
  ];

  return (
    <section id="testimonials" className="bg-primary/5 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
            Loved by Sales Teams Worldwide
            </h2>
             <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                Don't just take our word for it. Here's what our customers say.
            </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card">
              <CardContent className="pt-6">
                <p className="italic text-foreground/80">"{testimonial.testimonial}"</p>
                <div className="mt-4 flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const PricingSection = () => (
  <section id="pricing" className="py-16 md:py-24 bg-background">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Choose the plan that's right for you
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          Simple, transparent pricing. No hidden fees.
        </p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
        <Card className="border-2">
          <CardHeader>
            <CardTitle>Free</CardTitle>
            <CardDescription>For individuals getting started.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-baseline">
              <span className="text-4xl font-bold">₹0</span>
              <span className="text-muted-foreground ml-1">/month</span>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />3 generations per day
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />Basic message personalization
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />Access to community support
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/sign-up">Get Started</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card className="border-2 border-primary relative">
           <div className="absolute top-0 right-4 -mt-3">
              <div className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">Most Popular</div>
            </div>
          <CardHeader>
            <CardTitle>Pro</CardTitle>
            <CardDescription>For professionals who want to close more deals.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
             <div className="flex items-baseline">
              <span className="text-4xl font-bold">₹499</span>
              <span className="text-muted-foreground ml-1">/month</span>
            </div>
             <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />Unlimited generations
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />Save message templates
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />Bulk CSV mode
              </li>
               <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />Priority support
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" asChild>
              <Link href="/upgrade">Upgrade to Pro</Link>
            </Button>
          </CardFooter>
        </Card>
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
