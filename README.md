# AI Business Helper

A React-based platform designed to assist small businesses by generating AI-powered text and image content for various departments (Marketing, Legal, HR, etc.) using OpenAI.

## Features

- **Marketing:** Generate compelling social posts, ad copy, and promotional content with AI-generated visuals.
- **Legal Documents:** Draft NDAs, lease agreements, and business contracts with professional legal language.
- **Customer Relations:** Craft polished, empathetic responses to customer complaints and support requests.
- **Inventory:** Generate rich product descriptions that convert browsers into buyers.
- **HR & Hiring:** Create detailed, compelling job descriptions to attract the best talent.

## Architecture & Stack

- **Frontend Framework:** React (using Hooks)
- **Routing:** React Router v6 (`react-router-dom`)
- **API Communication:** Axios
- **External APIs:** OpenAI API (`GPT-4` for text completion, `DALL-E 3` for image generation)
- **Styling:** Custom Vanilla CSS with modern aesthetics (glassmorphism accents, gradients)

## Setup and Installation

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn
- An OpenAI API Key (with access to GPT-4 and DALL-E)

### Steps

1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd ai-business-helper
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory and add your OpenAI API key:
   ```env
   REACT_APP_OPENAI_API_KEY=your_openai_api_key_here
   ```

4. **Start the Development Server:**
   ```bash
   npm start
   ```

   The app will open automatically at [http://localhost:3000](http://localhost:3000).

## Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in the development mode.

### `npm run build`
Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.

## Engineering Highlight

- **Concurrent Async Operations:** Leveraging `Promise.all` in the module forms precisely coordinates text completions and image generations to minimize delays and enhance performance.
- **Simplified State Management:** Uses context passing and prop-drilling within React Router context cleanly instead of heavy third-party state managers like Redux for simple localized states.
- **Security:** Requires an explicit `.env` variable securely initialized at the root rather than embedded inline for OpenAI credentials.
