import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { WritingList } from "@/components/WritingList";
import { getPublishedPosts } from "@/lib/writing";

export default function Home() {
  const posts = getPublishedPosts();
  return (
    <main id="main">
      <section className="intro">
        <h1>I’m Akash.</h1>
        <p>I’m building LxOS, AI-native legal software for small and midsize law firms. The goal is to help firms do more legal work with the same team.</p>
        <p>I write about building a company, making things, and what I’m learning along the way.</p>
        <Link className="quiet-link" href="/about">A little more about me <ArrowRight className="link-icon" aria-hidden="true" /></Link>
      </section>
      <section className="home-section" aria-labelledby="writing-heading">
        <div className="section-heading">
          <h2 id="writing-heading">Writing</h2>
          {posts.length > 0 && <Link className="quiet-link" href="/writing">All writing <ArrowRight className="link-icon" aria-hidden="true" /></Link>}
        </div>
        <WritingList posts={posts.slice(0, 5)} />
      </section>
      <section className="home-section" aria-labelledby="elsewhere-heading">
        <h2 id="elsewhere-heading">Elsewhere</h2>
        <p className="muted">Some <Link href="/projects">things I’ve built</Link>, and more code on <a href="https://github.com/AshGod16">GitHub</a>. You can reach me by <a href="mailto:akash.godbole16@gmail.com">email</a>.</p>
      </section>
    </main>
  );
}
