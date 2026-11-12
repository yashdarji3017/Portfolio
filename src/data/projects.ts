/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  PROJECTS — sample content, meant to be replaced.
 *
 *  The six entries below are realistic *templates* written in the voice of
 *  the site, one per required category. They deliberately:
 *    - claim no metrics, benchmarks, users, or revenue
 *    - claim no production deployments ("status" is honest: prototype, in
 *      development, design phase, open source)
 *    - explain problem → solution → decisions → implementation →
 *      challenges → evaluation, and omit `results` entirely until *you*
 *      have verified numbers to put there
 *
 *  Replace them with your real work, keep the same shape, and the layout
 *  (one featured project + horizontal rows) takes care of itself. Set
 *  `featured: true` on the one project that deserves the biggest stage.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export type ProjectCategory =
  | "Agentic AI System"
  | "RAG Application"
  | "Multi-Agent System"
  | "MCP Integration"
  | "AI Evaluation Platform"
  | "Computer Vision Application";

export interface Project {
  /** Stable id — used as the React key */
  id: string;
  /** Row index shown in the UI ("01" is usually the featured project) */
  index: string;
  name: string;
  /** One-line summary for compact rows */
  tagline: string;
  category: ProjectCategory;
  /** Year or range, e.g. "2025" or "2024–2025" */
  year: string;
  /** Honest lifecycle status — never "in production" unless it truly is */
  status: string;
  /** What problem this solves and why it matters */
  problem: string;
  /** The solution at a system level — what it does and how */
  solution: string;
  /** 2–3 engineering decisions, each with the trade-off it weighed */
  decisions: string[];
  /** What made (or makes) the technical implementation interesting */
  implementation: string;
  /** 1–3 honest difficulties — the parts that were genuinely hard */
  challenges: string[];
  /** How the work is evaluated — the harness, never invented numbers */
  evaluation: string;
  /** ONLY when verified: real, checkable outcomes. Omit otherwise. */
  results?: string;
  stack: string[];
  /** ASCII architecture sketch — rendered as a monospace diagram */
  architecture?: string[];
  github?: string;
  demo?: string;
  /** The one project that gets the expanded layout */
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "shopaso",
    index: "01",
    name: "ShopASO",
    tagline:
      "Shopify App Store keyword tracking, competitor benchmarking, and autonomous ASO audit agent with real-time scraping.",
    category: "Agentic AI System",
    year: "2026",
    status: "Production-ready",
    problem:
      "Shopify app developers and agencies lack automated tools to track search rankings, monitor competitor listing shifts, and conduct systematic App Store Optimization (ASO) audits without tedious manual checking.",
    solution:
      "ShopASO automates app store intelligence from ingestion to actionable recommendations. A Playwright headless scraping pipeline captures live search rankings and automated screenshots, while an OpenAI-powered audit agent built with Pydantic AI evaluates listing quality, detects ranking fluctuations, and delivers structured optimization insights. Interactive Recharts dashboards and real-time Slack alerts keep teams updated.",
    decisions: [
      "Headless Playwright scraping engine over fragile third-party scrapers — produces verifiable screenshots and authoritative live ranking verification.",
      "Pydantic AI agent for structured audits — guarantees strict schema validation for downstream rendering instead of unpredictable markdown.",
      "Multi-tenant RBAC with Redis caching over PostgreSQL — maintains data isolation across agencies while keeping analytics queries sub-second.",
    ],
    implementation:
      "Engineered as a production FastAPI backend paired with a React.js and Vite frontend. Secured with OAuth and JWT authentication, backed by PostgreSQL and Redis, and instrumented end-to-end with OpenTelemetry and Pydantic Logfire for distributed tracing.",
    challenges: [
      "Overcoming dynamic Shopify App Store DOM changes and rate throttling without compromising scheduled scrape frequencies.",
      "Aggregating high-frequency competitor trend metrics across thousands of keyword queries without degrading dashboard load times.",
    ],
    evaluation:
      "Scraper uptime and execution latency monitored via OpenTelemetry; audit recommendation quality evaluated against standard ASO heuristics with Pydantic Logfire trace monitoring.",
    stack: [
      "Python",
      "FastAPI",
      "React.js",
      "Vite",
      "Playwright",
      "Recharts",
      "OpenAI",
      "Pydantic AI",
      "PostgreSQL",
      "Redis",
      "OAuth",
      "JWT",
      "Slack",
      "OpenTelemetry",
      "Pydantic Logfire",
    ],
    architecture: [
      "shopify app store",
      " |-- scraper ........ playwright headless engine + automated screenshots",
      " |-- analytics ...... real-time ranking verification + recharts trends",
      " |-- audit agent .... pydantic ai + openai listing optimization",
      " |-- backend & db ... fastapi + postgresql + redis caching",
      " +-- observability .. opentelemetry + pydantic logfire + slack alerts",
    ],
    github: "https://github.com/yashdarji3017",
    featured: true,
  },
  {
    id: "notionmind",
    index: "02",
    name: "NotionMind FastMCP Gateway",
    tagline:
      "FastMCP Gateway connecting hierarchical Notion documentation with AI agents, IDEs, and multimodal semantic search.",
    category: "MCP Integration",
    year: "2026",
    status: "Completed",
    problem:
      "Hierarchical internal documentation in Notion is trapped in silos — invisible to developer IDEs like Cursor and Claude Desktop, and unable to search across embedded diagrams and screenshots.",
    solution:
      "NotionMind establishes an end-to-end FastMCP Gateway exposing Notion workspaces directly as Model Context Protocol tools. It features a recursive Notion crawler, a multimodal embedding pipeline using OpenAI CLIP in ChromaDB, and a Pydantic AI + Google Gemini RAG agent that dynamically routes collections and validates citations.",
    decisions: [
      "FastMCP protocol standards over custom REST APIs — enables instant, zero-config integration into Cursor, Claude Desktop, and standard MCP agents.",
      "OpenAI CLIP multimodal embeddings in ChromaDB — enables simultaneous semantic retrieval across textual documentation and embedded diagram graphics.",
      "OAuth 2.0 PKCE and Google SSO with granular RBAC — preserves workspace document access controls across all MCP tool calls.",
    ],
    implementation:
      "A recursive Notion crawler extracts nested sub-pages and image blocks while preserving parent-child lineage. The Pydantic AI agent dynamically routes queries across ChromaDB collections, with LLM calls traced through Arize Phoenix, OpenTelemetry, and Pydantic Logfire.",
    challenges: [
      "Preserving deep document hierarchy and breadcrumbs during recursive chunking without overflowing LLM context windows.",
      "Maintaining low-latency tool responses across IDE-initiated MCP tool handshakes.",
    ],
    evaluation:
      "Retrieval precision and citation faithfulness verified with Arize Phoenix traces; MCP tool schemas tested with automated golden payloads.",
    stack: [
      "Python",
      "FastMCP",
      "MCP",
      "Pydantic AI",
      "Google Gemini",
      "ChromaDB",
      "OpenAI CLIP",
      "Streamlit",
      "OAuth 2.0",
      "JWT",
      "Arize Phoenix",
      "OpenTelemetry",
      "Pydantic Logfire",
    ],
    architecture: [
      "notion workspace",
      " |-- crawler ........ recursive hierarchy parser + block extractor",
      " |-- embeddings ..... openai clip multimodal text & image vectors",
      " |-- vector store ... chromadb dynamic collection routing",
      " |-- fastmcp core ... mcp tool registry (cursor / claude desktop)",
      " +-- rag agent ...... pydantic ai + gemini / arize phoenix & logfire",
    ],
    github: "https://github.com/yashdarji3017",
  },
  {
    id: "claimsense",
    index: "03",
    name: "ClaimSense AI",
    tagline:
      "AI-powered underwriting assistant normalizing multi-sheet health-claim Excel files into validated structured JSON.",
    category: "RAG Application",
    year: "2025–2026",
    status: "Completed",
    problem:
      "Health-claim underwriting is bogged down by messy, multi-sheet spreadsheets with inconsistent column headers, missing entries, and mixed English/Spanish terminology that break conventional ETL pipelines.",
    solution:
      "ClaimSense AI serves as an autonomous underwriting assistant. Powered by Claude Sonnet 4.5, it intelligently identifies columns, maps multilingual schemas, recovers missing fields, and outputs standardized, validated JSON to downstream insurance systems.",
    decisions: [
      "Claude Sonnet 4.5 for complex reasoning over tabular structures — reliably resolves merged cells and irregular column layouts.",
      "Two-phase processing: LLM extraction followed by deterministic Pandas/OpenPyXL business-rule validation to eliminate financial hallucinations.",
      "Row-level audit reporting to provide transparent lineage for every extracted claim value.",
    ],
    implementation:
      "Built with Python, Flask, Pandas, OpenPyXL, and Streamlit. Features a robust data validation engine, resilient missing-field recovery algorithms, and comprehensive audit logs for underwriting teams.",
    challenges: [
      "Normalizing diverse multi-tab spreadsheet layouts where headers shift positions and alternate between English and Spanish medical terms.",
      "Ensuring zero tolerance for generative hallucination in monetary values and policy codes.",
    ],
    evaluation:
      "Row-level schema conformance tests and reconciliation audit logs ensuring 100% adherence to downstream insurance API contracts.",
    stack: [
      "Python",
      "Claude Sonnet 4.5",
      "Flask",
      "Pandas",
      "OpenPyXL",
      "Streamlit",
      "REST APIs",
      "LLM",
      "Data Validation",
    ],
    architecture: [
      "multi-sheet excel claims",
      " |-- ingestion ...... pandas & openpyxl parsing engine",
      " |-- extraction ..... claude sonnet 4.5 multilingual schema mapping",
      " |-- validation ..... business-rule assertions + missing-field recovery",
      " |-- ui & audit ..... streamlit underwriter interface + row-level logs",
      " +-- output ......... validated json to downstream rest apis",
    ],
    github: "https://github.com/yashdarji3017",
  },
  {
    id: "docvision",
    index: "04",
    name: "DocVision AI",
    tagline:
      "FastAPI multimodal document intelligence microservice with visual grounding, defect localization, and evidence QA.",
    category: "Computer Vision Application",
    year: "2025",
    status: "Completed",
    problem:
      "Technical documents, engineering schematics, and invoices contain dense spatial arrangements and visual defects that standard OCR pipelines fail to parse or localize accurately.",
    solution:
      "DocVision AI is an asynchronous FastAPI document intelligence microservice. Integrating Anthropic Claude through Amazon Bedrock alongside AWS Textract, it performs multimodal document analysis, OCR, configurable technical summarization, and generates visual bounding boxes for defects using spatial reasoning with grid overlays.",
    decisions: [
      "Amazon Bedrock + Anthropic Claude for vision-language inference with enterprise-grade AWS security and scalability.",
      "Grid overlay spatial reasoning technique to dramatically improve coordinate alignment and bounding box precision for defect localization.",
      "Hybrid approach: AWS Textract for raw tabular extraction combined with Claude VLM for visual grounding and evidence-backed QA.",
    ],
    implementation:
      "Engineered with FastAPI for asynchronous PDF processing, structured Pydantic response models, configurable summarization levels, and OpenTelemetry instrumentation.",
    challenges: [
      "Generating sub-second, pixel-accurate bounding box coordinates on high-resolution multi-page technical schematics.",
      "Balancing OCR extraction latency and multimodal token budgets on high-volume document batches.",
    ],
    evaluation:
      "Bounding box Intersection-over-Union (IoU) benchmarks for visual grounding and answer faithfulness scoring on annotated document sets.",
    stack: [
      "Python",
      "FastAPI",
      "Anthropic Claude",
      "Amazon Bedrock",
      "AWS Textract",
      "OCR",
      "Multimodal LLMs",
      "PDF Processing",
      "Vision-Language AI",
    ],
    architecture: [
      "technical documents / pdfs",
      " |-- preprocessor ... pdf rendering + grid overlay coordinate mapping",
      " |-- ocr & vlm ...... aws textract + bedrock anthropic claude",
      " |-- grounding ...... spatial reasoning & defect bounding box generation",
      " |-- api service .... fastapi async endpoints with pydantic validation",
      " +-- observability .. opentelemetry tracing + evidence-backed qa logs",
    ],
    github: "https://github.com/yashdarji3017",
  },
  {
    id: "chainiq",
    index: "05",
    name: "ChainIQ",
    tagline:
      "FastMCP server with structured tool registration, dynamic orchestration, and context-aware Milvus document retrieval.",
    category: "MCP Integration",
    year: "2025",
    status: "Completed",
    problem:
      "Hardcoded tool definitions in LLM workflows break down as capabilities grow, causing models to hallucinate tool parameters and struggle with context-aware documentation retrieval.",
    solution:
      "ChainIQ delivers a high-performance FastMCP server featuring a dynamic tool registry. It enables LLMs to discover tools using semantic search, vector similarity, and tool chaining, backed by context-aware document retrieval powered by Milvus.",
    decisions: [
      "FastMCP framework for typed schema validation, automated documentation generation, and seamless client connectivity.",
      "Milvus vector database for high-throughput similarity search over large enterprise document and tool catalogs.",
      "Dynamic tool chaining architecture that allows an LLM to discover and execute multi-step tool graphs autonomously.",
    ],
    implementation:
      "Developed with LLM-compatible tool interfaces, structured logging, health check endpoints, latency tracking, and robust error handling for production-ready observability.",
    challenges: [
      "Preventing recursive invocation loops and infinite call graphs during complex autonomous tool chaining.",
      "Maintaining sub-50ms tool discovery latency across growing collections of registered MCP tools.",
    ],
    evaluation:
      "Automated contract tests on golden tool calls, load testing under concurrent MCP client requests, and latency tracking via structured logging.",
    stack: [
      "Python",
      "FastMCP",
      "MCP",
      "Milvus",
      "Vector Search",
      "Semantic Retrieval",
      "LLM Tool Calling",
      "REST APIs",
      "Structured Logging",
    ],
    architecture: [
      "mcp client (claude / cursor / agents)",
      " |-- fastmcp core ... typed tool registration + health monitoring",
      " |-- tool registry .. semantic vector search & similarity discovery",
      " |-- retrieval ...... milvus context-aware document store",
      " |-- orchestration .. dynamic tool chaining & parameter validation",
      " +-- logging ........ structured audit logging & latency metrics",
    ],
    github: "https://github.com/yashdarji3017",
  },
  {
    id: "intellicode",
    index: "06",
    name: "IntelliCode Assistant",
    tagline:
      "Context-aware VS Code extension powered by FastAPI, hybrid Milvus code search, and GPT-5 prompt orchestration.",
    category: "Agentic AI System",
    year: "2025",
    status: "Completed",
    problem:
      "Developers lose productivity switching contexts between editors and external documentation, while standard coding assistants lack whole-repository structural awareness and hybrid code search.",
    solution:
      "IntelliCode Assistant is an AI-powered VS Code extension backed by a FastAPI backend. It indexes repositories into Zilliz Cloud/Milvus using hybrid semantic search and orchestrates prompt context into GPT-5 for file-level refactoring and directory graph insights.",
    decisions: [
      "Hybrid search (dense vector embeddings + lexical indexing) on Zilliz Cloud/Milvus for exact symbol and conceptual code matches.",
      "Directory graph interface to represent repository topology and dependency hierarchies visually to the LLM.",
      "FastAPI streaming backend for low-latency token delivery directly into the VS Code editor panel.",
    ],
    implementation:
      "Custom VS Code TypeScript extension communicating with a Python FastAPI server, indexing GitHub repositories, and orchestrating context-injected GPT-5 suggestions.",
    challenges: [
      "Parsing large Abstract Syntax Trees (ASTs) and selecting minimal sufficient context within token boundaries.",
      "Keeping indexed repository embeddings synchronized with local working-copy file changes in real time.",
    ],
    evaluation:
      "Code suggestion acceptance rates, AST syntax validation on generated refactorings, and hybrid retrieval hit-rate benchmarks on GitHub repositories.",
    stack: [
      "Python",
      "FastAPI",
      "VS Code Extension",
      "GPT-5",
      "Zilliz Cloud",
      "Milvus",
      "Embeddings",
      "Hybrid Search",
      "RAG",
      "GitHub",
    ],
    architecture: [
      "vs code ide (typescript extension)",
      " |-- editor client .. directory graph interface + code diff viewer",
      " |-- backend api .... fastapi streaming server + ast context parser",
      " |-- index store .... zilliz cloud / milvus hybrid semantic search",
      " |-- prompt engine .. prompt orchestration injecting code context into gpt-5",
      " +-- integration .... real-time github repo sync & automated refactoring",
    ],
    github: "https://github.com/yashdarji3017",
  },
];
