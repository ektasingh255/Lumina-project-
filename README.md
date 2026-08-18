# Lumina - Dynamic Street Lighting

Premium responsive frontend for Lumina, a privacy-first adaptive street-lighting platform. Built with React, Vite and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open the local address shown in the terminal (usually `http://localhost:5173`).

## Production build

```bash
npm run build
```

The production-ready static site is created in `dist/`.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import that repository.
3. Vercel automatically detects Vite. Keep the default build command (`npm run build`) and output directory (`dist`).
4. Click **Deploy** to receive a shareable HTTPS link.

## Included pages

- `/` - animated Lumina marketing homepage
- `/login` - Central Electricity Control Board of India sign-in experience
- `/dashboard` - live-style streetlight command dashboard with dummy data
