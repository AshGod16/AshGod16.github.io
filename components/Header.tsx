import Link from "next/link";

export const Header = () => {
    return (
        <header className="py-8">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link href="/" className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity">
                    Akash Godbole
                </Link>
                <nav className="flex gap-6">
                    <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                        Home
                    </Link>
                    <Link href="/writing" className="text-muted-foreground hover:text-primary transition-colors">
                        Writing
                    </Link>
                    <Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                        Projects
                    </Link>
                    <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                        About
                    </Link>
                </nav>
            </div>
        </header>
    );
};
