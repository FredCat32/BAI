import './BlogAuthor.css'

function BlogAuthor() {
  return (
    <div className="blog-post-author">
      <img
        src="/headshot-square.webp"
        alt="Matthew Irving"
        width="60"
        height="60"
        className="author-photo"
        loading="lazy"
      />
      <div className="author-info">
        <p className="author-name">
          <strong>Matthew Irving</strong>
        </p>
        <p className="author-title">
          Founder & AI Consultant at BerksAI
        </p>
        <p className="author-bio">
          Expert in React, Python, and AI automation for Berks County businesses. Based in Oley, PA.
        </p>
      </div>
    </div>
  )
}

export default BlogAuthor
