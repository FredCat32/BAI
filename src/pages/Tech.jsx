import { useState } from 'react'
import './Tech.css'

function Tech() {
  return (
    <div className="tech-page">
      <div className="container">
        <div className="tech-header">
          <h1>Our Technology Stack</h1>
        </div>

        <div className="tech-grid">
          <div className="tech-card">
            <h3>n8n Workflow Automation</h3>
            <p>
              Build sophisticated automation workflows that eliminate repetitive tasks, 
              connect your existing tools, and scale your operations without adding headcount.
            </p>
          </div>

          <div className="tech-card">
            <h3>Vector Databases & Embeddings</h3>
            <p>
              Transform your documents, customer data, and knowledge bases into intelligent, 
              searchable resources. Your team gets instant answers from company information 
              without manual searching.
            </p>
          </div>

          <div className="tech-card">
            <h3>Large Language Models (LLMs)</h3>
            <p>
              Deploy custom AI assistants powered by GPT-4, Claude, and open-source models 
              to handle customer inquiries, generate content, and automate decision-making.
            </p>
          </div>

          <div className="tech-card">
            <h3>API Integration Layer</h3>
            <p>
              Connect any tools in your tech stack—CRMs, databases, communication platforms—
              into unified, automated workflows that work seamlessly together.
            </p>
          </div>

          <div className="tech-card">
            <h3>Custom AI Agents</h3>
            <p>
              Purpose-built agents that handle specific business functions: data entry, 
              email triage, report generation, lead qualification, and more.
            </p>
          </div>

          <div className="tech-card">
            <h3>Cloud Infrastructure</h3>
            <p>
              Secure, scalable deployment on modern cloud platforms ensuring reliability, 
              data privacy, and performance as your automation needs grow.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tech