import { AnimationContainer, MaxWidthWrapper } from "@/components";
import { Button } from "@/components/ui/button";
import { LampContainer } from "@/components/ui/lamp";
import MagicBadge from "@/components/ui/magic-badge";
import { EXPERIENCE_HIGHLIGHTS } from "@/utils/constants/misc"; // Changed
import { ArrowRightIcon, MailIcon } from "lucide-react"; // Changed
import Image from "next/image";
import Link from "next/link";

// Renaming page to reflect portfolio context, e.g., SkillsAndExpertisePage
const SkillsAndExpertisePage = () => {
    return (
        <>
            <MaxWidthWrapper>
                <AnimationContainer delay={0.1} className="w-full">
                    <div className="flex flex-col items-center justify-center py-10 max-w-xl mx-auto">
                        <MagicBadge title="Skills" />
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
                            Core Competencies & Technical Skills
                        </h1>
                        <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
                            A diverse skill set encompassing engineering management, hardware design, and community leadership.
                        </p>
                        <div className="flex items-center justify-center gap-x-4 mt-8">
                            <Button size="sm" asChild>
                                <Link href="/"> {/* Link to homepage or relevant section */}
                                    View Portfolio Home
                                </Link>
                            </Button>
                            <Button size="sm" variant="outline" asChild>
                                <a href="https://www.linkedin.com/in/sheri-sepeczi-94914515/" target="_blank" rel="noopener noreferrer">
                                    See on LinkedIn
                                </a>
                            </Button>
                        </div>
                    </div>
                </AnimationContainer>
                <hr className="border-border/30 my-10" />
                {/* Renaming to reflect portfolio context */}
                <AnimationContainer delay={0.3} className="w-full">
                    <div className="py-14">
                        <div className="mx-auto px-4 md:px-8">
                            <h2 className="text-center text-2xl md:text-3xl font-semibold font-heading text-foreground">
                                Areas of Expertise
                            </h2>
                            <div className="mt-10">
                                <div className="flex flex-wrap justify-center items-center gap-4 py-8">
                                    {/* Manually listing some key skills based on LinkedIn, wrapped in MagicBadge */}
                                    {["Engineering Management", "RF/Microwave Hardware Design", "Hardware Development & Testing", "Community Leadership", "Project Management", "Organizational Development"].map((skill) => (
                                        <MagicBadge key={skill} title={skill} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimationContainer>
            </MaxWidthWrapper>
            <MaxWidthWrapper className="pt-20">
                <AnimationContainer delay={0.4} className="w-full">
                    <LampContainer className="max-w-2xl mx-auto">
                        <div className="flex flex-col items-center justify-center relative w-full text-center">
                            <h2 className="bg-gradient-to-br from-neutral-300 to-neutral-500 py-4 bg-clip-text text-center text-4xl font-semibold font-heading tracking-tight text-transparent md:text-7xl mt-8">
                                Driving Innovation Through Expertise
                            </h2>
                            <p className="text-muted-foreground mt-6 max-w-lg mx-auto text-base md:text-lg">
                                My leadership skills and technical experience are geared towards delivering impactful results and fostering growth.
                            </p>
                            <div className="mt-6">
                                <Button asChild>
                                    <a href="mailto:sepeczi@ameritech.net" className="flex items-center">
                                        Discuss Opportunities
                                        <MailIcon className="w-4 h-4 ml-2" />
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </LampContainer>
                </AnimationContainer>
            </MaxWidthWrapper>
        </>
    )
};

export default SkillsAndExpertisePage;
