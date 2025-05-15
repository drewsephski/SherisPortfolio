import {
  AnimationContainer,
  MaxWidthWrapper,
  PricingCards,
} from "@/components";
import { cn } from "@/utils";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LampContainer } from "@/components/ui/lamp";
import MagicBadge from "@/components/ui/magic-badge";
import MagicCard from "@/components/ui/magic-card";
import { EXPERIENCE_HIGHLIGHTS, PROCESS, FEATURES } from "@/utils/constants/misc";
import { ArrowRightIcon, MailIcon, PhoneIcon, MapPinIcon, BriefcaseIcon, ZapIcon, SettingsIcon, NetworkIcon, UserCheckIcon, LandmarkIcon } from "lucide-react"; // Added icons for experience
import Image from "next/image";
import Link from "next/link";

// Define a simple glow effect style (can be moved to a global CSS file later)
const iconGlowStyle = {
    filter: 'drop-shadow(0 0 5px rgba(192, 132, 252, 0.8))', // Tailwind's purple-400 with opacity
};

const HomePage = async () => {
  return (
    <div className="overflow-x-hidden scrollbar-hide size-full">
      {/* Hero Section */}
      <MaxWidthWrapper>
        <div className="flex flex-col items-center justify-center w-full text-center bg-gradient-to-t from-background">
          <AnimationContainer className="flex flex-col items-center justify-center w-full text-center">
            <button type="button" className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
              <span>
                <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
              </span>
              <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
              <span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/20" />
              <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center justify-center gap-1">
                ✨ Engineering Leadership & Technical Expertise
                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </span>
            </button>
            <h1 className="text-foreground text-center py-6 text-5xl font-medium tracking-normal text-balance sm:text-6xl md:text-7xl lg:text-8xl !leading-[1.15] w-full font-heading">
              Sheri {" "}
              <span className="text-transparent mx-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text inline-bloc">
                Sepeczi
              </span>
            </h1>
            <p className="mb-12 text-lg tracking-tight text-muted-foreground md:text-xl text-balance">
              Experienced Engineering Manager with a Master&apos;s in Electrical Engineering.
              <br className="hidden md:block" />
              <span className="hidden md:block">
                Showcasing a blend of technical depth and leadership in engineering and community roles.
              </span>
            </p>
            <div className="flex items-center justify-center whitespace-nowrap gap-4 z-50">
              <Button asChild>
                <a href="https://www.linkedin.com/in/sheri-sepeczi-94914515/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  View LinkedIn Profile
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </AnimationContainer>

          <AnimationContainer
            delay={0.2}
            className="relative pt-20 pb-20 md:py-32 px-2 bg-transparent w-full"
          >
            <div className="absolute md:top-[10%] left-1/2 gradient w-3/4 -translate-x-1/2 h-1/4 md:h-1/3 inset-0 blur-[5rem] animate-image-glow" />
            <div className="-m-2 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl">
              <BorderBeam size={250} duration={12} delay={9} />
              <Image
                src="/assets/main.jpeg"
                alt="Sheri Sepeczi Portfolio Image"
                width={1200}
                height={600}
                className="w-full h-auto rounded-lg shadow-md"
              />
              <div className="absolute -bottom-4 inset-x-0 w-full h-1/2 bg-gradient-to-t from-background z-40" />
              <div className="absolute bottom-0 md:-bottom-8 inset-x-0 w-full h-1/4 bg-gradient-to-t from-background z-50" />
            </div>
          </AnimationContainer>
        </div>
      </MaxWidthWrapper>
 {/* Approach/Process Section */}
 <MaxWidthWrapper className="py-10">
        <AnimationContainer delay={0.1}>
          <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
            <MagicBadge title="My Approach" />
            <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
              A Foundation of Technical Excellence and Leadership
            </h2>
            <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
              My work is built upon a solid engineering background, effective team leadership, and a commitment to impactful contributions.
            </p>
          </div>
        </AnimationContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full py-8 gap-4 md:gap-8">
          {PROCESS.map((processItem, id) => (
            <AnimationContainer delay={0.2 * id} key={processItem.title}>
              <MagicCard className="group md:py-8">
                <div className="flex flex-col items-start justify-center w-full">
                  <processItem.icon
                    strokeWidth={1.5}
                    className="w-10 h-10 text-foreground"
                  />
                  <div className="flex flex-col relative items-start">
                    <span className="absolute -top-6 right-0 border-2 border-border text-foreground font-medium text-2xl rounded-full w-12 h-12 flex items-center justify-center pt-0.5">
                      {id + 1}
                    </span>
                    <h3 className="text-base mt-6 font-medium text-foreground">
                      {processItem.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {processItem.description}
                    </p>
                  </div>
                </div>
              </MagicCard>
            </AnimationContainer>
          ))}
        </div>
      </MaxWidthWrapper>
      {/* Experience Highlights Section */}
      <MaxWidthWrapper>
        <AnimationContainer delay={0.4}>
          <div className="py-14">
            <div className="mx-auto px-4 md:px-8">
              <h2 className="text-center text-4xl md:text-3xl font-semibold font-heading text-foreground">
                Experience Highlights
              </h2>
              <div className="mt-10">
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-center py-8">
                  {EXPERIENCE_HIGHLIGHTS.map((item) => {
                    const IconComponent = item.icon; // Assuming icon is now part of EXPERIENCE_HIGHLIGHTS
                    return (
                      <MagicCard
                        key={`${item.name}-${item.role}`}
                        className="flex flex-col items-center justify-center p-6 text-center cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
                      >
                        <IconComponent className="w-10 h-10 text-purple-500 mb-3" style={iconGlowStyle} />
                        <p className="text-xl font-semibold font-heading text-foreground mt-2">{item.role}</p>
                        <p className="text-lg text-primary mt-1">{item.name}</p>
                      </MagicCard>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </AnimationContainer>
      </MaxWidthWrapper>

     
      <MaxWidthWrapper className="pt-5">
        <AnimationContainer delay={0.1}>
          <div className="flex flex-col w-full items-center lg:items-center justify-center py-8">
            <MagicBadge title="Expertise" />
            <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
              Technical Skills & Leadership
            </h2>
            <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
              Combining a strong technical background with proven leadership capabilities.
            </p>
          </div>
        </AnimationContainer>
        <AnimationContainer delay={0.2}>
          <BentoGrid className="py-8 bg-gradient-to-br from-purple-900/20 to-fuchsia-900/20 rounded-lg p-4">
            {FEATURES.map(({ className, ...rest }) => (
              <BentoCard key={rest.name} className={cn("border border-transparent hover:border-purple-400 hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-200", className)} {...rest} />
            ))}
          </BentoGrid>
        </AnimationContainer>
      </MaxWidthWrapper>
      {/* Education/Contact Section (repurposing Pricing and Reviews) */}
      <MaxWidthWrapper className="py-10">
        <AnimationContainer delay={0.1}>
          <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
            <MagicBadge title="Education & Contact" />
            <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
              Connect and Learn More
            </h2>
            <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
              Explore my educational background and get in touch.
            </p>
          </div>
        </AnimationContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-start gap-4 md:gap-8 py-10">
          {/* Education Card */}
          <AnimationContainer delay={0.2}>
            <MagicCard className="md:p-0">
              <Card className="flex flex-col w-full border-none h-min">
                <CardHeader className="space-y-0">
                  <CardTitle className="text-2xl font-medium text-muted-foreground">
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pb-4">
                  <p className="text-muted-foreground">
                    <span className="font-bold text-primary">Michigan Technological University</span>
                    <br />
                    Master’s Degree in Electrical, Electronics, and Communications Engineering (1998 – 2002)
                  </p>
                  <p className="text-muted-foreground">
                    Bachelor’s Degree in Electrical, Electronics, and Communications Engineering (1987 – 1992)
                  </p>
                </CardContent>
              </Card>
            </MagicCard>
          </AnimationContainer>
          {/* Contact Card */}
          <AnimationContainer delay={0.3}>
            <MagicCard className="md:p-0">
              <Card className="flex flex-col w-full border-none h-min">
                <CardHeader className="space-y-0">
                  <CardTitle className="text-2xl font-medium text-muted-foreground">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pb-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MailIcon className="w-5 h-5" />
                    <span>sepeczi@ameritech.net</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <PhoneIcon className="w-5 h-5" />
                    <span>630-514-2364</span>
                  </div>
                   <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPinIcon className="w-5 h-5" />
                    <span>Based in Rolling Meadows, IL</span>
                  </div>
                </CardContent>
              </Card>
            </MagicCard>
          </AnimationContainer>
        </div>
      </MaxWidthWrapper>

      {/* CTA Section (repurposing) */}
      <MaxWidthWrapper className="mt-20 max-w-[100vw] overflow-x-hidden scrollbar-hide">
        <AnimationContainer delay={0.1}>
          <LampContainer>
            <div className="flex flex-col items-center justify-center relative w-full text-center">
              <h2 className="bg-gradient-to-b from-neutral-200 to-neutral-400 py-4 bg-clip-text text-center text-4xl md:text-7xl !leading-[1.15] font-medium font-heading tracking-tight text-transparent mt-8">
                Sheri Sepeczi
              </h2>
              <p className="text-muted-foreground mt-6 max-w-md mx-auto">
                Engineering Manager | MSEE
              </p>
              <div className="mt-6">
                 <a href="https://www.linkedin.com/in/sheri-sepeczi-94914515/" target="_blank" rel="noopener noreferrer">
                  <Button>
                    Connect on LinkedIn
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </div>
            </div>
          </LampContainer>
        </AnimationContainer>
      </MaxWidthWrapper>
    </div>
  );
};

export default HomePage;
