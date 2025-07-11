'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";


export default function PricingSection() {
    return (
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
                    <span className="text-4xl font-bold">₹19</span>
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
}
