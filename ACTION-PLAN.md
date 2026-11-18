# SEO ACTION PLAN
## BerksAI.com - Prioritized Recommendations

**Generated:** March 2, 2026
**Current SEO Score:** 64/100 (Needs Improvement)
**Potential Score (All Fixes):** 85-90/100 (Good to Excellent)

---

## HOW TO USE THIS PLAN

This action plan is organized by priority and time commitment:
- **CRITICAL:** Fix immediately (blocks indexing or causes penalties)
- **HIGH:** Fix within 1 week (significant ranking impact)
- **MEDIUM:** Fix within 1 month (optimization opportunities)
- **LOW:** Nice to have (backlog)

Each task includes:
- Time estimate
- Expected impact
- Files to modify
- Step-by-step instructions

---

## CRITICAL PRIORITY (Fix Immediately)

### 1. Add Missing Blog Post to Sitemap
**Time:** 10 minutes | **Impact:** +50-100 monthly visits | **Difficulty:** Easy

**Problem:** "When NOT to Use AI" blog post (published Feb 27) exists but is not in sitemap.xml

**Files to Modify:**
- `/Users/matthewirving/Documents/workspace/ReadingAI/BAI/public/sitemap.xml`

**Steps:**
1. Open `public/sitemap.xml`
2. Add this entry after the other blog posts (around line 40):
```xml
<url>
  <loc>https://berksai.com/blog/when-not-to-use-ai</loc>
  <lastmod>2026-02-27</lastmod>
  <priority>0.8</priority>
  <changefreq>monthly</changefreq>
</url>
```
3. Update the `/blog` lastmod from `2026-02-24` to `2026-02-27` (line ~30)
4. Save and deploy
5. Submit updated sitemap to Google Search Console

**Verification:**
- Visit https://berksai.com/sitemap.xml
- Confirm all 9 pages listed

---

### 2. Create Social Sharing Image (og-image.jpg)
**Time:** 30 minutes | **Impact:** +30-50% social CTR | **Difficulty:** Easy

**Problem:** Meta tags reference `og-image.jpg` but file doesn't exist, causing broken social previews

**Specifications:**
- Dimensions: 1200x630px (Facebook/LinkedIn standard)
- File size: <200KB
- Format: JPG
- Location: `/Users/matthewirving/Documents/workspace/ReadingAI/BAI/public/og-image.jpg`

