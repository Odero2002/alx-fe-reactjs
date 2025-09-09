import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import PostsComponent from './components/PostsComponent';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 10, // 10 minutes (previously cacheTime)
      retry: 3,
    },
  },
});

function App() {
  const [showPosts, setShowPosts] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h1>React Query Advanced Demo</h1>
        <p>This demo showcases advanced React Query features including caching, background refetching, and data management.</p>
        
        <div style={{ marginBottom: '20px' }}>
          <button 
            onClick={() => setShowPosts(!showPosts)}
            style={{ 
              padding: '10px 20px', 
              fontSize: '16px',
              backgroundColor: showPosts ? '#ff6b6b' : '#646cff',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            {showPosts ? 'Hide Posts (Test Cache)' : 'Show Posts (From Cache)'}
          </button>
        </div>

        {showPosts && <PostsComponent />}
        
        <div style={{ marginTop: '40px', padding: '20px', backgroundColor: 'rgba(100, 108, 255, 0.1)', borderRadius: '8px' }}>
          <h3>How to Test React Query Features:</h3>
          <ol>
            <li><strong>Caching:</strong> Click "Hide Posts" then "Show Posts" - data loads instantly from cache</li>
            <li><strong>Background Refetch:</strong> Wait 5 minutes or click "Refetch Posts" to see background updates</li>
            <li><strong>DevTools:</strong> Use React Query DevTools (bottom right) to inspect cache and query states</li>
            <li><strong>Network Optimization:</strong> Check browser DevTools Network tab to see reduced API calls</li>
          </ol>
        </div>
      </div>
      
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
