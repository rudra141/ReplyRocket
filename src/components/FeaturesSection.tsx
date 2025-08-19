
'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Target, Zap } from "lucide-react";

const features = [
    {
      icon: <Bot className="w-8 h-8 text-[#13FFAA]"/>,
      title: "AI-Powered Replies",
      description: "Generate dozens of personalized outreach messages in the time it takes to write one.",
    },
    {
      icon: <Target className="w-8 h-8 text-[#1E67C6]"/>,
      title: "Personalized at Scale",
      description: "Connect with prospects on a human level, without sacrificing speed or volume.",
    },
    {
      icon: <Zap className="w-8 h-8 text-[#CE84CF]"/>,
      title: "Easy to Use",
      description: "Our intuitive interface makes it easy for anyone to create high-converting campaigns.",
    },
  ];

export default function FeaturesSection() {
    return (
        <section id="features" className="py-16 md:py-24 bg-transparent">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
                The Future of Outreach is Here
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-gray-400">
                Everything you need to supercharge your sales pipeline.
                </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
                <Card key={index} className="bg-gray-900/50 border-2 border-gray-800/80 hover:border-[#DD335C]/50 transition-colors duration-300 shadow-lg hover:shadow-xl shadow-black/50">
                <CardHeader className="items-center text-center">
                    <div className="p-3 bg-gray-800/50 rounded-full">
                        {feature.icon}
                    </div>
                    <CardTitle className="mt-4 text-gray-200">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                    <p className="text-gray-400">{feature.description}</p>
                </CardContent>
                </Card>
            ))}
            </div>
        </div>
        </section>
    );
}
