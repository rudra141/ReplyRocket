'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { CheckCircle, Gem } from "lucide-react";
import Script from "next/script";
import { useToast } from "@/hooks/use-toast";
import { useUser } from "@clerk/nextjs";

const proFeatures = [
    "Unlimited generations",
    "Priority support"
];

const RAZORPAY_KEY_ID = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_test_XXXXXXXXXXXXXX';

export default function UpgradePage() {
    const { toast } = useToast();
    const { user } = useUser();

    const handlePayment = () => {
        const options = {
            key: RAZORPAY_KEY_ID,
            amount: "1900", // amount in the smallest currency unit
            currency: "INR",
            name: "ReplyRocket Pro",
            description: "Monthly Subscription",
            image: "/logo.svg", // You should host a logo
            handler: function (response: any) {
                // This is a mock success handler.
                // In a real app, you would verify payment on your server
                // using response.razorpay_payment_id and a webhook.
                console.log(response);
                toast({
                    title: "Payment Successful!",
                    description: "Welcome to ReplyRocket Pro! Your account has been upgraded.",
                });
                // Here, you'd trigger a server action to update Firestore: `isPro = true`
            },
            prefill: {
                name: user?.fullName || "Valued User",
                email: user?.primaryEmailAddress?.emailAddress,
            },
            notes: {
                clerk_user_id: user?.id,
            },
            theme: {
                color: "#29ABE2"
            }
        };

        const rzp = new (window as any).Razorpay(options);
        rzp.open();
    };


    return (
        <>
            <Script
                id="razorpay-checkout-js"
                src="https://checkout.razorpay.com/v1/checkout.js"
                onLoad={() => console.log('Razorpay script loaded.')}
            />
            <div className="flex justify-center items-center">
                <Card className="w-full max-w-md">
                    <CardHeader className="text-center">
                        <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
                            <Gem className="h-8 w-8 text-primary" />
                        </div>
                        <CardTitle className="text-3xl mt-4">Upgrade to Pro</CardTitle>
                        <CardDescription>Unlock all features and reach your full potential.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="text-center">
                            <span className="text-4xl font-bold">₹19</span>
                            <span className="text-muted-foreground">/month</span>
                        </div>
                        <ul className="space-y-3">
                            {proFeatures.map((feature, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <CheckCircle className="h-5 w-5 text-green-500" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full" size="lg" onClick={handlePayment}>
                            Upgrade Now
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </>
    );
}
