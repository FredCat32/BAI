import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import './Blog.css'

const blogPosts = [
  {
    id: 'enabling-ai-use-inside-your-company',
    title: 'Enabling AI Use Inside Your Company: What the Research Says About Quality and Efficiency',
    date: 'November 18, 2026',
    excerpt: 'What published studies show about AI, quality, and efficiency at work, why your employees are probably already using AI, and six practical steps to enable it safely. Every source linked.',
    readTime: '8 min read'
  },
  {
    id: 'why-im-starting-an-ai-consulting-business-in-berks-county',
    title: 'Why I\'m Starting an AI Consulting Business in Berks County (And What I\'ve Learned So Far)',
    date: 'March 3, 2026',
    excerpt: 'The honest story behind BerksAI: why I\'m building an AI automation consultancy, what I actually know (and don\'t), and why Pennsylvania businesses need practical AI guidance.',
    readTime: '7 min read'
  },
  {
    id: 'when-not-to-use-ai',
    title: 'When NOT to Use AI: Honest Advice for Local Businesses',
    date: 'February 27, 2026',
    excerpt: 'Not every business problem needs an AI solution. Here\'s my honest take on when to skip the hype and stick with what works.',
    readTime: '5 min read'
  },
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
      <Helmet>
        <title>BerksAI Blog | AI Tips & Automation Advice for PA Businesses</title>
        <meta
          name="description"
          content="Practical AI insights and automation tips for Pennsylvania businesses. Real advice from helping Berks County companies implement AI solutions."
        />
        <link rel="canonical" href="https://berksai.com/blog" />
        <meta property="og:title" content="BerksAI Blog | AI Tips & Automation Advice" />
        <meta property="og:description" content="Practical AI insights and automation tips for Pennsylvania businesses." />
        <meta property="og:url" content="https://berksai.com/blog" />
      </Helmet>
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
