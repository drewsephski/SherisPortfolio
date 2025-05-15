import { AnimationContainer, MaxWidthWrapper } from "@/components";
import { Button } from "@/components/ui/button";
import { LampContainer } from "@/components/ui/lamp";
import MagicBadge from "@/components/ui/magic-badge";
import MagicCard from "@/components/ui/magic-card"; // Corrected MagicCard import
import { EXPERIENCE_HIGHLIGHTS, VOLUNTEER_ROLES } from "@/utils/constants/misc"; // Updated import
import { ArrowRightIcon, MailIcon, LinkedinIcon, RocketIcon, UsersIcon, AwardIcon, HandshakeIcon, BuildingIcon, BriefcaseIcon, ZapIcon, SettingsIcon, NetworkIcon, UserCheckIcon, LandmarkIcon } from "lucide-react"; // Added new icons
import Image from "next/image";
import Link from "next/link";

// Define a simple glow effect style (can be moved to a global CSS file later)
const iconGlowStyle = {
    filter: 'drop-shadow(0 0 5px rgba(192, 132, 252, 0.8))', // Tailwind's purple-400 with opacity
};

// Renaming page to reflect portfolio context, e.g., CommunityInvolvementPage
const CommunityInvolvementPage = () => {
    return (
        <>
            <MaxWidthWrapper>
                <AnimationContainer delay={0.1} className="w-full">
                    <div className="flex flex-col items-center justify-center py-10 max-w-lg mx-auto">
                        <MagicBadge title="Community" />
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
                            Leadership & Volunteer Experience
                        </h1>
                        <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
                            Dedicated to making a positive impact through active participation and leadership in community organizations.
                        </p>
                        <div className="flex items-center justify-center gap-x-4 mt-8">
                            <Button size="sm" asChild>
                                <Link href="/" className="flex items-center"> {/* Link to homepage or relevant section */}
                                    Portfolio Home
                                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                                </Link>
                            </Button>
                            <Button size="sm" variant="outline" asChild>
                                <a href="mailto:sepeczi@ameritech.net" className="flex items-center">
                                    Contact Sheri
                                    <MailIcon className="w-4 h-4 ml-2" />
                                </a>
                            </Button>
                        </div>
                    </div>
                </AnimationContainer>
                <AnimationContainer delay={0.2} className="w-full">
                    <div className="w-full flex max-w-4xl py-10 mx-auto">
                        <Image
                            src="/assets/desktop.webp" // Replaced image
                            alt="Desktop Setup Visual" // Updated alt text
                            width={800}
                            height={400}
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                    </div>
                </AnimationContainer>
                <AnimationContainer delay={0.3} className="w-full">
                    <div className="py-14">
                        <div className="mx-auto px-4 md:px-8">
                            <div className="flex flex-col items-center justify-center">
                                <MagicBadge title="Volunteer Highlights" />
                                <h2 className="text-center text-2xl md:text-3xl font-semibold font-heading text-foreground mt-4">
                                    Key Volunteer Roles & Initiatives
                                </h2>
                            </div>
                            <div className="mt-10">
                                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-center py-8">
                                    {VOLUNTEER_ROLES.map((item) => {
                                        const IconComponent = item.icon;
                                        return (
                                            <MagicCard
                                                key={item.name + item.role}
                                                className="flex flex-col items-center justify-center p-6 text-center cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
                                            >
                                                <IconComponent className="w-10 h-10 text-purple-500 mb-4" style={iconGlowStyle} />
                                                <p className="text-2xl font-semibold font-heading text-primary">{item.name}</p>
                                                <p className="text-md text-muted-foreground italic mt-2">{item.role}</p>
                                            </MagicCard>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </AnimationContainer>
                {/* New Section for Professional Experience Highlights */}
                <AnimationContainer delay={0.35} className="w-full">
                    <div className="py-14">
                        <div className="mx-auto px-4 md:px-8">
                            <div className="flex flex-col items-center justify-center">
                                <MagicBadge title="Professional Experience" />
                                <h2 className="text-center text-2xl md:text-3xl font-semibold font-heading text-foreground mt-4">
                                    Professional Experience Highlights
                                </h2>
                            </div>
                            <div className="mt-10">
                                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-center py-8">
                                    {EXPERIENCE_HIGHLIGHTS.map((item) => {
                                        const IconComponent = item.icon;
                                        return (
                                            <MagicCard
                                                key={`${item.name}-${item.role}`}
                                                className="flex flex-col items-center justify-center p-6 text-center cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
                                            >
                                                <IconComponent className="w-10 h-10 text-purple-500 mb-4" style={iconGlowStyle} />
                                                <p className="text-2xl font-semibold font-heading text-primary">{item.name}</p>
                                                <p className="text-md text-muted-foreground italic mt-2">{item.role}</p>
                                            </MagicCard>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </AnimationContainer>
            </MaxWidthWrapper>
            <MaxWidthWrapper className="pt-20">
                <AnimationContainer delay={0.45} className="w-full"> {/* Adjusted delay */}
                    <LampContainer className="max-w-2xl mx-auto">
                        <div className="flex flex-col items-center justify-center relative w-full text-center">
                            <h2 className="bg-gradient-to-br from-neutral-300 to-neutral-500 py-4 bg-clip-text text-center text-4xl font-semibold font-heading tracking-tight text-transparent md:text-7xl mt-8">
                                Building Stronger Communities
                            </h2>
                            <p className="text-muted-foreground mt-6 max-w-lg mx-auto text-base md:text-lg">
                                Committed to fostering community spirit and driving initiatives that create lasting local benefit.
                            </p>
                            <div className="mt-6">
                                <Button asChild>
                                    <a href="https://www.linkedin.com/in/sheri-sepeczi-94914515/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                                        Connect on LinkedIn
                                        <LinkedinIcon className="w-4 h-4 ml-2" />
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

export default CommunityInvolvementPage;
