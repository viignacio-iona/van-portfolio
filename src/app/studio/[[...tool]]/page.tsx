'use client'

import { NextStudio } from 'next-sanity/studio'

export default function StudioPage() {
  return (
    <NextStudio
      config={{
        name: 'default',
        title: 'van-portfolio',
        projectId: 'givnzkpy',
        dataset: 'production',
        plugins: [],
        schema: {
          types: []
        }
      }}
    />
  )
}
