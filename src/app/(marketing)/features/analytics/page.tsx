import { AnimationContainer, MaxWidthWrapper } from "@/components";
import { Button } from "@/components/ui/button";
import { LampContainer } from "@/components/ui/lamp";
import MagicBadge from "@/components/ui/magic-badge";
import { EXPERIENCE_HIGHLIGHTS } from "@/utils/constants/misc"; // Changed from COMPANIES
import { ArrowRightIcon, MailIcon } from "lucide-react"; // Added MailIcon
import Image from "next/image";
import Link from "next/link";

// Renaming page to reflect portfolio context, e.g., ProfessionalExperiencePage
const ProfessionalExperiencePage = () => {
    return (
        <>
            <MaxWidthWrapper>
                <AnimationContainer delay={0.1} className="w-full">
                    <div className="flex flex-col items-center justify-center py-10 max-w-lg mx-auto">
                        <MagicBadge title="Experience" />
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
                            Professional Journey & Accomplishments
                        </h1>
                        <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
                            A proven track record in engineering leadership and technical innovation across various roles and industries.
                        </p>
                        <div className="flex items-center justify-center gap-x-4 mt-8">
                            <Button size="sm" asChild>
                                <a href="https://www.linkedin.com/in/sheri-sepeczi-94914515/" target="_blank" rel="noopener noreferrer">
                                    View Full Resume
                                </a>
                            </Button>
                            <Button size="sm" variant="outline" asChild>
                                <Link href="#contact"> {/* Assuming a contact section exists on the main page */}
                                    Get in Touch
                                </Link>
                            </Button>
                        </div>
                    </div>
                </AnimationContainer>
                <AnimationContainer delay={0.2} className="w-full">
                    {/* Placeholder for a more relevant image or graphic for experience */}
                    <div className="w-full flex max-w-4xl py-10 mx-auto">
                       
                    </div>
                </AnimationContainer>
                <AnimationContainer delay={0.3} className="w-full">
                    <div className="py-14">
                        <div className="mx-auto px-4 md:px-8">
                            <h2 className="text-center text-2xl font-medium font-heading text-neutral-400 uppercase">
                                Key Roles & Organizations
                            </h2>
                            <div className="mt-8">
                                <ul className="flex flex-wrap items-center gap-x-6 gap-y-6 md:gap-x-16 justify-center py-8">
                                    {EXPERIENCE_HIGHLIGHTS.map((item) => (
                                        <li key={item.name + item.role} className="text-center p-4 border border-border/30 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                            <p className="text-lg font-semibold text-foreground">{item.name}</p>
                                            <p className="text-md text-muted-foreground">{item.role}</p>
                                        </li>
                                    ))}
                                </ul>
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
                                Let&apos;s Discuss Your Next Project
                            </h2>
                            <p className="text-muted-foreground mt-6 max-w-lg mx-auto text-base md:text-lg">
                                I&apos;m passionate about leveraging technology and leadership to solve complex challenges. Reach out to explore how we can collaborate.
                            </p>
                            <div className="mt-6">
                                <Button asChild>
                                    <a href="mailto:sepeczi@ameritech.net" className="flex items-center">
                                        Contact Sheri
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

export default ProfessionalExperiencePage;