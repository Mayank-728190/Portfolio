'use server';

/**
 * @fileOverview A research paper summarization AI agent.
 *
 * - summarizePublications - A function that handles the summarization of publications.
 * - SummarizePublicationsInput - The input type for the summarizePublications function.
 * - SummarizePublicationsOutput - The return type for the summarizePublications function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizePublicationsInputSchema = z.object({
  publications: z.array(
    z.object({
      title: z.string().describe('The title of the research paper.'),
      abstract: z.string().describe('The abstract of the research paper.'),
    })
  ).describe('An array of research papers to summarize, including their titles and abstracts.'),
});
export type SummarizePublicationsInput = z.infer<typeof SummarizePublicationsInputSchema>;

const SummarizePublicationsOutputSchema = z.object({
  summaries: z.array(
    z.object({
      title: z.string().describe('The title of the research paper.'),
      summary: z.string().describe('A short summary of the research paper.'),
    })
  ).describe('An array of summaries, one for each research paper.'),
});
export type SummarizePublicationsOutput = z.infer<typeof SummarizePublicationsOutputSchema>;

export async function summarizePublications(input: SummarizePublicationsInput): Promise<SummarizePublicationsOutput> {
  return summarizePublicationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizePublicationsPrompt',
  input: {schema: SummarizePublicationsInputSchema},
  output: {schema: SummarizePublicationsOutputSchema},
  prompt: `You are an expert research paper summarizer. You will be provided with a list of research papers, each with a title and abstract. Your job is to summarize each paper in a single sentence.

Here are the research papers:
{{#each publications}}
Title: {{this.title}}
Abstract: {{this.abstract}}
\n{{/each}}

Return a JSON array of objects, where each object has a \"title\" and a \"summary\" field.
`,
});

const summarizePublicationsFlow = ai.defineFlow(
  {
    name: 'summarizePublicationsFlow',
    inputSchema: SummarizePublicationsInputSchema,
    outputSchema: SummarizePublicationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
