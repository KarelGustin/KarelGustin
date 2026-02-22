# Karel Gustin - Personal Brand Portfolio (Next.js)

Premium personal brand/portfolio website built with Next.js, React, and GSAP animations.

## Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **GSAP Animations** - Premium scroll-triggered animations and micro-interactions
- **Custom Cursor** - Interactive cursor with magnetic effects
- **Responsive Design** - Fully responsive across all devices
- **Project Showcase** - Filterable project grid with detailed modals
- **Contact Form** - Functional contact form with validation
- **Smooth Scrolling** - Smooth section navigation
- **Loading Screen** - Elegant page load animation

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx        # Main page component
│   └── globals.css     # Global styles
├── components/
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Projects.tsx    # Projects grid
│   ├── ProjectModal.tsx # Project detail modal
│   ├── Experience.tsx  # Experience timeline
│   ├── Contact.tsx     # Contact form
│   ├── Footer.tsx      # Footer
│   ├── Cursor.tsx      # Custom cursor
│   └── Loader.tsx      # Loading screen
└── lib/
    └── data.ts         # Projects data
```

## Customization

### Personal Information

Update the following components:
- **Hero.tsx** - Name, profession, description
- **About.tsx** - About text and skills
- **Experience.tsx** - Timeline items
- **Contact.tsx** - Contact information
- **lib/data.ts** - Projects array

### Projects

Edit the `projects` array in `lib/data.ts`:

```typescript
export const projects: Project[] = [
  {
    id: 1,
    title: "Your Project Title",
    category: "web", // web, mobile, architecture, ui
    description: "Project description",
    image: "path/to/image.jpg",
    technologies: ["React", "Node.js", "etc"],
    link: "https://project-url.com"
  },
  // Add more projects...
];
```

### Colors

Update CSS variables in `app/globals.css`:

```css
:root {
    --black: #000000;
    --white: #ffffff;
    --green: #00ff00; /* Your brand color */
    /* ... */
}
```

### Contact Form

The contact form currently uses a simulated submission. To connect to a backend service, update the form submission handler in `components/Contact.tsx` and replace the `setTimeout` simulation with your API call.

## Build for Production

```bash
npm run build
npm start
```

## Deployment

This Next.js app can be deployed on:
- **Vercel** (recommended) - `vercel deploy`
- **Netlify** - Connect your Git repository
- **Any Node.js hosting** - Build and deploy the `.next` folder

## Technologies Used

- **Next.js 14** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **GSAP** - Animation library
- **CSS3** - Styling with custom properties

## License

Personal use - Karel Gustin
