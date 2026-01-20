import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export const Projects = () => {
    const projects = [
        {
            title: "AI powered Resume Analyzer",
            link: "https://github.com/AshGod16/resume_analyzer",
            description: "A free resume analysis tool built on Google's Gemini 1.5. 136 active users. Live link available here https://resume-analyzer-blond.vercel.app/"
        },
        {
            title: "AI powered Brain Cancer Detection",
            link: "https://github.com/AshGod16/BrainCancerDetection/tree/main",
            description: "Fullstack web app for the early detection brain tumors in MRI images."
        },
        {
            title: "Voice Assistant",
            link: "https://github.com/AshGod16/voice-assistant",
            description: "A simple voice assistant built using open source NLP libraries. Can fetch YouTube videos, announce weather and stock market news."
        },
        {
            title: "Assembly Line Analytics Dashboard",
            link: "https://github.com/AshGod16/predictive-maintenance",
            description: "A live dashboard aimed to optimize bottlenecks on an assembly line. Uses simulated data to analyze trends and predict failures. https://resume-analyzer-blond.vercel.app/"
        },
        {
            title: "Responsive Weather App",
            link: "https://github.com/AshGod16/weather-app",
            description: "A beautiful yet simple weather app made with React, Tailwind CSS, Lucide-React, OpenWeatherAPI, and React Hooks"
        }
    ];

    return (
        <section className="py-12 bg-white rounded-xl shadow-sm border border-border/50 mt-8">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold mb-8 text-primary border-b-2 border-accent pb-2 inline-block">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((proj, index) => (
                        <a key={index} href={proj.link} target="_blank" rel="noopener noreferrer" className="block h-full no-underline hover:scale-105 transition-transform duration-200">
                            <Card className="h-full bg-secondary/30 hover:bg-secondary/50 border-none shadow-sm hover:shadow-md cursor-pointer transition-all">
                                <CardHeader>
                                    <CardTitle className="text-xl font-bold text-gray-800">{proj.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-700 font-serif leading-relaxed">
                                        {proj.description.replace(/(https?:\/\/[^\s]+)/g, '')}
                                    </p>
                                    {proj.description.match(/(https?:\/\/[^\s]+)/g) && (
                                        <span className="text-primary text-sm mt-2 block underline">View Live Demo</span>
                                    )}
                                </CardContent>
                            </Card>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};
