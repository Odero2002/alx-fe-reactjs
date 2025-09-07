## React Query Demo

This project demonstrates advanced data fetching and caching in React using React Query and the JSONPlaceholder API.

## Features

- Fetches posts from https://jsonplaceholder.typicode.com/posts
- Caches data for 5 minutes to reduce API calls
- Allows manual refetching of posts
- Handles loading and error states

## Setup

1. Install dependencies:
   ```sh
   npm install
   ```

2. Start the development server:
   ```sh
   npm run dev
   ```

## Usage

- Posts are loaded and cached automatically.
- Click "Refetch Posts" to manually update the data.
- Loading and error messages are displayed as needed.

## Project Structure

- `src/App.jsx`: Main app setup with React Query provider
- `src/components/PostsComponent.jsx`: Data fetching and display logic

## License

MIT