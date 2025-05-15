import Link from "next/link";
import { AnimationContainer } from "@/components"; // Removed Icons import as UserCircleIcon will be used
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { UserCircleIcon, MailIcon, LinkedinIcon, PhoneIcon } from "lucide-react"; // Added relevant icons

const Footer = () => {
  return (
    <footer className="flex flex-col relative items-center justify-center border-t border-border pt-16 pb-8 md:pb-0 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-32 bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)]">
      <div className="absolute top-0 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-1.5 bg-primary rounded-full" /> {/* Changed to primary color */}

      <div className="grid gap-8 xl:grid-cols-3 xl:gap-8 w-full">
        <AnimationContainer delay={0.1}>
          <div className="flex flex-col items-start justify-start md:max-w-[250px]"> {/* Increased max-width slightly */}
            <div className="flex items-center gap-x-2"> {/* Centered icon and name */}
              <UserCircleIcon className="w-8 h-8 text-primary" /> {/* Larger icon, primary color */}
              <span className="text-xl font-semibold text-foreground">Sepeczi</span>
            </div>
            <p className="text-muted-foreground mt-4 text-sm text-start">
              Engineering Manager | MSEE | Community Leader
            </p>
            {/* Removed "Made by Abdellah" */}
          </div>
        </AnimationContainer>

        <div className="grid-cols-1 sm:grid-cols-2 gap-8 grid mt-16 xl:col-span-2 xl:mt-0"> {/* Simplified grid for portfolio */}
          <AnimationContainer delay={0.2}>
            <div>
              <h3 className="text-base font-medium text-white">Navigation</h3>
              <ul className="mt-4 text-sm text-muted-foreground">
                <li className="mt-2">
                  <Link href="/" className="hover:text-foreground transition-all duration-300">Home</Link>
                </li>
                <li className="mt-2">
                  <Link href="/features/analytics" className="hover:text-foreground transition-all duration-300">Experience</Link>
                </li>
                <li className="mt-2">
                  <Link href="/features/link-shortening" className="hover:text-foreground transition-all duration-300">Skills</Link>
                </li>
                <li className="mt-2">
                  <Link href="/features/password-protection" className="hover:text-foreground transition-all duration-300">Community</Link>
                </li>
                 <li className="mt-2">
                  <Link href="/features/qr-codes" className="hover:text-foreground transition-all duration-300">Education</Link>
                </li>
              </ul>
            </div>
          </AnimationContainer>
          <AnimationContainer delay={0.3}>
            <div className="mt-10 sm:mt-0 flex flex-col">
              <h3 className="text-base font-medium text-white">
                Contact
              </h3>
              <ul className="mt-4 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <MailIcon className="w-4 h-4" />
                  <a href="mailto:sepeczi@ameritech.net" className="hover:text-foreground transition-all duration-300">sepeczi@ameritech.net</a>
                </li>
                <li className="mt-2 flex items-center gap-2">
                  <PhoneIcon className="w-4 h-4" />
                  <a href="tel:630-514-2364" className="hover:text-foreground transition-all duration-300">630-514-2364</a>
                </li>
                <li className="mt-2 flex items-center gap-2">
                  <LinkedinIcon className="w-4 h-4" />
                  <a href="https://www.linkedin.com/in/sheri-sepeczi-94914515/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-all duration-300">LinkedIn</a>
                </li>
              </ul>
            </div>
          </AnimationContainer>
        </div>
      </div>

      <div className="mt-8 border-t border-border/40 pt-4 md:pt-8 md:flex md:items-center md:justify-between w-full">
        <AnimationContainer delay={0.6}>
          <p className="text-sm text-muted-foreground mt-8 md:mt-0">
            &copy; {new Date().getFullYear()} Sheri Sepeczi. All rights reserved.
          </p>
        </AnimationContainer>
      </div>

      <div className="h-[10rem] lg:h-[15rem] hidden md:flex items-center justify-center"> {/* Reduced height */}
        <TextHoverEffect text="Sepeczi" />
      </div>
    </footer>
  );
};

export default Footer;
