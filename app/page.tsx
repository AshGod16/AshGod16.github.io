import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="container mx-auto px-4 flex flex-col justify-center min-h-[80vh] max-w-3xl">
      <section className="space-y-8">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-tight">
          I build and think about AI systems that work in the real world.
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
          I write about engineering judgment, scaling machine learning, and what breaks when theory meets production.
        </p>

        <div className="flex gap-4 pt-4">
          <Button asChild size="lg" variant="default" className="text-lg px-8 py-6">
            <Link href="/writing">Writing</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6">
            <Link href="/projects">Projects</Link>
          </Button>
          <Button asChild size="lg" variant="ghost" className="text-lg px-8 py-6">
            <Link href="/about">About</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