**Content to Include:**
1. BerksAI logo (centered or left)
2. Tagline: "AI Automation & Consulting for Pennsylvania Businesses"
3. Geographic identifier: "Berks County • King of Prussia • Philadelphia"
4. Clean background (solid or gradient - use brand colors: black #000000, red #dc2626)

**Design Tips:**
- Keep text large (72pt+ for main copy)
- Ensure 10% margin on all sides (safe zone for mobile apps)
- Test on dark mode (Twitter/X) and light mode (LinkedIn)

**Tools You Can Use:**
- Canva (free, templates available)
- Figma (professional)
- Photoshop/GIMP (advanced)

**Verification:**
1. Save file as `og-image.jpg` in `/public/` directory
2. Deploy site
3. Test with:
   - Facebook Debugger: https://developers.facebook.com/tools/debug/
   - Twitter Card Validator: https://cards-dev.twitter.com/validator
   - LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/

---

### 3. Compress Headshot Image (Critical Performance Issue)
**Time:** 15 minutes | **Impact:** 1-2 second LCP improvement | **Difficulty:** Easy

**Problem:** `headshot.png` is 1.8MB - causing slow page loads and poor Core Web Vitals

**Target:**
- Current: 1.8MB PNG
- Goal: <150KB WebP
- Compression ratio: 92% reduction

**Steps:**
1. **Online Tool Method** (Easiest):
   - Go to https://squoosh.app/
   - Upload `/public/headshot.png`
   - Select WebP format
   - Adjust quality slider to 80-85
   - Download as `headshot.webp`

2. **Command Line Method** (Fastest):
   ```bash
   cd /Users/matthewirving/Documents/workspace/ReadingAI/BAI/public

   # Install cwebp if not already installed
   brew install webp

   # Convert with quality 85
   cwebp -q 85 headshot.png -o headshot.webp

   # Check file size
   ls -lh headshot.webp
   ```

3. **Update Code:**
   - Find: `/Users/matthewirving/Documents/workspace/ReadingAI/BAI/src/pages/About.jsx` (line 40)
   - Change: `src="/headshot.png"` → `src="/headshot.webp"`
   - Add dimensions:
   ```jsx
   <img
     src="/headshot.webp"
     alt="Matthew Irving, Founder of BerksAI"
     width="400"
     height="400"
     loading="lazy"
   />
   ```

4. **Keep PNG as Fallback** (optional):
   ```jsx
   <picture>
     <source srcset="/headshot.webp" type="image/webp" />
     <img src="/headshot.png" alt="..." width="400" height="400" />
   </picture>
   ```

**Verification:**
- Test page load at https://pagespeed.web.dev/
- Verify image displays correctly on About page
- Check file size: `ls -lh public/headshot.webp`

---

### 4. Compress About Page Image
**Time:** 15 minutes | **Impact:** +0.5-1 second LCP improvement | **Difficulty:** Easy

**Problem:** `about-image.jpg` is 967KB - too large for web

**Target:**
- Current: 967KB JPG
- Goal: <100KB WebP
- Compression ratio: 90% reduction

**Steps:** (Same as headshot above)
1. Upload to https://squoosh.app/ or use command line
2. Convert to WebP at quality 80-85
3. Update code in About.jsx to reference new file
4. Add width/height dimensions

**Verification:**
- Check file size
- Test visual quality on About page
- Run PageSpeed Insights

---

## HIGH PRIORITY (Fix Within 1 Week)

### 5. Install and Configure react-helmet-async
**Time:** 1-2 hours | **Impact:** +15-25% CTR from SERPs | **Difficulty:** Medium

**Problem:** All pages inherit homepage title/meta tags, reducing click-through rates

**Installation:**
```bash
cd /Users/matthewirving/Documents/workspace/ReadingAI/BAI
npm install react-helmet-async
```

**Implementation:**

**Step 1: Wrap App in HelmetProvider** (`src/main.jsx`)
```jsx
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
)
```

**Step 2: Add Helmet to Each Page**

Example for About page (`src/pages/About.jsx`):
```jsx
import { Helmet } from 'react-helmet-async'

function About() {
  return (
    <>
      <Helmet>
        <title>About BerksAI | AI Consultant Matthew Irving | Oley, PA</title>
        <meta
          name="description"
          content="Meet Matthew Irving, founder of BerksAI. Expert in React, Python, and AI automation serving Berks County businesses. Based in Oley, PA."
        />
        <link rel="canonical" href="https://berksai.com/about" />

        {/* Open Graph */}
        <meta property="og:title" content="About BerksAI | AI Consultant Matthew Irving" />
        <meta property="og:description" content="Meet Matthew Irving, founder of BerksAI..." />
        <meta property="og:url" content="https://berksai.com/about" />
      </Helmet>

      {/* Rest of component */}
    </>
  )
}
```

**Step 3: Add to ALL Pages**
- Home.jsx (keep existing tags in index.html)
- About.jsx
- Tech.jsx
- Contact.jsx
- Blog.jsx
- All blog post pages

**Recommended Title Formats:**
- About: "About BerksAI | AI Consultant Matthew Irving | Oley, PA"
- Tech: "Technology Stack | AI Tools & Platforms | BerksAI"
- Contact: "Contact BerksAI | Free AI Consultation | Berks County, PA"
- Blog: "BerksAI Blog | AI Tips & Automation Advice for PA Businesses"
- Blog posts: "[Post Title] | BerksAI Blog"

**Recommended Description Lengths:**
- 150-160 characters (optimal for Google)
- Include target keyword + geographic identifier
- Add call-to-action when appropriate

**Verification:**
1. Build and deploy site
2. View page source (not Inspect Element) on each page
3. Confirm unique <title> and <meta name="description"> tags
4. Test with Google Rich Results Test

---

### 6. Add Author Attribution to Blog Posts
**Time:** 20 minutes | **Impact:** Improved E-E-A-T signals | **Difficulty:** Easy

**Problem:** No author byline on blog posts, weakening Experience and Expertise signals

**Implementation:**

Add to each blog post component (Post1.jsx, Post2.jsx, Post3.jsx, when-not-to-use-ai.jsx):

```jsx
<div className="blog-post-author">
  <img
    src="/headshot.webp"
    alt="Matthew Irving"
    width="60"
    height="60"
    className="author-photo"
  />
  <div className="author-info">
    <p className="author-name">
      <strong>Matthew Irving</strong>
    </p>
    <p className="author-title">
      Founder & AI Consultant at BerksAI
    </p>
    <p className="author-bio">
      Expert in React, Python, and AI automation for Berks County businesses.
      Based in Oley, PA.
    </p>
  </div>
</div>
```

Add CSS (in BlogPost.css or individual post CSS):
```css
.blog-post-author {
  display: flex;
  gap: 1rem;
  margin: 2rem 0;
  padding: 1.5rem;
  background: var(--color-gray);
  border-left: 3px solid var(--color-red);
}

.author-photo {
  border-radius: 50%;
}

.author-info {
  flex: 1;
}

.author-name {
  margin: 0 0 0.25rem;
  color: var(--color-white);
}

.author-title {
  margin: 0 0 0.5rem;
  color: #999;
  font-size: 0.9rem;
}

.author-bio {
  margin: 0;
  color: #ccc;
  font-size: 0.9rem;
}
```

**Placement:** Insert author section immediately after blog post header (below title and date)

**Verification:**
- Check all 4 blog posts display author section
- Verify styling matches site theme
- Test mobile responsiveness

---

### 7. Add Image Dimensions to All Images
**Time:** 30 minutes | **Impact:** Reduced CLS, better Core Web Vitals | **Difficulty:** Easy

**Problem:** Images lack width/height attributes, causing layout shifts

**Files to Update:**
- `src/pages/About.jsx`
- `src/components/Header.jsx`
- Any other components with images

**Before:**
```jsx
<img src="/logo.png" alt="BerksAI Logo" className="logo-image" />
```

**After:**
```jsx
<img
  src="/logo.png"
  alt="BerksAI"
  width="200"
  height="50"
  className="logo-image"
/>
```

**How to Find Dimensions:**
```bash
cd /Users/matthewirving/Documents/workspace/ReadingAI/BAI/public

# On macOS
sips -g pixelWidth -g pixelHeight logo.png

# Or use file info in Finder
# Or open in Preview and check Tools > Show Inspector
```

**Recommended Dimensions:**
- Logo: width="200" height="50" (adjust to actual size)
- Headshot: width="400" height="400"
- About image: width="600" height="400" (adjust to actual aspect ratio)

**CSS Note:** Ensure CSS still controls display size:
```css
.logo-image {
  width: 100%;
  height: auto;
  max-width: 200px;
}
```

**Verification:**
- Run Lighthouse in Chrome DevTools
- Check CLS score (should be <0.1)
- Verify images don't appear oversized on load

---

### 8. Expand Tech Page Content
**Time:** 2-3 hours | **Impact:** +20-40% keyword coverage | **Difficulty:** Medium

**Problem:** Tech page has only ~215 words (should be 800+)

**Target Word Count:** 900-1,200 words

**Content Structure:**
```markdown
# Technology Stack We Use

[Intro paragraph: 100-150 words about choosing the right tech stack]

## AI & Language Models
### Claude (Anthropic)
- [Use cases for Berks County businesses]
- [Specific implementation examples]
- [Cost/benefit analysis]
- [When to use vs alternatives]

### OpenAI GPT-4
[Same structure as above]

## Automation Platforms
### n8n
### Make (formerly Integromat)

## Development Frameworks
### React & JavaScript
### Python
### C#

## Supporting Technologies
### Vector Databases
### APIs & Integrations
### Hosting & Infrastructure

## Why These Technologies?
[Explain selection criteria]
[Cost transparency]
[Scalability considerations]

## Technology Selection Process
[How you choose tech for each project]
[Client consultation process]

## FAQs About Our Tech Stack
```

**Writing Guidelines:**
- Include specific Berks County business examples
- Add pricing transparency where appropriate
- Link to relevant blog posts
- Use H2 and H3 headings for structure
- Include internal links to homepage services

**File to Edit:**
- `/Users/matthewirving/Documents/workspace/ReadingAI/BAI/src/pages/Tech.jsx`

---

### 9. Expand Contact Page Content
**Time:** 1-2 hours | **Impact:** +20-30% conversion rate | **Difficulty:** Easy-Medium

**Problem:** Contact page has only ~85 words (should be 500+)

**Target Word Count:** 600-800 words

**Content to Add:**
1. **Consultation Process** (200 words)
   - What to expect on first call
   - How long consultations take
   - What information to prepare
   - Next steps after consultation

2. **Service Areas & Response Time** (150 words)
   - Counties served (Berks, Montgomery, Philadelphia, etc.)
   - In-person vs remote availability
   - Typical response time (24-48 hours)
   - Emergency support availability

3. **FAQ Section** (300 words)
   - "What happens after I contact you?"
   - "Do you offer free consultations?"
   - "How quickly can we start a project?"
   - "Do you work with businesses outside Berks County?"
   - "What information do you need for a quote?"

4. **Business Hours & Location**
   - Monday-Friday, 9:00 AM - 6:00 PM EST
   - Based in Oley, PA
   - Serving Berks County and surrounding areas

**Optional Additions:**
- Google Maps embed (if comfortable sharing precise location)
- Alternative contact methods (LinkedIn, scheduling link)
- Office photo or local landmark photo

**File to Edit:**
- `/Users/matthewirving/Documents/workspace/ReadingAI/BAI/src/pages/Contact.jsx`

---

## MEDIUM PRIORITY (Fix Within 1 Month)

### 10. Implement BlogPosting Schema on All Blog Posts
**Time:** 2 hours | **Impact:** +40-80% rich snippet eligibility | **Difficulty:** Medium

**Problem:** Blog posts lack structured data, reducing AI citation and rich snippet opportunities

**Implementation:**

Create a reusable schema component (`src/components/BlogPostSchema.jsx`):

```jsx
import { Helmet } from 'react-helmet-async'

export default function BlogPostSchema({
  title,
  description,
  slug,
  datePublished,
  dateModified,
  wordCount,
  author = "Matthew Irving"
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "image": "https://berksai.com/og-image.jpg",
    "author": {
      "@type": "Person",
      "name": author,
      "jobTitle": "Founder & AI Consultant",
      "worksFor": {
        "@type": "Organization",
        "name": "BerksAI",
        "url": "https://berksai.com"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "BerksAI",
      "logo": {
        "@type": "ImageObject",
        "url": "https://berksai.com/logo.png"
      }
    },
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://berksai.com/blog/${slug}`
    },
    "wordCount": wordCount,
    "articleSection": "AI Consulting",
    "keywords": [
      "AI consulting",
      "business automation",
      "Berks County",
      "Pennsylvania AI"
    ]
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  )
}
```

**Use in Blog Posts:**

```jsx
import BlogPostSchema from '../../components/BlogPostSchema'

