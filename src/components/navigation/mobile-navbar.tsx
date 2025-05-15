"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn, NAV_LINKS } from "@/utils";
import { LucideIcon, Menu, X, MailIcon } from "lucide-react"; // Added MailIcon
import Link from "next/link";
import React, { useState } from "react";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex lg:hidden items-center justify-end">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button size="icon" variant="ghost">
            <Menu className="w-5 h-5" />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-screen">
          <SheetClose
            asChild
            className="absolute top-3 right-5 bg-background z-20 flex items-center justify-center"
          >
            <Button size="icon" variant="ghost" className="text-neutral-600">
              <X className="w-5 h-5" />
            </Button>
          </SheetClose>
          <div className="flex flex-col items-start w-full py-2 mt-10">
            {/* Simplified top buttons for portfolio */}
            <div className="flex items-center justify-evenly w-full space-x-2">
              <a
                href="https://www.linkedin.com/in/sheri-sepeczi-94914515/"
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({
                  variant: "outline",
                  className: "w-full",
                })}
                onClick={handleClose}
              >
                LinkedIn
              </a>
              <a
                href="mailto:sepeczi@ameritech.net"
                className={buttonVariants({ className: "w-full" })}
                onClick={handleClose}
              >
                Contact Me
              </a>
            </div>
            {/* Simplified navigation links for portfolio - no accordion needed */}
            <ul className="flex flex-col items-start w-full mt-6">
              {NAV_LINKS.map((link) => (
                <li key={link.title} className="w-full">
                  <Link
                    href={link.href}
                    onClick={handleClose}
                    className="flex items-center w-full py-4 font-medium text-muted-foreground hover:text-foreground"
                  >
                    {link.icon && <link.icon className="h-5 w-5 mr-3" />}
                    <span>{link.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

// ListItem component might not be needed if we simplify to direct links without submenus.
// If kept for other purposes, ensure it's used correctly or remove if unused.
// For this portfolio revamp, assuming it's not directly used in mobile nav anymore.

export default MobileNavbar;
