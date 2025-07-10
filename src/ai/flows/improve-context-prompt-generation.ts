'use server';
/**
 * @fileOverview This flow suggests improvements to the user's context input for better reply generation.
 *
 * - improveContextPromptGeneration - A function that suggests improvements to the user's context input.
 * - ImproveContextPromptGenerationInput - The input type for the improveContextPromptGeneration function.
 * - ImproveContextPromptGenerationOutput - The return type for the improveContextPromptGeneration function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ImproveContextPromptGenerationInputSchema = z.object({
  name: z.string().describe('The name of the person you are reaching out to.'),
  role: z.string().describe('The role of the person you are reaching out to (e.g., Marketing Manager).'),
  contextLine: z.string().describe('The initial context line provided by the user (e.g., I saw your work on LinkedIn...).'),
});
export type ImproveContextPromptGenerationInput = z.infer<typeof ImproveContextPromptGenerationInputSchema>;

const ImproveContextPromptGenerationOutputSchema = z.object({
  improvedContextLine: z.string().describe('The improved context line suggested by the AI.'),
  reasoning: z.string().describe('The AI’s reasoning for the suggested improvement.'),
});
export type ImproveContextPromptGenerationOutput = z.infer<typeof ImproveContextPromptGenerationOutputSchema>;

export async function improveContextPromptGeneration(input: ImproveContextPromptGenerationInput): Promise<ImproveContextPromptGenerationOutput> {
  return improveContextPromptGenerationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'improveContextPromptGenerationPrompt',
  input: {schema: ImproveContextPromptGenerationInputSchema},
  output: {schema: ImproveContextPromptGenerationOutputSchema},
  prompt: `You are an AI assistant that helps users craft better outreach messages. Your task is to improve the context line provided by the user to generate better replies.

  Name: {{{name}}}
  Role: {{{role}}}
  Context Line: {{{contextLine}}}

  Suggest an improved context line and explain your reasoning for the suggestion. The improved context line should be more specific, engaging, and relevant to the recipient. Focus on making the context line more likely to result in a positive response.

  Output:
  {{json improvedContextLine=<improved context line>, reasoning=<reasoning for the improvement>}}
  `,
});

const improveContextPromptGenerationFlow = ai.defineFlow(
  {
    name: 'improveContextPromptGenerationFlow',
    inputSchema: ImproveContextPromptGenerationInputSchema,
    outputSchema: ImproveContextPromptGenerationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
