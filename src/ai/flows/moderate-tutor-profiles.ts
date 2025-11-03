'use server';

/**
 * @fileOverview AI-powered moderation tool for tutor profiles and demo videos.
 *
 * - moderateTutorProfile - Moderates tutor profiles and demo videos for inappropriate content.
 * - ModerateTutorProfileInput - The input type for the moderateTutorProfile function.
 * - ModerateTutorProfileOutput - The return type for the moderateTutorProfile function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ModerateTutorProfileInputSchema = z.object({
  profileDescription: z
    .string()
    .describe('The description of the tutor profile to moderate.'),
  demoVideoDataUri: z
    .string()
    .describe(
      "A data URI of the tutor's demo video, that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type ModerateTutorProfileInput = z.infer<typeof ModerateTutorProfileInputSchema>;

const ModerateTutorProfileOutputSchema = z.object({
  isAppropriate: z
    .boolean()
    .describe('Whether the tutor profile and demo video are appropriate.'),
  reason: z
    .string()
    .describe(
      'The reason why the tutor profile or demo video is not appropriate.'
    )
    .optional(),
});
export type ModerateTutorProfileOutput = z.infer<typeof ModerateTutorProfileOutputSchema>;

export async function moderateTutorProfile(
  input: ModerateTutorProfileInput
): Promise<ModerateTutorProfileOutput> {
  return moderateTutorProfileFlow(input);
}

const prompt = ai.definePrompt({
  name: 'moderateTutorProfilePrompt',
  input: {schema: ModerateTutorProfileInputSchema},
  output: {schema: ModerateTutorProfileOutputSchema},
  prompt: `You are an AI-powered tool that helps admins review and moderate tutor profiles and demo videos for inappropriate content or policy violations, ensuring a safe and professional platform environment.

You will receive a tutor profile description and a demo video.

Determine if the tutor profile and demo video are appropriate based on the following criteria:

- No inappropriate content
- No policy violations
- Professional and safe platform environment

Profile Description: {{{profileDescription}}}
Demo Video: {{media url=demoVideoDataUri}}

Respond with whether the profile is appropriate and a reason if it is not.`,
});

const moderateTutorProfileFlow = ai.defineFlow(
  {
    name: 'moderateTutorProfileFlow',
    inputSchema: ModerateTutorProfileInputSchema,
    outputSchema: ModerateTutorProfileOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
