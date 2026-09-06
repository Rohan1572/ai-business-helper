# AI Business Helper

AI Business Helper is a React app that helps small businesses generate AI-powered content for departments like Marketing, Legal, Customer Relations, Inventory, and HR.

## What It Does

- Creates marketing copy and campaign ideas
- Drafts legal-style business documents
- Generates customer support responses
- Produces inventory descriptions
- Writes hiring and HR content

## Stack

- React
- React Router
- Axios
- OpenAI API
- Vite

## Setup

### Requirements

- Node.js 18 or newer
- npm
- An OpenAI API key

### Install

```bash
npm install
```

### Environment

Create a `.env` file in the project root:

```env
VITE_OPENAI_API_KEY=your_openai_api_key_here
```

### Run

```bash
npm run dev
```

The app is available at `http://localhost:5173/` by default. `npm start` is an alias for the same Vite development server:

```bash
npm start
```

### Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

### Format

```bash
npm run format
```

## Scripts

- `npm run dev` starts the Vite development server
- `npm start` starts the Vite development server as an alias
- `npm run build` creates a production build in `dist`
- `npm run preview` previews the production build locally
- `npm run lint` checks the source files with ESLint
- `npm run format` formats JS and CSS files with Prettier
- `npm run reinstall` removes dependencies and generated files, then reinstalls packages

## Notes

- There is no test command in the current setup.
- The app uses Vite for development and production builds.
