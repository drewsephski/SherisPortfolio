"use client";

import { buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn, NAV_LINKS } from "@/utils";
import { type LucideIcon, UserCircleIcon, MailIcon } from "lucide-react"; // Changed ZapIcon to UserCircleIcon and MailIcon
import Link from "next/link";
import React, { useEffect, useState } from "react";
import MaxWidthWrapper from "../global/max-width-wrapper";
import MobileNavbar from "./mobile-navbar";
import AnimationContainer from "../global/animation-container";
import { Icons } from "../global/icons";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  const handleScroll = React.useCallback(() => {
    if (window.scrollY > 8) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <header
      className={cn(
        "sticky top-0 inset-x-0 h-14 w-full border-b border-transparent z-[99999] select-none",
        scroll && "border-background/80 bg-background/40 backdrop-blur-md"
      )}
    >
      <AnimationContainer reverse delay={0.1} className="size-full">
        <MaxWidthWrapper className="flex items-center justify-between">
          <div className="flex items-center space-x-12">
            <Link href="/" className="flex items-center gap-x-2"> {/* Changed href to root for portfolio */}
              <UserCircleIcon className="w-7 h-7 text-primary" /> {/* Using UserCircleIcon for logo */}
              <h1 className="text-lg font-medium">Sheri</h1> {/* Changed site name */}
            </Link>

            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                {NAV_LINKS.map((link) => (
                  <NavigationMenuItem key={link.title}>
                    {/* Simplified: No dropdown menus for portfolio, direct links only */}
                    <Link href={link.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        {link.icon && <link.icon className="h-4 w-4 mr-2" />} {/* Optional: display icon */}
                        {link.title}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="hidden lg:flex items-center">
            <div className="flex items-center gap-x-4">
              {/* Replacing Sign In/Get Started with a Contact Me button or LinkedIn */}
              <a
                href="https://www.linkedin.com/in/sheri-sepeczi-94914515/"
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ size: "sm", variant: "ghost" })}
              >
                LinkedIn
              </a>
              <a
                href="mailto:sepeczi@ameritech.net"
                className={buttonVariants({ size: "sm" })}
              >
                Contact Me
                <MailIcon className="size-3.5 ml-1.5" />
              </a>
            </div>
          </div>

          {/* MobileNavbar will also need to be updated to reflect these simplified links */}
          <MobileNavbar />
        </MaxWidthWrapper>
      </AnimationContainer>
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string; icon: LucideIcon }
>(({ className, title, href, icon: Icon, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href || ""}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all duration-100 ease-out hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center space-x-2 text-neutral-300">
            <Icon className="h-4 w-4" />
            <h6 className="text-sm font-medium !leading-none">{title}</h6>
          </div>
          <p
            title={typeof children === 'string' ? children : ""}
            className="line-clamp-1 text-sm leading-snug text-muted-foreground"
          >
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;
