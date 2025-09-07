import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchPosts = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
};

function PostsComponent() {
  const {
    data: posts,
    isLoading,
    isError,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: 20 }}>
      <h2>Posts</h2>
      <button onClick={() => refetch()} disabled={isFetching} style={{ marginBottom: 16 }}>
        {isFetching ? 'Refreshing...' : 'Refetch Posts'}
      </button>
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p style={{ color: 'red' }}>Error fetching posts.</p>
      ) : (
        <ul>
          {posts.map(post => (
            <li key={post.id} style={{ marginBottom: 12 }}>
              <strong>{post.title}</strong>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PostsComponent;