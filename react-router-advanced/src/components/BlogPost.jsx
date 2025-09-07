import { useParams } from 'react-router-dom';

function BlogPost() {
  const { postId } = useParams();
  return (
    <div>
      <h2>Blog Post</h2>
      <p>This is blog post #{postId}</p>
    </div>
  );
}

export default BlogPost;