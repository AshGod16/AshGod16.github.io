import Link from "next/link";

export default function WritingPage() {
    const essays = [
        {
            title: "What Surprised Me Building Production ML Systems",
            date: "October 2025",
            description: "Real-world lessons from scaling biometric systems to 100k users.",
            slug: "#"
        },
        {
            title: "Why Most Machine Learning Systems Fail Quietly",
            date: "August 2025",
            description: "The silent errors that monitoring tools often miss.",
            slug: "#"
        },
        {
            title: "What Engineers Miss When They Become Founders",
            date: "June 2025",
            description: "Technical debt is easy; product debt is fatal.",
            slug: "#"
        }
    ];

    return (
        <main className="container mx-auto px-4 py-16 max-w-2xl">
            <header className="mb-16">
                <h1 className="text-4xl font-bold mb-4">Writing</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                    I write about engineering judgment, scaling machine learning, and what breaks when theory meets production.
                </p>
            </header>

            <div className="space-y-12">
                {essays.map((essay, index) => (
                    <article key={index} className="group cursor-pointer">
                        <Link href={essay.slug} className="block">
                            <h2 className="text-2xl font-semibold mb-2 group-hover:underline decoration-1 underline-offset-4">
                                {essay.title}
                            </h2>
                            <div className="text-sm text-muted-foreground mb-3">{essay.date}</div>
                            <p className="text-muted-foreground leading-relaxed">
                                {essay.description}
                            </p>
                        </Link>
                    </article>
                ))}
            </div>
        </main>
    );
}
