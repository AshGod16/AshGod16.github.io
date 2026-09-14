import type { Metadata } from "next";
import { WritingList } from "@/components/WritingList";
import { getPublishedPosts } from "@/lib/writing";

export const metadata: Metadata = {
  title: "Writing",
  description: "Essays, short notes, and other things worth sharing by Akash Godbole.",
  alternates: { canonical: "/writing" },
};

export default function WritingPage() {
  return (
    <main id="main">
      <header className="page-heading"><h1>Writing</h1><p className="muted">Essays, short notes, and other things worth sharing.</p></header>
      <WritingList posts={getPublishedPosts()} />
    </main>
  );
}
