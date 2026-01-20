import { Card, CardContent } from "@/components/ui/card";

export const Publications = () => {
    const publications = [
        {
            authors: ["S. A. Grosz", "A. Godbole", "A. K. Jain"],
            title: "Mobile Contactless Palmprint Recognition: Use of Multiscale, Multimodel, Embeddings",
            venue: "IEEE Transanctions on Information Forensics and Security (TIFS), 2024"
        },
        {
            authors: ["A. Godbole", "S.A. Grosz", "A. K. Jain"],
            title: "Contactless Palmprint Recognition for Children",
            venue: "IEEE International Conference of the Biometrics Special Interest Group (BIOSIG), 2023"
        },
        {
            authors: ["A. Godbole", "S. A. Grosz", "K. Nandakumar", "A. K. Jain"],
            title: "On Demographic Bias in Fingerprint Recognition",
            venue: "International Joint Conference on Biometrics, 2022"
        },
        {
            authors: ["A. Godbole", "K. Nandakumar", "A. K. Jain"],
            title: "Learning an Ensemble of Deep Fingerprint Representations",
            venue: "2022"
        }
    ];

    const formatAuthors = (authors: string[]) => {
        return authors.map((author, i) => {
            const isMe = author.includes("A. Godbole") || author.includes("Godbole");
            return (
                <span key={i}>
                    {isMe ? <strong><em>{author}</em></strong> : author}
                    {i < authors.length - 1 ? ", " : ""}
                </span>
            )
        })
    }

    return (
        <section className="py-12 bg-white rounded-xl shadow-sm border border-border/50 mt-8">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold mb-8 text-primary border-b-2 border-accent pb-2 inline-block">Publications</h2>
                <div className="space-y-4">
                    {publications.map((pub, index) => (
                        <Card key={index} className="border-l-4 border-l-accent border-y-0 border-r-0 rounded-none bg-secondary/30">
                            <CardContent className="pt-6">
                                <p className="text-lg leading-relaxed font-serif text-gray-800">
                                    {formatAuthors(pub.authors)}. "{pub.title}", {pub.venue}.
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
