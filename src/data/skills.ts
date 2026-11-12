/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SKILLS — grouped technical inventory.
 *
 *  Rendered as editorial rows (label on the left, inline items on the right),
 *  not a wall of badges. Edit the items freely; the layout adapts.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export interface SkillGroup {
  id: string;
  /** Category label, shown in monospace on the left */
  label: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: "programming",
    label: "Programming",
    items: ["Python", "TypeScript", "React.js", "SQL"],
  },
  {
    id: "ai-ml",
    label: "AI / Machine Learning",
    items: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Computer Vision",
      "LLMs",
      "RAGs",
      "AI Agents",
      "Agentic AI",
      "MCP",
      "Prompt Engineering",
      "System Design",
      "A2A",
      "Multi-Agent Systems",
    ],
  },
  {
    id: "frameworks",
    label: "AI Frameworks",
    items: [
      "TensorFlow",
      "Keras",
      "Scikit-learn",
      "Hugging Face Transformers",
      "LangChain",
      "LlamaIndex",
      "LangGraph",
      "Strands",
      "Pydantic AI",
      "CrewAI",
      "Google ADK",
      "Flask",
      "FastAPI",
      "FastMCP",
    ],
  },
  {
    id: "data",
    label: "Vector & Databases",
    items: [
      "FAISS",
      "ChromaDB",
      "Qdrant",
      "Milvus",
      "PGVector",
      "Elasticsearch",
      "Pinecone",
      "SQL Server",
      "MySQL",
      "PostgreSQL",
      "Supabase",
    ],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    items: [
      "AWS",
      "GCP",
      "Amazon Bedrock",
      "Amazon Bedrock AgentCore",
      "Docker",
      "Kubernetes",
      "Git",
      "GitHub Actions",
      "GitHub Workflows",
      "CI/CD",
    ],
  },
  {
    id: "evaluation",
    label: "Evaluation & Observability",
    items: [
      "Amazon Bedrock Evaluations",
      "DeepEval",
      "Langfuse",
      "Arize Phoenix",
      "OpenTelemetry",
      "Pydantic Logfire",
    ],
  },
  {
    id: "languages",
    label: "Languages Known",
    items: ["English", "Gujarati", "Hindi"],
  },
];
