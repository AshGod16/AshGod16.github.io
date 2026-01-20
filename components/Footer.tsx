export const Footer = () => {
    return (
        <footer className="py-12 border-t border-border/50">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground gap-4">
                <div>
                    © {new Date().getFullYear()} Akash Godbole. All rights reserved.
                </div>
                <div className="flex gap-6">
                    <a href="https://linkedin.com/in/akashgodbole" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                        LinkedIn
                    </a>
                    <a href="https://github.com/AshGod16" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                        GitHub
                    </a>
                    <a href="mailto:akash.godbole16@gmail.com" className="hover:text-foreground transition-colors">
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
};
