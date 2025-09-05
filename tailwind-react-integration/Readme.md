# Tailwind React Integration

This project demonstrates how to set up and use Tailwind CSS in a React application created with Vite.

## Setup Instructions

### 1. Create a New React Project

```sh
npm create vite@latest tailwind-react-integration -- --template react
cd tailwind-react-integration
```

### 2. Install Tailwind CSS and Its Dependencies

```sh
npm install tailwindcss @tailwindcss/vite
```

### 3. Configure the Vite Plugin

Edit `vite.config.js`:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```

### 4. Include Tailwind in Your CSS

Edit `src/index.css`:

```css
@import "tailwindcss";
```

### 5. Verify Installation

Start your React application:

```sh
npm run dev
```

You should see the default React application rendered with no errors, indicating that Tailwind CSS is now integrated.

## Project Structure

- `src/App.jsx`: Main React component
- `vite.config.js`: Vite configuration with Tailwind plugin
- `src/index.css`: Tailwind CSS import

## License

MIT
