import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  // import.meta.env is how Vite accesses environment variables
  // We use "as string" to assure TypeScript that these values definitely exist
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID as string,
  dataset: import.meta.env.VITE_SANITY_DATASET as string,
  useCdn: true, // `false` if you want to ensure fresh data every request, `true` for faster, cached responses
  apiVersion: '2026-05-12', // use a specific date to ensure API stability
});