/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  WRITING — technical notes and drafts.
 *
 *  Everything below is intentionally labeled a *draft*: no fake publications,
 *  no fake dates in the past pretending to be launched posts. When you
 *  actually publish a piece, set status to "published" and add its href —
 *  the row becomes a link automatically.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export interface WritingNote {
  title: string;
  /** ISO date (YYYY-MM-DD) */
  date: string;
  /** Reading time in minutes */
  readingTime: number;
  status: "draft" | "published";
  /** Optional URL once the piece is actually published */
  href?: string;
}

export const writingNotes: WritingNote[] = [
  {
    title: "Evaluation-first RAG: designing retrieval you can actually measure",
    date: "2026-10-14",
    readingTime: 8,
    status: "draft",
  },
  {
    title: "Planners, routers, and the case against one giant prompt",
    date: "2026-09-30",
    readingTime: 6,
    status: "draft",
  },
  {
    title: "What to instrument in an LLM application — and what to do with it",
    date: "2026-09-12",
    readingTime: 7,
    status: "draft",
  },
  {
    title: "Multi-agent systems without the theater",
    date: "2026-08-25",
    readingTime: 9,
    status: "draft",
  },
  {
    title: "MCP in practice: exposing tools your agents won't misuse",
    date: "2026-08-08",
    readingTime: 5,
    status: "draft",
  },
];
