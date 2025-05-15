import { AnimationContainer, MaxWidthWrapper } from "@/components";
import { Button } from "@/components/ui/button";
import { LampContainer } from "@/components/ui/lamp";
import MagicBadge from "@/components/ui/magic-badge";
import { ArrowRightIcon, MailIcon, LinkedinIcon, DownloadIcon, PhoneIcon } from "lucide-react"; // Changed
import Image from "next/image";
import Link from "next/link";

// Renaming page to reflect portfolio context, e.g., EducationAndContactPage
const EducationAndContactPage = () => {
    return (
        <>
            <MaxWidthWrapper>
                <AnimationContainer delay={0.1} className="w-full">
                    <div className="flex flex-col items-center justify-center py-2 max-w-2xl mx-auto">
                        <MagicBadge title="Education" />
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
                            Educational Background
                        </h1>
                        <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
                            Master&apos;s and Bachelor&apos;s degrees in Electrical Engineering, complemented by a passion for continuous learning and community involvement.
                        </p>
                        <div className="flex items-center justify-center gap-x-4 mt-8">
                            <Button size="sm" asChild>
                                <a href="mailto:sepeczi@ameritech.net"> {/* Direct mail link */}
                                    Email Sheri
                                </a>
                            </Button>
                            <Button size="sm" variant="outline" asChild>
                                <a href="https://www.linkedin.com/in/sheri-sepeczi-94914515/" target="_blank" rel="noopener noreferrer">
                                    LinkedIn Profile
                                </a>
                            </Button>
                        </div>
                    </div>
                </AnimationContainer>
                <AnimationContainer delay={0.2} className="w-full">
                    {/* Placeholder for a more relevant image or graphic for education/contact */}
                    <div className="w-full flex max-w-4xl py-0 mx-auto">
                        <Image
                            src="/assets/michigan-tech-huskies.svg" // Example placeholder, replace with relevant image
                            alt="Education and Contact Information"
                            width={800}
                            height={200}
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                    </div>
                </AnimationContainer>
                <AnimationContainer delay={0.3} className="w-full">
                    <div className="py-1">
                        <div className="mx-auto px-4 md:px-8">
                            <h2 className="text-center text-4xl font-medium font-heading text-neutral-400 uppercase">
                                Academic Achievements
                            </h2>
                            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
     
                                <div className="p-6 border border-border/30 rounded-lg shadow-sm bg-card">
                                    <h3 className="text-2xl font-semibold text-foreground">Michigan Technological University</h3>
                                    <p className="text-xl text-muted-foreground mt-1">Bachelor’s Degree in Electrical, Electronics, and Communications Engineering (1987 – 1992)</p>
                                </div>
                                <div className="p-6 border border-border/30 rounded-lg shadow-sm bg-card">
                                <h3 className="text-2xl font-semibold text-foreground">Michigan Technological University</h3>
                                <p className="text-xl text-muted-foreground mt-1">Master’s Degree in Electrical, Electronics, and Communications Engineering (1998 – 2002)</p>
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground mt-4"><span className="font-bold text-md text-center">Activities & Societies: </span><br/> Women in Engineering, Alpha Gamma Delta (Vice President), Football/Basketball Cheerleader, Student Government</p>

                        </div>
                    </div>
                </AnimationContainer>
            </MaxWidthWrapper>
            <MaxWidthWrapper className="pt-20">
                <AnimationContainer delay={0.4} className="w-full">
                    <LampContainer className="max-w-2xl mx-auto">
                        <div className="flex flex-col items-center justify-center relative w-full text-center">
                            <h2 className="bg-gradient-to-br from-neutral-300 to-neutral-500 py-4 bg-clip-text text-center text-4xl font-semibold font-heading tracking-tight text-transparent md:text-7xl mt-8">
                                Get in Touch
                            </h2>
                            <p className="text-muted-foreground mt-6 max-w-lg mx-auto text-base md:text-lg">
                                I&apos;m always open to discussing new opportunities, collaborations, or sharing insights.
                            </p>
                            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Button asChild>
                                    <a href="mailto:sepeczi@ameritech.net" className="flex items-center">
                                        <MailIcon className="w-4 h-4 mr-2" />
                                        sepeczi@ameritech.net
                                    </a>
                                </Button>
                                <Button variant="outline" asChild>
                                    <a href="tel:630-514-2364" className="flex items-center">
                                        <PhoneIcon className="w-4 h-4 mr-2" /> {/* Assuming PhoneIcon exists */}
                                        630-514-2364
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

export default EducationAndContactPage;
