import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Experience = () => {
    const experiences = [
        {
            title: "Machine Learning Engineer",
            company: "Stealth Startup",
            period: "July 2024 - Present",
            description: "Leading research in contactless biometric recognition algorithms, achieving benchmark performance in palmprint identification."
        },
        {
            title: "Graduate Research Assistant",
            company: "Michigan State University",
            period: "Aug 2021 - May 2024",
            description: "Published 4 papers on Biometric Recognition in IEEE TIFS and international conferences, advancing research in palmprint and fingerprint recognition."
        },
        {
            title: "Graduate Teaching Assistant",
            company: "Michigan State University",
            period: "Jan 2024 - May 2024",
            description: "Led and mentored 35 MBA students in mastering Business Analytics and Data Science fundamentals."
        },
        {
            title: "Software Engineering Intern",
            company: "Technomentum",
            period: "May 2020 - July 2020",
            description: "Designed a full-stack application to automate tax withholdings across 50 states, abstracting complex taxation laws."
        }
    ];

    return (
        <section className="py-12 bg-white rounded-xl shadow-sm border border-border/50">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold mb-8 text-primary border-b-2 border-accent pb-2 inline-block">Experience</h2>
                <div className="space-y-6">
                    {experiences.map((exp, index) => (
                        <Card key={index} className="border-l-4 border-l-accent border-y-0 border-r-0 rounded-none shadow-none bg-secondary/30">
                            <CardHeader className="pb-2">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
                                    <div>
                                        <CardTitle className="text-xl font-bold text-gray-800">{exp.title}</CardTitle>
                                        <CardDescription className="text-primary font-medium mt-1">@ {exp.company}</CardDescription>
                                    </div>
                                    <Badge variant="outline" className="w-fit text-muted-foreground bg-white">{exp.period}</Badge>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-700 leading-relaxed font-serif text-lg">{exp.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
