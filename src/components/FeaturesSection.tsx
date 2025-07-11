'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

export default function FeaturesSection() {
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
}
