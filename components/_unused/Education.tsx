import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const Education = () => {
    return (
        <section className="py-12 bg-white rounded-xl shadow-sm border border-border/50 mt-8">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold mb-8 text-primary border-b-2 border-accent pb-2 inline-block">Education</h2>
                <div className="space-y-6">
                    <Card className="border-l-4 border-l-accent border-y-0 border-r-0 rounded-none bg-secondary/30">
                        <CardHeader>
                            <CardTitle className="text-xl font-bold text-gray-800">Master of Science (MS) in Computer Science</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Separator className="my-2 bg-accent/20" />
                            <p className="text-lg font-serif pt-2">Michigan State University</p>
                        </CardContent>
                    </Card>
                    <Card className="border-l-4 border-l-accent border-y-0 border-r-0 rounded-none bg-secondary/30">
                        <CardHeader>
                            <CardTitle className="text-xl font-bold text-gray-800">Bachelor of Science (BS) in Computer Science</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Separator className="my-2 bg-accent/20" />
                            <p className="text-lg font-serif pt-2">Michigan State University</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
