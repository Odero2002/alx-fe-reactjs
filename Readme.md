## React Query Demo

This project demonstrates advanced data fetching, caching, and updating in React using React Query and the JSONPlaceholder API.

### Objective

Implement advanced data fetching and management in a React application using React Query, focusing on efficient API interactions and improved UI responsiveness.

## Features

- Fetches posts from [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts)
- Caches data for 5 minutes to reduce API calls
- Manual refetch button to update posts
- Handles loading and error states

## API Details

- **Endpoint:** `https://jsonplaceholder.typicode.com/posts`
- **Usage:** Fetches a list of posts for demonstration and practice.

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

## Testing and Evaluation

- Use React Developer Tools and React Query Devtools to inspect cache and query status.
- Check browser network requests to confirm caching reduces API calls.
- Navigate away and return to the posts page to observe cached data loading.

## License

MIT