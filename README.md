# QA Automation Engineer Portfolio

A modern, responsive portfolio website showcasing QA automation expertise, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design with dark/light mode
- 📱 Mobile-first approach
- 🚀 Fast page loads with Next.js
- 🎯 SEO optimized
- 📝 Blog section for sharing testing insights
- 🔍 Automated testing with Jest and Cypress
- 🐳 Docker support
- 🔄 CI/CD with GitHub Actions

## Prerequisites

- Node.js 18.x or later
- npm 9.x or later
- Git

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/qa-portfolio.git
   cd qa-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Testing

Run the test suite:

```bash
# Unit tests
npm test

# E2E tests
npm run cypress:open
```

## Building for Production

```bash
npm run build
```

## Docker

Build and run with Docker:

```bash
# Build the image
docker build -t qa-portfolio .

# Run the container
docker run -p 3000:3000 qa-portfolio
```

## Deployment

The site is configured to deploy automatically to GitHub Pages when pushing to the main branch. The deployment process is handled by GitHub Actions.

1. Fork this repository
2. Enable GitHub Pages in your repository settings
3. Push to main branch to trigger deployment

## Customization

1. Update content in `src/data/` directory
2. Modify styles in `src/styles/`
3. Add your own components in `src/components/`

## License

MIT

## Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter) - email@example.com

Project Link: [https://github.com/yourusername/qa-portfolio](https://github.com/yourusername/qa-portfolio)