function WhenNotToUseAI() {
  return (
    <>
      <BlogPostSchema
        title="When NOT to Use AI: Honest Advice for Local Businesses"
        description="Not every business problem needs an AI solution..."
        slug="when-not-to-use-ai"
        datePublished="2026-02-27"
        wordCount={1900}
      />
      {/* Rest of component */}
    </>
  )
}
```

**Add to All 4 Blog Posts:**
1. Post1.jsx (5 Ways Pennsylvania Businesses Can Start Using AI Today)
2. Post2.jsx (What I Learned Helping Pennsylvania Businesses Implement AI)
3. Post3.jsx (AI Tools I Actually Use Every Day)
4. when-not-to-use-ai.jsx (When NOT to Use AI)

**Verification:**
- Test each post with Google Rich Results Test
- Check for errors in Google Search Console
- Verify schema appears in page source

---

### 11. Add Person Schema to About Page
**Time:** 30 minutes | **Impact:** Improved author authority signals | **Difficulty:** Easy

**Implementation:**

Add to `src/pages/About.jsx`:

```jsx
<Helmet>
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Matthew Irving",
      "jobTitle": "Founder & AI Consultant",
      "description": "AI consultant specializing in workflow automation, chatbots, and AI solutions for Berks County businesses",
      "image": "https://berksai.com/headshot.webp",
      "url": "https://berksai.com/about",
      "email": "matthew.irving@berksai.com",
      "telephone": "+1-267-357-8007",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Oley",
        "addressRegion": "PA",
        "addressCountry": "US"
      },
      "worksFor": {
        "@type": "Organization",
        "name": "BerksAI",
        "url": "https://berksai.com"
      },
      "knowsAbout": [
        "AI Automation",
        "Workflow Automation",
        "Chatbot Development",
        "React",
        "JavaScript",
        "Python",
        "C#",
        "Langchain",
        "n8n",
        "Claude",
        "OpenAI GPT-4"
      ]
    })}
  </script>
