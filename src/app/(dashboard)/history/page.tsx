'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Clipboard, Trash2 } from "lucide-react";
import { useToast } from '@/hooks/use-toast';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

// Mock data, assuming fetched from Firestore
const MOCK_GENERATIONS = [
  {
    id: 'gen1',
    timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    inputs: { name: 'Elon Musk', role: 'CEO, SpaceX', contextLine: 'Saw your work on reusable rockets, truly revolutionary.' },
    generatedReplies: [
        'Hey Elon, your work with SpaceX is inspiring. The reusable rockets are a game-changer.',
        'Hi Elon, just wanted to reach out and say the progress with Starship is incredible to watch.',
    ]
  },
  {
    id: 'gen2',
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    inputs: { name: 'Satya Nadella', role: 'CEO, Microsoft', contextLine: 'Loved your keynote on the future of AI at the recent conference.' },
    generatedReplies: [
        'Hi Satya, your vision for AI presented at the conference was profoundly insightful.',
        'Hello Satya, really enjoyed your keynote. The way you articulated the future of AI was brilliant.',
    ]
  },
  {
    id: 'gen3',
    timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    inputs: { name: 'Ada Lovelace', role: 'Visionary', contextLine: 'Your work on the Analytical Engine laid the groundwork for modern computing.' },
    generatedReplies: [
        'Dear Ada, your contributions to computing are timeless and continue to inspire generations.',
        'Ada, your foresight into the potential of computing was nothing short of genius.',
    ]
  }
];

export default function HistoryPage() {
  const { toast } = useToast();
  const [generations, setGenerations] = useState(MOCK_GENERATIONS);
  
  const copyAllToClipboard = (replies: string[]) => {
    const textToCopy = replies.join('\n\n---\n\n');
    navigator.clipboard.writeText(textToCopy);
    toast({ title: "Copied!", description: "All replies for this generation copied." });
  };

  const deleteGeneration = (id: string) => {
    // In a real app, you would call a server action to delete from Firestore
    setGenerations(prev => prev.filter(gen => gen.id !== id));
    toast({ title: "Deleted", description: "Generation has been deleted." });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Past Generations</CardTitle>
        <CardDescription>
          Browse and manage all your previous AI-powered outreach generations.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {generations.length > 0 ? (
          <Accordion type="single" collapsible className="w-full">
            {generations.map((gen) => (
              <AccordionItem value={gen.id} key={gen.id}>
                <AccordionTrigger>
                  <div className='flex justify-between w-full pr-4'>
                    <div>
                      <span className="font-semibold">{gen.inputs.name}</span>
                      <span className="text-muted-foreground"> - {gen.inputs.role}</span>
                    </div>
                    <span className='text-sm text-muted-foreground'>{gen.timestamp.toLocaleDateString()}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-4"><strong>Context:</strong> {gen.inputs.contextLine}</p>
                    <div className="space-y-2 mb-4">
                      {gen.generatedReplies.map((reply, index) => (
                        <p key={index} className="text-sm border-b pb-2">{reply}</p>
                      ))}
                    </div>
                    <div className="flex gap-2">
                        <Button size="sm" variant="outline" onClick={() => copyAllToClipboard(gen.generatedReplies)}>
                            <Clipboard className="h-4 w-4 mr-2" />
                            Copy All
                        </Button>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button size="sm" variant="destructive">
                                <Trash2 className="h-4 w-4 mr-2" />
                                Delete
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                              <AlertDialogDescription>
                                This action cannot be undone. This will permanently delete this generation from our servers.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction onClick={() => deleteGeneration(gen.id)}>Continue</AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          <div className="text-center py-12 text-muted-foreground">
            <p>You haven't generated any outreach yet.</p>
            <Button asChild className="mt-4">
                <a href="/dashboard">Generate your first message</a>
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
