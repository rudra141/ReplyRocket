'use client';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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

export default function TestimonialsSection() {
    return (
        <section id="testimonials" className="py-16 md:py-24 bg-primary/5">
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
}
