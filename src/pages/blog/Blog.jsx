import { Link } from 'react-router-dom'
import './Blog.css'

const blogPosts = [
  {
    id: 'ai-tools-i-actually-use-every-day',
    title: 'AI Tools I Actually Use Every Day (Personal Recommendations)',
    date: 'February 24, 2026',
    excerpt: 'An honest look at the AI tools I use daily to run my business—what they cost, how I use them, and whether they\'re worth it for Berks County businesses.',
    readTime: '5 min read'
  },
  {
    id: 'what-i-learned-helping-pennsylvania-businesses-implement-ai',
    title: 'What I Learned Helping Pennsylvania Businesses Implement AI',
    date: 'February 20, 2026',
    excerpt: 'Real insights from working with local Berks County businesses—what actually works, what doesn\'t, and what you should know before spending a dime on AI.',
    readTime: '7 min read'
  },
  {
    id: '5-ways-pennsylvania-businesses-can-use-ai',
    title: '5 Ways Pennsylvania Businesses Can Start Using AI Today',
    date: 'February 20, 2026',
    excerpt: 'Practical AI applications for small businesses in Berks County and beyond. No technical expertise required.',
    readTime: '6 min read'
  }
]

function Blog() {
  return (
    <div className="blog-page">
      <div className="container">
        <div className="blog-header">
          <h1>BerksAI Blog</h1>
          <p>AI insights, automation tips, and practical guides for Pennsylvania businesses</p>
        </div>

        <div className="blog-grid">
          {blogPosts.map(post => (
            <article key={post.id} className="blog-card">
              <div className="blog-card-content">
                <span className="blog-date">{post.date}</span>
                <h2>
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h2>
                <p>{post.excerpt}</p>
                <div className="blog-meta">
                  <span>{post.readTime}</span>
                  <Link to={`/blog/${post.id}`} className="read-more">
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog
