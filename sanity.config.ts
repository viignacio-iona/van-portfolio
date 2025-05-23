import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import structure from './sanity/structure';
import project from './sanity/schemaTypes/project';
import commendation from './sanity/schemaTypes/commendation';
import skill from './sanity/schemaTypes/skill';
import certification from './sanity/schemaTypes/certification';
import profile from './sanity/schemaTypes/profile';
import navbar from './sanity/schemaTypes/navbar';
import footer from './sanity/schemaTypes/footer';

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