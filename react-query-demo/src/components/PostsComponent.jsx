import React, { useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const fetchPosts = async ({ queryKey }) => {
  const [_key, { limit }] = queryKey;
  console.log(`Fetching ${limit} posts from API...`);
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
  
  // Simulate network delay for better demonstration
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return response.data;
};

const fetchPost = async (postId) => {
  console.log(`Fetching post ${postId} from API...`);
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  await new Promise(resolve => setTimeout(resolve, 500));
  return response.data;
};

function PostsComponent() {
  const [postLimit, setPostLimit] = useState(10);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const queryClient = useQueryClient();

  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
    isStale,
    dataUpdatedAt,
  } = useQuery({
    queryKey: ['posts', { limit: postLimit }],
    queryFn: fetchPosts,
    staleTime: 1000 * 60 * 5, // 5 minutes
    cacheTime: 1000 * 60 * 10, // 10 minutes
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    retry: 2,
    retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
  });

  const {
    data: selectedPost,
    isLoading: isLoadingPost,
    error: postError,
  } = useQuery({
    queryKey: ['post', selectedPostId],
    queryFn: () => fetchPost(selectedPostId),
    enabled: !!selectedPostId,
    staleTime: 1000 * 60 * 10, // 10 minutes
  });

  const handleClearCache = () => {
    queryClient.invalidateQueries({ queryKey: ['posts'] });
  };

  const handlePreloadPost = (postId) => {
    queryClient.prefetchQuery({
      queryKey: ['post', postId],
      queryFn: () => fetchPost(postId),
      staleTime: 1000 * 60 * 10,
    });
  };

  if (isLoading) {
    return (
      <div className="posts-container">
        <div className="loading">
          <h2>Loading Posts...</h2>
          <p>Fetching data from JSONPlaceholder API</p>
          <div style={{ marginTop: '10px' }}>⏳ Please wait...</div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="posts-container">
        <div className="error">
          <h2>Error Loading Posts</h2>
          <p>Failed to fetch posts: {error?.message || 'Unknown error'}</p>
          <button onClick={() => refetch()} style={{ marginTop: '10px' }}>
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="posts-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>Posts ({posts?.length || 0})</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <label>
            Limit:
            <select
              value={postLimit}
              onChange={(e) => setPostLimit(Number(e.target.value))}
              style={{ marginLeft: '5px', padding: '5px' }}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
          </label>
        </div>
      </div>

      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <button 
          onClick={() => refetch()} 
          disabled={isFetching}
          className="refetch-button"
        >
          {isFetching ? '🔄 Refetching...' : '🔄 Refetch Posts'}
        </button>
        
        <button onClick={handleClearCache}>
          🗑️ Clear Cache
        </button>
        
        <button onClick={() => setSelectedPostId(null)}>
          ❌ Close Detail
        </button>
      </div>

      <div style={{ marginBottom: '20px', fontSize: '14px', color: '#666' }}>
        <div>🔄 <strong>Status:</strong> {isFetching ? 'Fetching...' : isStale ? 'Stale (will refetch in background)' : 'Fresh'}</div>
        <div>⏰ <strong>Last Updated:</strong> {new Date(dataUpdatedAt).toLocaleTimeString()}</div>
        <div>💾 <strong>Cache Key:</strong> ['posts', {`{limit: ${postLimit}}`}]</div>
      </div>

      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{ flex: 1 }}>
          <h3>Posts List</h3>
          <div style={{ maxHeight: '600px', overflowY: 'auto' }}>
            {posts?.map(post => (
              <div key={post.id} className="post-item">
                <div className="post-title">
                  {post.id}. {post.title}
                </div>
                <div className="post-body" style={{ marginBottom: '10px' }}>
                  {post.body.substring(0, 100)}...
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button
                    onClick={() => setSelectedPostId(post.id)}
                    style={{ 
                      padding: '5px 10px', 
                      fontSize: '12px',
                      backgroundColor: selectedPostId === post.id ? '#646cff' : '#f0f0f0',
                      color: selectedPostId === post.id ? 'white' : '#333'
                    }}
                  >
                    {selectedPostId === post.id ? 'Selected' : 'View Details'}
                  </button>
                  <button
                    onClick={() => handlePreloadPost(post.id)}
                    style={{ padding: '5px 10px', fontSize: '12px', backgroundColor: '#28a745', color: 'white' }}
                  >
                    Preload
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedPostId && (
          <div style={{ flex: 1, minWidth: '300px' }}>
            <h3>Post Details (ID: {selectedPostId})</h3>
            {isLoadingPost ? (
              <div className="loading">Loading post details...</div>
            ) : postError ? (
              <div className="error">Error loading post: {postError.message}</div>
            ) : selectedPost ? (
              <div className="post-item">
                <div className="post-title">{selectedPost.title}</div>
                <div className="post-body">{selectedPost.body}</div>
                <div style={{ marginTop: '10px', fontSize: '12px', color: '#666' }}>
                  💾 <strong>Cached separately</strong> with key: ['post', {selectedPostId}]
                </div>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}

export default PostsComponent;
