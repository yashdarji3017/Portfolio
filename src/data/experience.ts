/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  EXPERIENCE — roles and education.
 *
 *  Every entry below is a deliberate placeholder. Replace the bracketed
 *  values with your real history — nothing fake is ever presented as fact
 *  on this site, so an unfilled entry renders its brackets until you edit it.
 *
 *  Writing tips for the highlights:
 *    - Lead with the system, not the title: what it did, who it served.
 *    - Name the decision you owned and the trade-off you weighed.
 *    - Describe how the work was verified (evals, traces, review) —
 *      never invent metrics you can't back up.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export interface Role {
  /** Unique key for rendering */
  id: string;
  /** Job title, e.g. "AI Engineer" */
  title: string;
  /** Company name — use "[Company Name]" until you fill it in */
  company: string;
  /** Optional company website — makes the company a link */
  url?: string;
  /** Period as displayed, e.g. "2023 — Present" or "[Start Year] — [End Year]" */
  period: string;
  /** Optional location line, e.g. "Berlin, Germany" or "Remote" */
  location?: string;
  /** One or two sentences on the product, the team, and what you owned */
  summary: string;
  /** 2–4 concrete lines: systems built, decisions owned, how work was verified */
  highlights: string[];
  /** Technologies that mattered in this role (join with " / " when rendered) */
  stack: string[];
}

export interface Education {
  /** Unique key for rendering */
  id: string;
  /** Degree, e.g. "B.Sc. Computer Science" */
  degree: string;
  /** Institution name */
  school: string;
  /** Period as displayed, e.g. "2016 — 2020" */
  period: string;
  /** Optional one-line note (thesis, focus area). Omit if not needed. */
  note?: string;
}

export const roles: Role[] = [
  {
    id: "webcontrive",
    title: "AI/ML Engineer",
    company: "WebContrive Pvt. Ltd.",
    period: "July 2026 — Present",
    location: "Surat, Gujarat",
    summary:
      "Leading the design and delivery of production-ready GenAI applications, AI agents, and RAG systems integrated into scalable cloud backends.",
    highlights: [
      "Developed production-ready GenAI applications, AI agents, and RAG systems using Python, FastAPI, LangChain, Pydantic AI, and vector databases.",
      "Built AI-powered solutions involving MCP (Model Context Protocol), LLM tool calling, intelligent retrieval, multimodal document processing, and workflow automation.",
      "Integrated AWS AI services, PostgreSQL, Redis, Docker, and LLM APIs into scalable backend systems.",
      "Implemented LLM evaluation and observability using OpenTelemetry, Pydantic Logfire, and evaluation frameworks.",
    ],
    stack: [
      "Python",
      "FastAPI",
      "LangChain",
      "Pydantic AI",
      "MCP",
      "AWS Bedrock",
      "PostgreSQL",
      "Redis",
      "Docker",
      "OpenTelemetry",
      "Pydantic Logfire",
    ],
  },
  {
    id: "bitcoding",
    title: "AI/ML Developer",
    company: "BitCoding Solutions Pvt. Ltd.",
    period: "January 2025 — June 2026",
    location: "Surat, Gujarat",
    summary:
      "Built LLM-driven applications, conversational AI systems, and semantic knowledge retrieval workflows backed by embeddings and vector databases.",
    highlights: [
      "Developed LLM-powered applications, RAG pipelines, conversational AI systems, and AI agents using Python and modern GenAI frameworks.",
      "Built document-processing and knowledge-retrieval workflows using embeddings, vector databases, semantic search, and LLM-based reasoning.",
      "Developed REST APIs using FastAPI/Flask and integrated AI workflows with databases and external services.",
      "Worked with LangChain, LangGraph, Hugging Face, Milvus, ChromaDB, and cloud AI services to deliver scalable AI solutions.",
    ],
    stack: [
      "Python",
      "FastAPI",
      "Flask",
      "LangChain",
      "LangGraph",
      "Hugging Face",
      "Milvus",
      "ChromaDB",
      "Vector Search",
    ],
  },
  {
    id: "karon",
    title: "Full Stack Developer Intern",
    company: "Karon Infotech",
    period: "December 2022 — April 2023",
    location: "Surat, Gujarat",
    summary:
      "Developed full-stack web applications, interactive user interfaces, and backend API services.",
    highlights: [
      "Developed and maintained full-stack web applications using Python, React.js, and backend APIs.",
      "Implemented frontend interfaces, REST APIs, database operations, and application workflows.",
      "Collaborated with team members to troubleshoot issues and deliver application features within project requirements.",
    ],
    stack: [
      "Python",
      "React.js",
      "REST APIs",
      "SQL",
      "Full-Stack Development",
    ],
  },
];

export const education: Education[] = [
  {
    id: "edu-msc",
    degree: "Master of Science in Artificial Intelligence and Machine Learning",
    school: "Veer Narmad South Gujarat University - Surat",
    period: "2023 — 2025",
    note: "Advanced specialization in Machine Learning, Deep Learning, NLP, Computer Vision, and Generative AI systems.",
  },
  {
    id: "edu-bca",
    degree: "Bachelor Of Computer Application",
    school: "Sutex Bank College of Computer Applications and Science - Surat",
    period: "2020 — 2023",
    note: "Core coursework in Computer Applications, Software Development, Data Structures, and Database Systems.",
  },
];
