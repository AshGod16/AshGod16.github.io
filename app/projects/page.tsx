import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects", description: "LxOS and other projects by Akash Godbole.", alternates: { canonical: "/projects" },
};

const projects = [
  { name: "LxOS", href: "https://lxos.ai", description: "I’m building end-to-end, AI-native legal software for small and midsize law firms, with the goal of helping them do more legal work with the same team." },
  { name: "Resume Analyzer", href: "https://github.com/AshGod16/resume_analyzer", description: "A resume analysis tool built with Gemini." },
  { name: "Voice Assistant", href: "https://github.com/AshGod16/voice-assistant", description: "A small voice assistant using open-source natural language tools." },
  { name: "Assembly Line Analytics", href: "https://github.com/AshGod16/predictive-maintenance", description: "A dashboard for exploring production trends and predicting equipment failures using simulated data." },
  { name: "Weather", href: "https://github.com/AshGod16/weather-app", description: "A weather app built with React and OpenWeather." },
];

export default function ProjectsPage() {
  return (
    <main id="main">
      <header className="page-heading"><h1>Projects</h1><p className="muted">What I’m building, and a few earlier projects.</p></header>
      <ul className="project-list">
        {projects.map((project) => <li key={project.href}><h2><a href={project.href}>{project.name} <ArrowUpRight className="link-icon" aria-hidden="true" /></a></h2><p className="muted">{project.description}</p></li>)}
      </ul>
      <p className="end-note">More on <a href="https://github.com/AshGod16">GitHub</a>.</p>
    </main>
  );
}
