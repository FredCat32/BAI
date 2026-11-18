import { Helmet } from 'react-helmet-async'
import './Tech.css'

const tools = [
  {
    name: 'Microsoft Copilot',
    text: 'Copilot inside Word, Excel, Outlook, Teams, and PowerPoint. Where it saves time, where it needs a human check, and how to prompt it for your actual documents and data.',
  },
  {
    name: 'ChatGPT',
    text: 'Team and enterprise use of ChatGPT, including custom GPTs, file analysis, and shared prompt templates.',
  },
  {
    name: 'Claude and Claude Cowork',
    text: 'Claude for writing, analysis, and long documents, and Cowork for handing multi-step desktop tasks to an AI agent while keeping a person in charge.',
  },
  {
    name: 'Google Gemini',
    text: 'Gemini across Google Workspace for teams living in Gmail, Docs, Sheets, and Drive.',
  },
  {
    name: 'Grok and Grok-based bots',
    text: 'Grok and the bots built on it, including when they are a reasonable fit and what to check before relying on them.',
  },
  {
    name: 'GitHub Copilot and coding assistants',
    text: 'AI-assisted development tools for teams that write software or maintain internal scripts and spreadsheets.',
  },
  {
    name: 'Perplexity and AI search',
    text: 'AI-assisted research, with a habit of checking sources before anything reaches a client or a report.',
  },
  {
    name: 'Chatbots and custom assistants',
    text: 'Assistants trained on your own documents and policies for customer questions or internal help.',
  },
  {
    name: 'Machine learning on your data',
    text: 'Forecasting, classification, and anomaly detection built from your own records, when the problem calls for it.',
  },
  {
    name: 'Automation and integrations',
    text: 'Connecting the tools you already use so repetitive steps run without someone copying data by hand.',
  },
  {
    name: 'Security and usage policy',
    text: 'What can and cannot be pasted into AI tools, how to handle client data, and a written policy your team can follow.',
  },
]

function Tech() {
  return (
    <div className="tech-page">
      <Helmet>
        <title>AI Tools We Train On & Support | Copilot, ChatGPT, Claude | BerksAI</title>
        <meta
          name="description"
          content="On-site training and support for the AI tools your business already uses: Microsoft Copilot, ChatGPT, Claude, Gemini, Grok, and more. Based in Oley, PA."
        />
        <link rel="canonical" href="https://berksai.com/tech" />
        <meta property="og:title" content="AI Tools We Train On & Support | BerksAI" />
        <meta property="og:description" content="On-site training and support for Microsoft Copilot, ChatGPT, Claude, Gemini, Grok, and more." />
        <meta property="og:url" content="https://berksai.com/tech" />
      </Helmet>
      <div className="container">
        <div className="tech-header">
          <h1>The tools we train on and support</h1>
          <p className="tech-intro">
            Your team probably has access to several of these already. We help them use
            the ones that fit, and skip the ones that don't.
          </p>
        </div>

        <div className="tech-grid">
          {tools.map((tool) => (
            <div className="tech-card" key={tool.name}>
              <h3>{tool.name}</h3>
              <p>{tool.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tech
