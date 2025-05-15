import AnimationContainer from "@/components/global/animation-container";
import { MaxWidthWrapper } from "@/components";
import { Button } from "@/components/ui/button";
import { MailIcon, LinkedinIcon } from "lucide-react";
import React from 'react';

// Renaming page to reflect portfolio context, e.g., ContactPage or similar
// For this example, let's assume it's a simplified contact/connect page.
const ConnectPage = () => {
    return (
        <MaxWidthWrapper>
            <div className="flex flex-col items-center justify-center py-20">
                <AnimationContainer delay={0.1}>
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
                        Let's Connect
                    </h1>
                    <p className="text-base md:text-lg mt-6 text-center text-muted-foreground max-w-xl mx-auto">
                        I'm always interested in discussing new engineering challenges, leadership opportunities, or community initiatives. Feel free to reach out.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
                        <Button asChild>
                            <a href="mailto:sepeczi@ameritech.net" className="flex items-center">
                                <MailIcon className="w-5 h-5 mr-2" />
                                Email Sheri
                            </a>
                        </Button>
                        <Button variant="outline" asChild>
                            <a href="https://www.linkedin.com/in/sheri-sepeczi-94914515/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                                <LinkedinIcon className="w-5 h-5 mr-2" />
                                Connect on LinkedIn
                            </a>
                        </Button>
                    </div>
                </AnimationContainer>
            </div>
        </MaxWidthWrapper>
    )
};

export default ConnectPage;
