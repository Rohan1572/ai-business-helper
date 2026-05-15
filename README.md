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
- Custom Webpack build tooling

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
REACT_APP_OPENAI_API_KEY=your_openai_api_key_here
```

### Run

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

- `npm start` starts the development server
- `npm run build` creates a production build
- `npm run lint` checks the source files with ESLint
- `npm run format` formats JS and CSS files with Prettier

## Notes

- There is no test command in the current setup.
- The app uses a custom Webpack-based toolchain rather than a higher-level framework.
