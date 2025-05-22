import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import project from './sanity/schemas/project';
import commendation from './sanity/schemas/commendation';

export default defineConfig({
  name: 'default',
  title: 'van-portfolio',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,

  plugins: [deskTool()],

  schema: {
    types: [project, commendation],
  },
});