import { Eye, Fingerprint, Image as ImageIcon, Languages, ClipboardList, TrendingUp, FlaskConical } from "lucide-react";

/* eslint-disable @next/next/no-img-element */

export const Skills = () => {
    return (
        <section className="py-12 bg-white rounded-xl shadow-sm border border-border/50 mt-8">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold mb-8 text-primary border-b-2 border-accent pb-2 inline-block">Skills & Expertise</h2>

                <div className="space-y-12">
                    {/* Programming Languages */}
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-border/40">
                        <h3 className="text-xl font-semibold text-secondary-foreground mb-6 border-b-2 border-accent inline-block pb-2">Programming Languages & Tools</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-6 justify-items-center">
                            <SkillItem name="Python" icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />} />
                            <SkillItem name="C/C++" icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" />} />
                            <SkillItem name="TypeScript" icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TS" />} />
                            <SkillItem name="React" icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" />} />
                            <SkillItem name="Node JS" icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" alt="Node" />} />
                            <SkillItem name="JavaScript" icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JS" />} />
                            <SkillItem name="AWS" icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" alt="AWS" />} />
                        </div>
                    </div>

                    {/* ML Tools */}
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-border/40">
                        <h3 className="text-xl font-semibold text-secondary-foreground mb-6 border-b-2 border-accent inline-block pb-2">Machine Learning Tools and Frameworks</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center">
                            <SkillItem name="PyTorch" icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" alt="PyTorch" />} />
                            <SkillItem name="TensorFlow" icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" alt="TensorFlow" />} />
                            <SkillItem name="Scikit-Learn" icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" alt="Scikit" />} />
                            <SkillItem name="Keras" icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original-wordmark.svg" alt="Keras" />} />
                        </div>
                    </div>

                    {/* Applied AI */}
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-border/40">
                        <h3 className="text-xl font-semibold text-secondary-foreground mb-6 border-b-2 border-accent inline-block pb-2">Applied AI Skills</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center">
                            <SkillItem name="Computer Vision" icon={<Eye className="w-8 h-8 text-accent" />} />
                            <SkillItem name="Biometrics" icon={<Fingerprint className="w-8 h-8 text-accent" />} />
                            <SkillItem name="Image Processing" icon={<ImageIcon className="w-8 h-8 text-accent" />} />
                            <SkillItem name="NLP" icon={<Languages className="w-8 h-8 text-accent" />} />
                        </div>
                    </div>

                    {/* Database */}
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-border/40">
                        <h3 className="text-xl font-semibold text-secondary-foreground mb-6 border-b-2 border-accent inline-block pb-2">Database Technologies</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center">
                            <SkillItem name="SQL" icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="SQL" />} />
                            <SkillItem name="NoSQL" icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="NoSQL" />} />
                            <SkillItem name="GraphQL" icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" alt="GraphQL" />} />
                            <SkillItem name="MySQL" icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />} />
                        </div>
                    </div>

                    {/* Research */}
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-border/40">
                        <h3 className="text-xl font-semibold text-secondary-foreground mb-6 border-b-2 border-accent inline-block pb-2">Research & Management</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center">
                            <SkillItem name="Project Management" icon={<ClipboardList className="w-8 h-8 text-accent" />} />
                            <SkillItem name="Data Interpretation" icon={<TrendingUp className="w-8 h-8 text-accent" />} />
                            <SkillItem name="Quantitative Research" icon={<FlaskConical className="w-8 h-8 text-accent" />} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const SkillItem = ({ name, icon }: { name: string, icon: React.ReactNode }) => {
    return (
        <div className="flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-200">
            <div className="w-12 h-12 mb-2 flex items-center justify-center [&>img]:w-full [&>img]:h-full [&>img]:object-contain">
                {icon}
            </div>
            <span className="text-sm font-medium text-gray-700">{name}</span>
        </div>
    )
}
