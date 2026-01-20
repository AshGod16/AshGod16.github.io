import Image from "next/image";

export default function AboutPage() {
    return (
        <main className="container mx-auto px-4 py-16 max-w-2xl">
            <header className="mb-12">
                <h1 className="text-4xl font-bold mb-8">About</h1>
                <div className="relative w-full aspect-[21/9] mb-8 overflow-hidden rounded-lg bg-muted">
                    <Image
                        src="/profile_pic.jpg"
                        alt="Akash Godbole Workspace"
                        fill
                        className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
                        priority
                    />
                </div>
            </header>

            <div className="prose dark:prose-invert prose-lg max-w-none mb-16">
                <p>
                    I build bridges between theoretical machine learning and messy reality.
                </p>
                <p>
                    My background in biometrics and research taught me that the hardest part of AI isn't the model architecture—it's the data infrastructure, the deployment constraints, and the user trust. I care deeply about building systems that are robust, explainable, and actually solve the problem they were designed for.
                </p>
                <p>
                    Currently, I'm exploring how large language models can be effectively grounded in enterprise data without hallucinating, and building tools to make that process transparent.
                </p>
            </div>

            <section>
                <h2 className="text-2xl font-bold mb-6">Brief Timeline</h2>
                <div className="border-l border-muted ml-3 space-y-8">
                    <div className="relative pl-8">
                        <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background" />
                        <h3 className="font-semibold">Building...</h3>
                        <div className="text-sm text-muted-foreground">2025 — Present</div>
                        <p className="mt-1 text-muted-foreground">Experimenting with new ideas and shipping products.</p>
                    </div>
                    <div className="relative pl-8">
                        <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-muted-foreground/30 ring-4 ring-background" />
                        <h3 className="font-semibold">Founder @ Luminosity Chat</h3>
                        <div className="text-sm text-muted-foreground">2025 — 2025</div>
                        <p className="mt-1 text-muted-foreground">Built and launched a real-time chat application.</p>
                    </div>
                    <div className="relative pl-8">
                        <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-muted-foreground/30 ring-4 ring-background" />
                        <h3 className="font-semibold">ML Engineer @ Five</h3>
                        <div className="text-sm text-muted-foreground">2024 — 2025</div>
                        <p className="mt-1 text-muted-foreground">Engineered scalable machine learning solutions.</p>
                    </div>
                    <div className="relative pl-8">
                        <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-muted-foreground/30 ring-4 ring-background" />
                        <h3 className="font-semibold">Computer Vision Researcher @ MSU</h3>
                        <div className="text-sm text-muted-foreground">2021 — 2024</div>
                        <p className="mt-1 text-muted-foreground">Conducted research in computer vision and pattern recognition.</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
