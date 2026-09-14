import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About", description: "About Akash Godbole, building LxOS, AI-native legal software for small and midsize law firms.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main id="main">
      <header className="page-heading"><h1>About</h1></header>
      <div className="about-intro">
        <div className="prose">
          <p>I’m Akash, a technical founder building LxOS: end-to-end, AI-native legal software for small and midsize law firms.</p>
          <p>The goal is to help firms do more legal work with the same team. My focus is on turning that ambition into a product that fits the way lawyers work.</p>
        </div>
        <Image src="/profile_pic.jpg" alt="Akash Godbole in graduation regalia" width={144} height={176} sizes="144px" className="portrait" />
      </div>
      <div className="prose">
        <p>My technical background is in computer vision and biometric recognition, including research at Michigan State University. That experience shapes how I approach building: paying attention to the data, the constraints, and whether something works in practice.</p>
        <p>This website is where I write about entrepreneurship, engineering, and what I’m learning as I build.</p>
        <h2>Get in touch</h2>
        <p>If something here resonates, <a href="mailto:akash.godbole16@gmail.com">send me a note</a>. You can also find me on <a href="https://github.com/AshGod16">GitHub</a> and <a href="https://linkedin.com/in/akashgodbole">LinkedIn</a>.</p>
      </div>
    </main>
  );
}