</Helmet>
```

**Verification:**
- Test with Google Rich Results Test
- Verify schema appears in page source

---

### 12. Implement Code Splitting
**Time:** 2-3 hours | **Impact:** +15-25% faster initial load | **Difficulty:** Medium-Hard

**Problem:** All routes loaded in single JavaScript bundle, slowing initial page load

**Implementation:**

Update `src/App.jsx`:

**Before:**
```jsx
import Home from './pages/Home'
import About from './pages/About'
import Tech from './pages/Tech'
// etc.
```

**After:**
```jsx
import { lazy, Suspense } from 'react'

// Lazy load route components
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Tech = lazy(() => import('./pages/Tech'))
const Contact = lazy(() => import('./pages/Contact'))
const Blog = lazy(() => import('./pages/blog/Blog'))
const BlogPost = lazy(() => import('./pages/blog/BlogPost'))

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* etc. */}
        </Routes>
      </Suspense>
      <ChatbotWidget />
    </Router>
  )
}
```

**Add Loading Spinner CSS:**
```css
/* In src/index.css */
.loading {
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: var(--color-white);
}
```

**Expected Results:**
- Initial bundle size reduced by 30-50%
- Faster Time to Interactive (TTI)
- Individual route chunks loaded on demand

**Verification:**
- Run `npm run build` and check `dist/assets/` folder
- Should see multiple JavaScript chunks (e.g., Home-abc123.js, About-def456.js)
- Test page load speed with Chrome DevTools Network tab

---

### 13. Add WebSite Schema with SearchAction
**Time:** 20 minutes | **Impact:** Potential sitelinks search box in Google | **Difficulty:** Easy

**Implementation:**

Add to `index.html` (after existing schemas):

```html
<!-- WebSite Schema with SearchAction -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "BerksAI",
  "url": "https://berksai.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://berksai.com/blog?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}
