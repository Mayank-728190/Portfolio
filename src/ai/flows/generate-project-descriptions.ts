'use server';

/**
 * @fileOverview Generates compelling project descriptions from bullet-point notes.
 *
 * - generateProjectDescriptions - A function that generates project descriptions.
 * - GenerateProjectDescriptionsInput - The input type for the generateProjectDescriptions function.
 * - GenerateProjectDescriptionsOutput - The return type for the generateProjectDescriptions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProjectDescriptionsInputSchema = z.object({
  projectName: z.string().describe('The name of the project.'),
  notes: z.string().describe('Bullet-point notes describing the project.'),
});
export type GenerateProjectDescriptionsInput = z.infer<typeof GenerateProjectDescriptionsInputSchema>;

const GenerateProjectDescriptionsOutputSchema = z.object({
  description: z.string().describe('A compelling description of the project.'),
});
export type GenerateProjectDescriptionsOutput = z.infer<
  typeof GenerateProjectDescriptionsOutputSchema
>;

export async function generateProjectDescriptions(
  input: GenerateProjectDescriptionsInput
): Promise<GenerateProjectDescriptionsOutput> {
  return generateProjectDescriptionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProjectDescriptionsPrompt',
  input: {schema: GenerateProjectDescriptionsInputSchema},
  output: {schema: GenerateProjectDescriptionsOutputSchema},
  prompt: `You are a skilled copywriter specializing in creating engaging project descriptions for technical portfolios.

  Based on the following notes, write a compelling description for the project named "{{projectName}}".

  Notes:
  {{notes}}

  Description:`, // Removed the default safety settings
});

const generateProjectDescriptionsFlow = ai.defineFlow(
  {
    name: 'generateProjectDescriptionsFlow',
    inputSchema: GenerateProjectDescriptionsInputSchema,
    outputSchema: GenerateProjectDescriptionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
