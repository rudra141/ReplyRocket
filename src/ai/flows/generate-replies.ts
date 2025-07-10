'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating outreach replies.
 *
 * - generateReplies - Generates a list of outreach replies based on provided context.
 * - GenerateRepliesInput - The input type for the generateReplies function.
 * - GenerateRepliesOutput - The return type for the generateReplies function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateRepliesInputSchema = z.object({
  name: z.string().describe('The name of the person you are reaching out to.'),
  role: z.string().describe('The role of the person you are reaching out to (e.g., Marketing Manager).'),
  contextLine: z.string().describe('The context for the outreach (e.g., "I saw your work on LinkedIn...").'),
});
export type GenerateRepliesInput = z.infer<typeof GenerateRepliesInputSchema>;

const GenerateRepliesOutputSchema = z.object({
  replies: z.array(z.string()).describe('An array of 10 generated outreach message variations.'),
});
export type GenerateRepliesOutput = z.infer<typeof GenerateRepliesOutputSchema>;

export async function generateReplies(input: GenerateRepliesInput): Promise<GenerateRepliesOutput> {
  return generateRepliesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateRepliesPrompt',
  input: {schema: GenerateRepliesInputSchema},
  output: {schema: GenerateRepliesOutputSchema},
  prompt: `You are ReplyRocket, an AI assistant that crafts highly personalized cold outreach messages.
  Your goal is to generate 10 unique, compelling, and professional message variations that will grab the recipient's attention and encourage a response.

  Recipient's Name: {{{name}}}
  Recipient's Role: {{{role}}}
  Context: {{{contextLine}}}

  Based on the information provided, generate 10 distinct outreach messages. Each message should be short, engaging, and tailored to the recipient. Avoid generic platitudes.

  Respond with a JSON object containing a 'replies' array with exactly 10 message strings.
  `,
});

const generateRepliesFlow = ai.defineFlow(
  {
    name: 'generateRepliesFlow',
    inputSchema: GenerateRepliesInputSchema,
    outputSchema: GenerateRepliesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
