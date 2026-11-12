/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  PROFILE — the single place to personalize this portfolio.
 *
 *  Replace every value below with your real details. Nothing else in the
 *  codebase needs to change: the navigation, hero, contact section, footer,
 *  SEO metadata, JSON-LD, sitemap and robots.txt all read from here.
 *
 *  Values wrapped in [brackets] are intentional placeholders — the site
 *  deliberately renders them until you fill them in, so nothing fake is
 *  ever presented as fact.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const profile = {
  /** Display name — shown in the navbar, hero, footer and SEO metadata */
  name: "Yash Darji",

  /** Role / title — shown under the name in the hero */
  role: "AI/ML Engineer",

  /** One-line value proposition — the hero statement */
  headline:
    "Building production-ready GenAI applications, LLM agents, and scalable intelligent systems.",

  /** Supporting paragraph — what you actually work on */
  description:
    "AI/ML Engineer with 2.5+ years of experience building production-ready GenAI applications, LLM-powered agents, RAG systems, and scalable backend services. Experienced in Python, FastAPI, LangChain, LangGraph, Pydantic AI, MCP, vector databases, AWS, and Docker with a focus on scalability, reliability, and observability.",

  /** Where you are based — shown in hero, footer, metadata */
  location: "Surat, Gujarat",

  /** Direct contact phone */
  phone: "+91 7069603017",

  /** Timezone label for the footer */
  timezone: "IST (UTC+5:30)",

  /** Availability status — e.g. "Open to opportunities" or "Currently working" */
  availability: "Open to opportunities",

  /** Contact + social links */
  email: "darjiy712@gmail.com",
  github: "https://github.com/yashdarji3017",
  linkedin: "https://www.linkedin.com/in/yash-darji",

  /** Personal photo / avatar */
  avatarUrl: "/avatar.jpg",

  /** Path to the resume file in /public (replace public/resume.pdf) */
  resumeUrl: "/resume.pdf",

  /** Production URL — used for SEO metadata, sitemap and robots.txt */
  siteUrl: "https://yashdarji.dev",

  /** Languages known */
  languages: ["English", "Gujarati", "Hindi"] as const,

  /** About section — 2–3 short paragraphs */
  about: [
    "I'm an AI/ML Engineer with 2.5+ years of experience engineering production-ready GenAI applications, LLM-powered autonomous agents, and high-throughput retrieval systems. Based in Surat, Gujarat, my journey spans from full-stack software development to designing agentic architectures, intelligent document-processing pipelines, and multi-agent systems.",
    "I focus on the engineering discipline behind intelligent systems: robust schema contracts, Model Context Protocol (MCP) tool registrations, vector similarity search, hybrid retrieval, and deterministic tool calling. I believe production AI succeeds when retrieval is scored rather than guessed, and when probabilistic models are wrapped in resilient, observable software.",
    "In production, reliability and observability are non-negotiable. I actively instrument systems with OpenTelemetry, Pydantic Logfire, Arize Phoenix, and automated evaluation frameworks like DeepEval and Amazon Bedrock Evaluations. When a pipeline fails, I solve it with better architectures, structured fallbacks, and systematic evaluation loops.",
  ],
} as const;

export type Profile = typeof profile;
