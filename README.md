# Neil's Bakery 🥐

A modern, responsive website for Neil's Bakery showcasing fresh baked goods, outlet locations, customer feedback, and contact information. Built with Next.js and deployed on Firebase Hosting.

## Features

- 🏠 Home page with hero section and product showcase
- 🍞 Full product menu with categories (Breads, Pastries, Cakes, Drinks)
- 📍 Outlet locations
- ⭐ Customer feedback section
- 📧 Contact information
- 📱 Fully responsive design

## Tech Stack

- **Framework:** Next.js 16
- **Styling:** Tailwind CSS 4
- **Language:** TypeScript
- **Deployment:** Firebase Hosting with CI/CD

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/NAS-IT-Solutions/neil-bakery.git
cd neil-bakery
```

### 2. Install Dependencies

```bash
yarn
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

Then edit `.env.local` and add your environment variables (e.g., Google Maps API key).

### 4. Run Development Server

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run ESLint

## Git Workflow

**Important:** Always create feature branches from `dev`, not from `main`.

### Creating a New Feature Branch

```bash
# Switch to dev branch
git checkout dev

# Pull latest changes
git pull origin dev

# Create a new feature branch
git checkout -b feature/your-feature-name
```

### Submitting Changes

1. Commit your changes to your feature branch
2. Push the feature branch to GitHub
3. Create a Pull Request to merge into `dev` (NOT `main`)
4. After review and approval, merge into `dev`

## Deployment

The project is configured with Firebase Hosting and automatic deployments via GitHub Actions. Push to the `main` branch to trigger a deployment.

## License

© 2025 Neil's Bakery. All rights reserved.
