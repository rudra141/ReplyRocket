import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { AppLogo } from "@/components/AppLogo";
import { CheckCircle, Zap, Scale, Wrench } from "lucide-react";

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
    <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
      <AppLogo />
      <nav className="flex items-center gap-4">
        <Button variant="ghost" asChild>
          <Link href="/login">Login</Link>
        </Button>
        <Button asChild>
          <Link href="/sign-up">Try Free</Link>
        </Button>
      </nav>
    </div>
  </header>
);

const HeroSection = () => (
  <section className="bg-card py-20 md:py-32">
    <div className="container mx-auto text-center px-4 md:px-6">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary-foreground">
        Send better cold outreach.
      </h1>
      <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/80">
        ReplyRocket uses AI to craft personalized messages that get replies. Stop guessing, start converting.
      </p>
      <Button size="lg" className="mt-8" asChild>
        <Link href="/sign-up">Try Free</Link>
      </Button>
    </div>
  </section>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Lightning Fast AI",
      description: "Generate dozens of personalized outreach messages in the time it takes to write one.",
    },
    {
      icon: <Scale className="w-8 h-8 text-primary" />,
      title: "Personalized at Scale",
      description: "Connect with prospects on a human level, without sacrificing speed or volume.",
    },
    {
      icon: <Wrench className="w-8 h-8 text-primary" />,
      title: "No Technical Skills Required",
      description: "Our intuitive interface makes it easy for anyone to create high-converting campaigns.",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          The Future of Outreach is Here
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">
          Everything you need to supercharge your sales pipeline.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader className="items-center">
                {feature.icon}
                <CardTitle>{feature.title}</CardTitle>
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
    <section className="bg-card py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-foreground">
          Loved by Sales Teams Worldwide
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background">
              <CardContent className="pt-6">
                <p className="italic text-muted-foreground">"{testimonial.testimonial}"</p>
                <div className="mt-4 flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
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

const Footer = () => (
  <footer className="py-8">
    <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
      <AppLogo />
      <div className="flex gap-4 mt-4 md:mt-0">
        <Link href="/login" className="text-sm text-muted-foreground hover:text-foreground">Login</Link>
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
      <main className="flex-1 pt-16">
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
