import { useParams, Link } from 'react-router-dom'
import './BlogPost.css'
import Post1 from './posts/Post1'
import Post2 from './posts/Post2'
import Post3 from './posts/Post3'
import Post4 from './posts/Post4'
import Post5 from './posts/Post5'
import WhenNotToUseAI from './posts/when-not-to-use-ai'

const posts = {
  '5-ways-pennsylvania-businesses-can-use-ai': Post1,
  'what-small-businesses-should-know-before-starting-with-ai': Post2,
  'how-to-choose-ai-tools-for-your-business': Post3,
  'why-berksai-leads-with-ai-training': Post4,
  'enabling-ai-use-inside-your-company': Post5,
  'when-not-to-use-ai': WhenNotToUseAI
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
