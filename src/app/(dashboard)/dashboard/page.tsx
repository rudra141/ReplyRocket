
'use client';

import { useState, useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { generateReplies, GenerateRepliesInput } from '@/ai/flows/generate-replies';
import { useToast } from '@/hooks/use-toast';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Clipboard, Gem, History, Loader2 } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  role: z.string().min(2, { message: 'Role must be at least 2 characters.' }),
  contextLine: z.string().min(10, { message: 'Context must be at least 10 characters.' }),
});

const getInitialUsage = () => {
    if (typeof window !== 'undefined') {
        const storedUsage = localStorage.getItem('replyRocketUsageLeft');
        return storedUsage ? parseInt(storedUsage, 10) : 100;
    }
    return 100;
};

const getInitialHistory = () => {
    if (typeof window !== 'undefined') {
        const storedHistory = localStorage.getItem('replyRocketHistory');
        if (storedHistory) {
            try {
                return JSON.parse(storedHistory);
            } catch (error) {
                console.error("Failed to parse history from localStorage", error);
                return [];
            }
        }
    }
    return [];
};

export default function DashboardPage() {
  const { user } = useUser();
  const { toast } = useToast();
  const [generatedReplies, setGeneratedReplies] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [usageLeft, setUsageLeft] = useState(100);
  const [history, setHistory] = useState<any[]>([]);
  const [isPro, setIsPro] = useState(false);

  useEffect(() => {
    setUsageLeft(getInitialUsage());
    setHistory(getInitialHistory());
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', role: '', contextLine: '' },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!isPro && usageLeft <= 0) {
        toast({ title: 'Free Limit Reached', description: 'Please upgrade to Pro for unlimited generations.', variant: 'destructive' });
        return;
    }

    setIsLoading(true);
    setGeneratedReplies([]);
    try {
      const result = await generateReplies(values as GenerateRepliesInput);
      setGeneratedReplies(result.replies);
      
      const newHistoryItem = {
        id: `gen-${Date.now()}`,
        timestamp: new Date().toISOString(),
        inputs: values,
        generatedReplies: result.replies,
      };
      
      const updatedHistory = [newHistoryItem, ...history];
      setHistory(updatedHistory);
      localStorage.setItem('replyRocketHistory', JSON.stringify(updatedHistory));

      if (!isPro) {
        const newUsageLeft = usageLeft - 1;
        setUsageLeft(newUsageLeft);
        localStorage.setItem('replyRocketUsageLeft', newUsageLeft.toString());
      }
    } catch (error) {
      console.error(error);
      toast({ title: 'Error', description: 'Failed to generate replies. Please try again.', variant: 'destructive' });
    } finally {
      setIsLoading(false);
    }
  }
  
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({ title: "Copied!", description: "Message copied to clipboard." });
  };

  const recentHistory = useMemo(() => history.slice(0, 5), [history]);

  return (
    <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
      <div className="md:col-span-2 lg:col-span-3 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Hey, {user?.emailAddresses[0]?.emailAddress} 👋</CardTitle>
            <CardDescription>Generate AI-powered outreach messages in seconds.</CardDescription>
          </CardHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <CardContent className="space-y-4">
                <FormField control={form.control} name="name" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl><Input placeholder="e.g., Jane Doe" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="role" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role</FormLabel>
                    <FormControl><Input placeholder="e.g., Marketing Manager" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="contextLine" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Context Line</FormLabel>
                    <FormControl><Textarea placeholder="e.g., I saw your work on LinkedIn..." {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </CardContent>
              <CardFooter>
                 <Button type="submit" disabled={isLoading || (!isPro && usageLeft <= 0)}>
                  {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                  Generate Replies
                </Button>
              </CardFooter>
            </form>
          </Form>
        </Card>

        {(!isPro && usageLeft <= 0) && (
            <Card className="bg-primary/10 border-primary">
                 <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Gem className="text-primary"/> Free Limit Reached</CardTitle>
                    <CardDescription>You've used all your free generations for today.</CardDescription>
                </CardHeader>
                <CardFooter>
                     <Button asChild>
                        <Link href="/upgrade">Upgrade to Pro</Link>
                    </Button>
                </CardFooter>
            </Card>
        )}

        {(isLoading || generatedReplies.length > 0) && (
            <Card>
                <CardHeader>
                    <CardTitle>Generated Replies</CardTitle>
                </CardHeader>
                <CardContent>
                    {isLoading ? (
                        <div className="flex justify-center items-center h-40">
                             <Loader2 className="h-8 w-8 animate-spin text-primary" />
                        </div>
                    ) : (
                         <ScrollArea className="h-96">
                            <div className="space-y-4">
                            {generatedReplies.map((reply, index) => (
                                <div key={index} className="flex items-start gap-4 p-4 border rounded-lg bg-muted/50">
                                    <p className="flex-1 text-sm">{reply}</p>
                                    <Button variant="ghost" size="icon" onClick={() => copyToClipboard(reply)}>
                                        <Clipboard className="h-4 w-4" />
                                    </Button>
                                </div>
                            ))}
                            </div>
                        </ScrollArea>
                    )}
                </CardContent>
            </Card>
        )}
      </div>

      <div className="md:col-span-1 lg:col-span-1 space-y-6">
          <Card>
              <CardHeader>
                  <CardTitle>Usage</CardTitle>
              </CardHeader>
              <CardContent>
                  {isPro ? (
                       <p className="font-bold text-primary">Pro Plan</p>
                  ) : (
                      <p><span className="font-bold">{usageLeft}</span> free generations left today.</p>
                  )}
              </CardContent>
          </Card>

          <Card>
              <CardHeader>
                  <CardTitle className="flex items-center gap-2"><History className="h-5 w-5"/> Recent History</CardTitle>
              </CardHeader>
              <CardContent>
                  <ScrollArea className="h-60">
                      <div className="space-y-4">
                          {recentHistory.map(item => (
                              <div key={item.id} className="text-xs p-2 border rounded-md bg-muted/20">
                                  <p className="font-semibold truncate">{item.inputs.name}, {item.inputs.role}</p>
                                  <p className="text-muted-foreground truncate">{item.inputs.contextLine}</p>
                              </div>
                          ))}
                      </div>
                  </ScrollArea>
              </CardContent>
               <CardFooter>
                  <Button variant="outline" size="sm" asChild className="w-full">
                      <Link href="/history">View all history</Link>
                  </Button>
               </CardFooter>
          </Card>
      </div>
    </div>
  );
}
