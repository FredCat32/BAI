import { useParams, Link } from 'react-router-dom'
import './BlogPost.css'
import Post1 from './posts/Post1'

const posts = {
  '5-ways-pennsylvania-businesses-can-use-ai': Post1
}

function BlogPost() {
  const { postId } = useParams()
  const PostContent = posts[postId]

  if (!PostContent) {
    return (
      <div className="blog-post-page">
        <div className="container">
          <h1>Post not found</h1>
          <Link to="/blog">← Back to Blog</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="blog-post-page">
      <div className="container">
        <Link to="/blog" className="back-link">← Back to Blog</Link>
        <article className="blog-post">
          <PostContent />
        </article>
      </div>
    </div>
  )
}

export default BlogPost
