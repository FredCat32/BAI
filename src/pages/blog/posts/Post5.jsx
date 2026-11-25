import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import BlogAuthor from '../../../components/BlogAuthor'

const ext = { target: '_blank', rel: 'noopener noreferrer' }

function Post5() {
  return (
    <>
      <Helmet>
        <title>Enabling AI Use Inside Your Company: What the Research Says | BerksAI Blog</title>
        <meta
          name="description"
          content="What published research shows about AI and workplace quality and efficiency, why your employees are probably already using AI, and practical steps to enable it safely."
        />
        <link rel="canonical" href="https://berksai.com/blog/enabling-ai-use-inside-your-company" />
        <meta property="og:title" content="Enabling AI Use Inside Your Company: What the Research Says" />
        <meta property="og:description" content="What the research says about AI, quality, and efficiency at work, and practical steps to enable it safely." />
        <meta property="og:url" content="https://berksai.com/blog/enabling-ai-use-inside-your-company" />
        <meta property="og:type" content="article" />
      </Helmet>

      <header className="blog-post-header">
        <h1>Enabling AI Use Inside Your Company: What the Research Says About Quality and Efficiency</h1>
        <div className="blog-post-meta">
          <span>November 18, 2026</span> • <span>8 min read</span>
        </div>
      </header>

      <BlogAuthor />

      <div className="blog-post-content">
        <p>
          If you run a business, there's a decent chance your employees are already using AI at work, whether or not you've said they can. The useful question isn't "should we allow AI?" It's "how do we get the benefits without the mess?" Below is what published research says about quality and efficiency, what it doesn't say, and the practical steps I'd take to enable AI use inside a company.
        </p>

        <h2>What the research shows</h2>
        <p>
I'm sticking to published research and linking every source at the end. Two are peer-reviewed journal articles; the others are a working paper, a preprint, and an industry survey, and I'll flag which is which. Where a result has limits, I'll say so.
        </p>

        <h3>Customer support: faster, and biggest gains for newer people</h3>
        <p>
          Brynjolfsson, Li, and Raymond studied 5,179 customer support agents after a generative AI assistant was rolled out. Access to the tool raised productivity, measured as issues resolved per hour, by 14% on average, and by 34% for novice and low-skilled workers. The effect on experienced, highly skilled workers was minimal. The authors also report that AI assistance improved customer sentiment and increased employee retention.<sup>[1]</sup>
        </p>
        <p>
          The authors suggest the tool spreads the practices of the best workers to everyone else. That's an important idea for a small business: written-down good habits are something AI can help you share.
        </p>

        <h3>Professional writing: less time, better quality</h3>
        <p>
          Noy and Zhang ran a preregistered experiment with 453 college-educated professionals doing occupation-specific writing tasks, with half randomly given access to ChatGPT. Average time taken fell by 40% and output quality, as graded by evaluators, rose by 18%. Workers with weaker baseline skills benefited the most. Two weeks later, people who had used ChatGPT in the experiment were twice as likely to be using it in their real job, and 1.6 times as likely after two months.<sup>[2]</sup>
        </p>

        <h3>Knowledge work: a big gain, with a catch</h3>
        <p>
          Dell'Acqua and colleagues, working with Boston Consulting Group, ran an experiment with 758 consultants using GPT-4. On 18 realistic tasks within the AI's capabilities, people using AI completed 12.2% more tasks, finished them 25.1% faster on average, and produced significantly better-quality results.<sup>[3]</sup>
        </p>
        <p>
          The catch matters more than the headline. For one complex task deliberately chosen to fall outside what the AI could do well, consultants using AI were 19% less likely to produce a correct solution than those working without it. The authors call this a "jagged technological frontier": AI helps a lot on some tasks and hurts on others that look similar. The study also included a group that got an overview of prompt engineering, though the abstract doesn't report that group's results, so I won't claim any.<sup>[3]</sup>
        </p>
        <p>
          The practical point: people need to learn <em>which</em> tasks to trust AI with and when to check its work. That's a training problem, not a software problem.
        </p>

        <h3>Software development: faster on a defined task</h3>
        <p>
          In a controlled experiment, developers given GitHub Copilot completed a task (writing an HTTP server in JavaScript) 55.8% faster than the control group. The authors report a 95% confidence interval of 21% to 89%, which is wide, and it was a single task with 95 recruited developers, 35 of whom completed it.<sup>[4]</sup> Treat it as a direction, not a number to plan around.
        </p>

        <h3>How far to trust these numbers</h3>
        <ul>
          <li>These are experiments on specific tasks, and one large rollout at a single company. Your results will depend on your work.</li>
          <li>Several used earlier models than what's available now. Tools change quickly.</li>
          <li>Most measure speed and graded quality on bounded tasks, not long-term business outcomes like revenue.</li>
        </ul>

        <h2>Your employees are probably already using AI</h2>
        <p>
          The 2024 Work Trend Index from Microsoft and LinkedIn surveyed 31,000 people across 31 countries. It reported that 75% of knowledge workers use AI at work, and that 78% of AI users bring their own AI tools to work. That figure was 80% at small and medium-sized companies. Of the people using AI at work, 52% were reluctant to admit to using it for their most important tasks.<sup>[5]</sup>
        </p>
        <p>
          Training is lagging: only 39% of AI users globally said they'd received AI training from their company, and 59% of leaders said they worry about quantifying AI's productivity gains.<sup>[5]</sup> One caveat: Microsoft sells Copilot, so read the survey with that in mind. But the pattern matches what I'd expect: people adopt tools faster than companies write guidance.
        </p>
        <p>
          The report also notes that unsanctioned use puts company data at risk.<sup>[5]</sup> That's the real cost of doing nothing. It isn't that AI exists in your company; it's that it exists with no shared habits, no approved tools, and no rules about what goes into them.
        </p>

        <h2>Six practical steps to enable it</h2>

        <h3>1. Pick a few real tasks and measure first</h3>
        <p>
          Choose three to five repetitive tasks, such as drafting customer emails, summarizing meetings, preparing proposals, or cleaning up reports. Time them and note how much rework they usually need <em>before</em> you introduce AI. Without a baseline you can't tell whether it helped. This also addresses the "can't quantify the gains" worry leaders report.<sup>[5]</sup>
        </p>

        <h3>2. Give people approved tools</h3>
        <p>
          If staff are bringing their own accounts, offer a sanctioned alternative with business-grade terms and data controls. Check what your existing subscriptions (Microsoft 365, Google Workspace) already include before buying anything new.
        </p>

        <h3>3. Write a one-page usage policy</h3>
        <p>
          Cover what may be pasted into AI tools (and what may not: client confidential data, credentials, regulated information), who to ask when unsure, and that a person remains responsible for anything sent out. For a framework to borrow from, NIST publishes a voluntary AI Risk Management Framework, plus a Generative AI profile (NIST-AI-600-1) that lists risks specific to generative AI.<sup>[6]</sup> A small business doesn't need all of that, but it's a good checklist.
        </p>

        <h3>4. Train on your real work, not generic examples</h3>
        <p>
          The research above points the same way: the biggest gains went to less experienced workers, and results vary by task. Training that uses your own emails, documents, and procedures teaches people the specific prompts and checks that fit your business. Build a shared prompt library so results don't depend on who happens to be good at it.
        </p>

        <h3>5. Build in verification</h3>
        <p>
          Given the "jagged frontier" finding, make checking a habit. Assume AI output is a first draft. Verify facts, numbers, and anything customer-facing. Teach people which task types AI tends to get wrong.
        </p>

        <h3>6. Measure again, then adjust</h3>
        <p>
          After a month or two, re-time the same tasks and compare. Track rework, errors caught, and how often the tools are actually used. Keep what works, drop what doesn't, and expand carefully.
        </p>

        <h2>Where I come in</h2>
        <p>
          This is what BerksAI's on-site training is built around: hands-on sessions using your team's actual work, a shared prompt library, a clear usage policy, and a way to measure whether it's paying off. I'll tell you honestly if a particular use isn't worth it.
        </p>
        <p>
          If you'd like to talk it through, <Link to="/contact">get in touch</Link>. The first conversation is free.
        </p>

        <h2>Sources</h2>
        <ol>
          <li>
            Brynjolfsson, E., Li, D., &amp; Raymond, L. R. "Generative AI at Work." <em>The Quarterly Journal of Economics</em> 140(2): 889–942 (2025). NBER Working Paper 31161 (2023). [Peer-reviewed journal article] <a href="https://www.nber.org/papers/w31161" {...ext}>nber.org/papers/w31161</a>
          </li>
          <li>
            Noy, S., &amp; Zhang, W. "Experimental evidence on the productivity effects of generative artificial intelligence." <em>Science</em> 381(6654): 187–192 (2023). DOI: 10.1126/science.adh2586. [Peer-reviewed journal article] <a href="https://www.science.org/doi/10.1126/science.adh2586" {...ext}>science.org/doi/10.1126/science.adh2586</a>
          </li>
          <li>
            Dell'Acqua, F., McFowland III, E., Mollick, E., Lifshitz-Assaf, H., Kellogg, K. C., Rajendran, S., Krayer, L., Candelon, F., &amp; Lakhani, K. R. "Navigating the Jagged Technological Frontier: Field Experimental Evidence of the Effects of Artificial Intelligence on Knowledge Worker Productivity and Quality." Harvard Business School Working Paper (2023). [Working paper] <a href="https://www.hbs.edu/faculty/Pages/item.aspx?num=64700" {...ext}>hbs.edu/faculty/Pages/item.aspx?num=64700</a>
          </li>
          <li>
            Peng, S., Kalliamvakou, E., Cihon, P., &amp; Demirer, M. "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot." arXiv:2302.06590 (2023). [Preprint; several authors are affiliated with GitHub and Microsoft, which make Copilot] <a href="https://arxiv.org/abs/2302.06590" {...ext}>arxiv.org/abs/2302.06590</a>
          </li>
          <li>
            Microsoft and LinkedIn. "AI at Work Is Here. Now Comes the Hard Part." 2024 Work Trend Index Annual Report, May 8, 2024. [Industry survey] <a href="https://www.microsoft.com/en-us/worklab/work-trend-index/ai-at-work-is-here-now-comes-the-hard-part" {...ext}>microsoft.com/en-us/worklab/work-trend-index</a>
          </li>
          <li>
            National Institute of Standards and Technology. "AI Risk Management Framework" (AI RMF 1.0, January 26, 2023) and "Generative Artificial Intelligence Profile" (NIST-AI-600-1, July 26, 2024). [Government guidance; voluntary] <a href="https://www.nist.gov/itl/ai-risk-management-framework" {...ext}>nist.gov/itl/ai-risk-management-framework</a>
          </li>
        </ol>

        <p>
          <strong>Matthew Irving</strong><br />
          Founder, BerksAI<br />
          matthew.irving@berksai.com<br />
          (267) 357-8007
        </p>
      </div>
    </>
  )
}

export default Post5