</script>
```

**Note:** This enables Google to show a search box in your site's search results (if eligible)

---

### 14. Optimize Logo Image
**Time:** 30 minutes | **Impact:** +10-15% header load speed | **Difficulty:** Medium

**Current:** logo.png (97KB PNG)
**Goal:** SVG (scalable, typically 5-15KB) OR WebP (<30KB)

**Option 1: Convert to SVG** (Best for logos)
- If you have access to original design files (AI, Sketch, Figma), export as SVG
- Clean up SVG code with https://jakearchibald.github.io/svgomg/
- SVG benefits: infinite scalability, tiny file size, no blur on retina displays

**Option 2: Compress to WebP**
```bash
cwebp -q 90 public/logo.png -o public/logo.webp
```

**Update Code:**
```jsx
// In src/components/Header.jsx
<img
  src="/logo.svg"  // or logo.webp
  alt="BerksAI"
  width="200"
  height="50"
  className="logo-image"
/>
```

---

## LOW PRIORITY (Nice to Have / Backlog)

### 15. Add BreadcrumbList Schema to Blog Posts
**Time:** 1 hour | **Difficulty:** Easy

Implement breadcrumb navigation and schema markup for blog posts.

---

### 16. Create 2-3 Detailed Case Studies
**Time:** 4-6 hours per case study | **Difficulty:** Medium

Write comprehensive case studies with:
- Client background (anonymized if needed)
- Problem statement
- Solution implemented
- Quantified results (time saved, revenue increase, etc.)
- Client testimonial quote
- Project timeline and investment

---

### 17. Add Privacy Policy & Terms of Service
**Time:** 2-3 hours | **Difficulty:** Easy

Create legal pages (can use generator tools + lawyer review):
- Privacy Policy
- Terms of Service
- Add links to footer

---

### 18. Implement Server-Side Rendering (SSR)
**Time:** 20-40 hours | **Difficulty:** Hard

**Two Options:**

**Option A: Migrate to Next.js**
- Most robust long-term solution
- Automatic SSR/SSG
- Better SEO out of the box
- Requires significant refactoring

**Option B: Add Vite SSR**
- Keep existing Vite setup
- Less invasive changes
- Moderate complexity

**Option C: Use Prerender.io**
- No code changes required
- Middleware service
- Monthly fee ($75-200/mo)

**Recommendation:** Start with Option C (prerender.io) for immediate results, plan migration to Next.js for long-term.

---

### 19. Build Local Backlinks
**Time:** Ongoing | **Difficulty:** Medium

**Strategies:**
1. Join Berks County Chamber of Commerce → directory listing
2. Guest post on local business blogs
3. Sponsor local tech meetups → website mentions
4. Get listed in Reading Eagle business directory
5. Partner with complementary local businesses

**Target:** 10-20 local backlinks in 6 months

---

### 20. Create Video Content
**Time:** Varies | **Difficulty:** Medium-Hard

Create short-form video content:
- "What is AI Automation?" (2-3 minutes)
- Client testimonial videos
- Demo of chatbot functionality
- "AI Tips for Berks County Businesses" series

Post to YouTube + embed on site for:
- Video rich snippets in search
- Higher engagement time
- Additional traffic source

---

## IMPLEMENTATION TIMELINE

### Week 1 (Critical + High Priority - Hours 1-10)
**Focus:** Quick wins with immediate SEO impact

- [ ] Day 1-2: Add missing blog post to sitemap (10 min)
- [ ] Day 2-3: Create og-image.jpg (30 min)
- [ ] Day 3-4: Compress headshot and about-image (30 min)
- [ ] Day 4-5: Add image dimensions to all images (30 min)
- [ ] Day 5-7: Install react-helmet-async and add to all pages (2 hours)
- [ ] Day 7: Add author attribution to blog posts (20 min)

**Expected Impact:** +15-30% traffic, Pass social sharing, Improved CWV

---

### Week 2-3 (Medium Priority - Hours 11-25)
**Focus:** Content expansion and schema implementation

- [ ] Week 2: Expand Tech page content (3 hours)
- [ ] Week 2: Expand Contact page content (2 hours)
- [ ] Week 3: Implement BlogPosting schema on all posts (2 hours)
- [ ] Week 3: Add Person schema to About page (30 min)
- [ ] Week 3: Implement code splitting (3 hours)

**Expected Impact:** +30-60% keyword coverage, Better rich snippets

---

### Week 4-6 (Content & Trust Signals - Hours 26-40)
**Focus:** Building authority and credibility

- [ ] Week 4-5: Create first case study (6 hours)
- [ ] Week 5: Add privacy policy and terms of service (3 hours)
- [ ] Week 6: Add WebSite schema and optimize logo (1 hour)
- [ ] Week 6: Create second case study (6 hours)

**Expected Impact:** +40-80% conversion rate, Improved E-E-A-T

---

### Months 2-3 (Technical Infrastructure - Hours 41-80)
**Focus:** Long-term technical improvements

- [ ] Month 2: Implement SSR or prerendering solution (20-40 hours)
- [ ] Month 2-3: Build local backlink campaign (ongoing)
- [ ] Month 3: Create video content (varies)
- [ ] Month 3: Comprehensive testing and optimization

**Expected Impact:** +100-200% organic traffic, Top 3 local rankings

---

## MEASUREMENT & TRACKING

### KPIs to Monitor

**Organic Traffic:**
- Current baseline: ~50-100 monthly visits (estimated)
- Week 1 target: +15-30%
- Month 1 target: +50-100%
- Month 3 target: +150-300%

**Core Web Vitals:**
- LCP target: <2.5s (currently estimated 3.5-4.5s)
- INP target: <200ms (currently estimated 250-350ms)
- CLS target: <0.1 (currently estimated 0.15-0.25)

**Indexing:**
- Current: 8 pages indexed (1 missing)
- Target: 9/9 pages indexed

**Rankings:**
- "AI consulting Berks County" → Top 3
- "automation services Reading PA" → Top 10
- "chatbot development Pennsylvania" → Top 20
- Blog long-tail keywords → Top 15 average

**Conversions:**
- Form submissions
- Phone calls
- Consultation bookings

### Tools to Use

**Free:**
- Google Search Console (indexing, CWV, search queries)
- Google Analytics 4 (traffic, behavior)
- PageSpeed Insights (performance)
- Google Rich Results Test (schema validation)

**Paid (Optional):**
- Ahrefs or SEMrush ($99-199/mo) - keyword tracking, backlinks
- Screaming Frog SEO Spider ($259/year) - technical crawling

---

## SUPPORT & RESOURCES

### Development Help
If you need development assistance for any of these tasks:
1. React/JavaScript changes: Upwork, Fiverr (estimated $50-150 per task)
2. Image optimization: Fiverr graphics designers ($10-50)
3. Content writing: Local freelance writers ($50-200 per article)

### Testing Tools
- Google Search Console: https://search.google.com/search-console
- PageSpeed Insights: https://pagespeed.web.dev/
- Google Rich Results Test: https://search.google.com/test/rich-results
- Facebook Debugger: https://developers.facebook.com/tools/debug/
- SSL Test: https://www.ssllabs.com/ssltest/

### Learning Resources
- Google SEO Starter Guide: https://developers.google.com/search/docs
- Schema.org Documentation: https://schema.org/
- React Helmet Async Docs: https://github.com/staylor/react-helmet-async

---

## CONCLUSION

This action plan is designed to be implemented incrementally. **Start with the Critical and High priority items** in Week 1 - these will give you the most immediate SEO impact with the least time investment.

The most important first steps are:
1. Fix the missing sitemap entry (10 minutes)
2. Create the og-image (30 minutes)
3. Compress the images (30 minutes)

These three tasks alone will fix critical issues and can be completed in **under 2 hours**.

From there, work through the plan systematically. Don't try to do everything at once - consistent progress over 8-12 weeks will yield better results than attempting massive changes all at once.

**Remember:** SEO is a marathon, not a sprint. These improvements will compound over time, with each fix building on the previous ones.

If you have questions or need clarification on any task, please refer to the full audit report (FULL-AUDIT-REPORT.md) for detailed context.

---

**Good luck with your SEO improvements!**

Generated by: Claude Code SEO Audit System
Date: March 2, 2026
