import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import structure from './sanity/structure';
import project from './sanity/schemas/project';
import commendation from './sanity/schemas/commendation';
import skill from './sanity/schemas/skill';
import certification from './sanity/schemas/certification';
import profile from './sanity/schemas/profile';
import navbar from './sanity/schemas/navbar';
import footer from './sanity/schemas/footer';

export default defineConfig({
  name: 'default',
  title: 'van-portfolio',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,

  plugins: [deskTool({ structure })],

  schema: {
    types: [project, commendation, skill, certification, profile, navbar, footer],
  },
});