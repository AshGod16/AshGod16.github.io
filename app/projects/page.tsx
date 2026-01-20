import { Badge } from "@/components/ui/badge";

export default function ProjectsPage() {
    const projects = [
        {
            title: "Biometric Authentication at Scale",
            problem: "Existing solutions failed in low-connectivity environments with variable lighting.",
            impact: "Built a system serving 100,000+ users with 99.9% accuracy.",
            learned: "Latency matters more than model size; optimized on-device inference to <100ms.",
            tech: ["Python", "TensorFlow", "Edge Computing"]
        },
        {
            title: "Automated Data Pipeline Orchestrator",
            problem: "Manual data cleaning was consuming 40% of engineering time.",
            impact: "Reduced data prep time by 90% and eliminated human-error injection.",
            learned: "Idempotency is the most critical feature of data pipelines.",
            tech: ["Apache Airflow", "Docker", "AWS"]
        }
    ];

    return (
        <main className="container mx-auto px-4 py-16 max-w-2xl">
            <header className="mb-16">
                <h1 className="text-4xl font-bold mb-4">Projects</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                    Selected work focusing on real-world constraints and engineering trade-offs.
                </p>
            </header>

            <div className="space-y-16">
                {projects.map((project, index) => (
                    <section key={index} className="border-l-2 border-muted pl-6">
                        <h2 className="text-2xl font-bold mb-4">{project.title}</h2>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-1">The Problem</h3>
                                <p className="leading-relaxed">{project.problem}</p>
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-1">Why It Mattered</h3>
                                <p className="leading-relaxed">{project.impact}</p>
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-1">Technical Insight</h3>
                                <p className="leading-relaxed">{project.learned}</p>
                            </div>

                            <div className="flex gap-2">
                                {project.tech.map((t) => (
                                    <Badge key={t} variant="secondary" className="font-normal">
                                        {t}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </main>
    );
}
