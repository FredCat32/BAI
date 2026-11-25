// Content for the service-area pages. Each location needs its own genuinely
// local copy; do not clone a page and swap the town name (Google treats that
// as doorway pages). No invented clients or results.
const locations = [
  {
    slug: 'ai-training-reading-pa',
    city: 'Reading',
    title: 'AI Training & Consulting in Reading, PA | BerksAI',
    description:
      'On-site AI prompt training and consulting for businesses in Reading, Wyomissing, West Reading, and the rest of Berks County. Copilot, ChatGPT, Claude, and Gemini, measured before and after.',
    h1: 'AI training and consulting in Reading, PA',
    lede:
      'BerksAI is based in Oley, about 20 minutes from downtown Reading. We come to your office in Reading, Wyomissing, West Reading, Shillington, or anywhere else in the county and train your team to get real results from the AI tools you already pay for.',
    local: [
      'Before starting BerksAI, Matthew Irving worked as a developer and systems analyst at Reading Truck, building software for the production floor and training the people who used it. That is the same job we do now with AI: fit the tool to the work, then make sure people can actually use it.',
      'Reading has a mix of manufacturers, healthcare providers, professional services firms, and nonprofits. Most of them now have AI built into software they already license, like Microsoft 365 or Google Workspace, and few have had anyone show their staff how to use it on their own documents.',
    ],
    startingPoints: [
      ['Manufacturing and distribution', 'Work instructions, quality write-ups, supplier emails, and pulling numbers out of reports.'],
      ['Professional services', 'Proposals, client letters, meeting notes, and summarizing long documents.'],
      ['Healthcare and senior care', 'Policies, staff communication, and family emails, with clear rules on what patient or resident information never goes into an AI tool.'],
      ['Nonprofits', 'Grant drafts, donor letters, board reports, and volunteer communication.'],
    ],
    faq: [
      ['Do you come to our office in Reading?', 'Yes. On-site training is our main service, and Reading is close to home. We can also run sessions remotely or split between the two.'],
      ['We already have Microsoft Copilot. Is training worth it?', 'Often, yes. Copilot is only as useful as the requests people give it. We train on your own emails, documents, and spreadsheets so your team sees results on its real work, and we measure before and after so you can judge for yourself.'],
      ['Can you help with more than training?', 'Yes. When training points to something worth building, such as an automated workflow, a custom assistant on your own documents, or a machine learning model on your data, we can build that too.'],
    ],
  },
  {
    slug: 'ai-training-lancaster-pa',
    city: 'Lancaster',
    title: 'AI Training & Consulting in Lancaster, PA | BerksAI',
    description:
      'On-site AI prompt training and consulting for Lancaster and Lancaster County businesses. Train your team on Copilot, ChatGPT, Claude, and Gemini using your own work, measured before and after.',
    h1: 'AI training and consulting in Lancaster, PA',
    lede:
      'BerksAI works with businesses in Lancaster city and across Lancaster County, from Ephrata and Lititz to Elizabethtown. We come to you for on-site training, a little over an hour from our base in Oley, and we work remotely between visits.',
    local: [
      'Lancaster County runs on a lot of family-owned and closely held companies: manufacturers, food producers, contractors, healthcare providers, and hospitality businesses. Many of them have small office teams that handle a large amount of paperwork and email.',
      'That is where AI training tends to pay off first. The tools are usually already there, in Microsoft 365, Google Workspace, or a ChatGPT subscription. What is missing is a few hours of hands-on practice on the documents your team handles every week.',
    ],
    startingPoints: [
      ['Family-owned manufacturers', 'Quotes, purchase orders, quality documentation, and customer emails.'],
      ['Food and agricultural businesses', 'Supplier communication, product descriptions, compliance paperwork, and summarizing regulations.'],
      ['Contractors and trades', 'Estimates, bid write-ups, job notes, and scheduling emails.'],
      ['Hospitality and tourism', 'Guest communication, reviews and replies, and marketing copy, with a person reviewing anything that goes out.'],
    ],
    faq: [
      ['Do you travel to Lancaster for on-site training?', 'Yes. We schedule on-site sessions in Lancaster County and can handle follow-up sessions and questions remotely.'],
      ['Our office staff is small. Is training still worth it?', 'Small teams often benefit the most, because a few people carry a lot of the paperwork. We start with the tasks that take the most time and measure them before and after.'],
      ['What if AI is not a good fit for us?', 'Then we will say so. Part of the process is recommending a next step, and sometimes the right step is to keep doing things the way you do them now.'],
    ],
  },
  {
    slug: 'ai-training-kutztown-pa',
    city: 'Kutztown',
    title: 'AI Training & Consulting in Kutztown, PA | BerksAI',
    description:
      'On-site AI prompt training and consulting for businesses in Kutztown, Fleetwood, Hamburg, and northern Berks County. Practical training on the AI tools you already pay for.',
    h1: 'AI training and consulting in Kutztown and northern Berks',
    lede:
      'Kutztown is about 20 minutes from our base in Oley. BerksAI provides on-site AI training and consulting for businesses in Kutztown, Fleetwood, Hamburg, Topton, and the rest of northern Berks County.',
    local: [
      'Northern Berks is mostly small businesses: Main Street shops and restaurants, farms and agricultural suppliers, contractors, and service businesses that grew up around Kutztown University. Owners often handle the office work themselves, after hours.',
      'For a small business, the goal of AI training is simple: get the paperwork and email done faster, with fewer mistakes, using tools you may already have. We keep it practical and skip anything that will not save you time.',
    ],
    startingPoints: [
      ['Owner-operated shops and restaurants', 'Customer replies, social posts, menus and product descriptions, and supplier emails.'],
      ['Farms and agricultural businesses', 'Record keeping, supplier and buyer communication, and summarizing program rules and paperwork.'],
      ['Contractors and service businesses', 'Estimates, invoices, follow-up emails, and scheduling.'],
      ['Businesses near the university', 'Hiring posts, student-staff training materials, and seasonal customer communication.'],
    ],
    faq: [
      ['Is this only for larger companies?', 'No. Sessions can be one-on-one with an owner or built for a small team. We focus on the tasks that take up your week.'],
      ['Do we need to buy new software?', 'Usually not. Most businesses already have access to an AI assistant through Microsoft 365, Google Workspace, or a free or low-cost ChatGPT, Claude, or Gemini plan. We help you use what you have before recommending anything new.'],
      ['How do we get started?', 'Call or email for a free first conversation. We will talk through what you use today and whether training makes sense.'],
    ],
  },
]

export default locations
