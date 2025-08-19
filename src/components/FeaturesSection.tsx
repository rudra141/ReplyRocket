'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Target, Zap } from "lucide-react";

const features = [
    {
      icon: <Bot className="w-8 h-8 text-primary"/>,
      title: "AI-Powered Replies",
      description: "Generate dozens of personalized outreach messages in the time it takes to write one.",
    },
    {
      icon: <Target className="w-8 h-8 text-primary"/>,
      title: "Personalized at Scale",
      description: "Connect with prospects on a human level, without sacrificing speed or volume.",
    },
    {
      icon: <Zap className="w-8 h-8 text-primary"/>,
      title: "Easy to Use",
      description: "Our intuitive interface makes it easy for anyone to create high-converting campaigns.",
    },
  ];

export default function FeaturesSection() {
    return (
        <section id="features" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                The Future of Outreach is Here
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-slate-600">
                Everything you need to supercharge your sales pipeline.
                </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
                <Card key={index} className="bg-slate-50 border-2 border-slate-100 hover:border-primary/50 transition-colors duration-300 shadow-lg hover:shadow-xl">
                <CardHeader className="items-center text-center">
                    <div className="p-3 bg-primary/10 rounded-full">
                        {feature.icon}
                    </div>
                    <CardTitle className="mt-4 text-slate-800">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                    <p className="text-slate-500">{feature.description}</p>
                </CardContent>
                </Card>
            ))}
            </div>
        </div>
        </section>
    );
}
