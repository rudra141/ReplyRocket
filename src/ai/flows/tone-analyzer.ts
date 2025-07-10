'use server';

/**
 * @fileOverview This file defines a Genkit flow for analyzing the tone of a given text.
 *
 * - analyzeTone - Analyzes the tone of a message and provides feedback.
 * - AnalyzeToneInput - The input type for the analyzeTone function.
 * - AnalyzeToneOutput - The return type for the analyzeTone function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeToneInputSchema = z.object({
  text: z.string().describe('The text to analyze for tone.'),
});
export type AnalyzeToneInput = z.infer<typeof AnalyzeToneInputSchema>;

const AnalyzeToneOutputSchema = z.object({
  tone: z.string().describe('The overall tone of the text (e.g., positive, negative, neutral).'),
  feedback: z.string().describe('Constructive feedback on the tone, suggesting improvements if necessary.'),
});
export type AnalyzeToneOutput = z.infer<typeof AnalyzeToneOutputSchema>;

export async function analyzeTone(input: AnalyzeToneInput): Promise<AnalyzeToneOutput> {
  return analyzeToneFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeTonePrompt',
  input: {schema: AnalyzeToneInputSchema},
  output: {schema: AnalyzeToneOutputSchema},
  prompt: `You are an AI tone analyzer. You will analyze the tone of the given text and provide feedback.

  Text: {{{text}}}

  Respond with the overall tone of the text, and constructive feedback to improve the tone and remove any negative impressions.
  Follow the schema strictly.
  `,config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_NONE',
      },
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        threshold: 'BLOCK_LOW_AND_ABOVE',
      },
    ],
  },
});

const analyzeToneFlow = ai.defineFlow(
  {
    name: 'analyzeToneFlow',
    inputSchema: AnalyzeToneInputSchema,
    outputSchema: AnalyzeToneOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
