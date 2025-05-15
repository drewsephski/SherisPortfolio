import React from 'react';
import { Footer, Navbar } from "@/components";

interface Props {
    children: React.ReactNode
}

const MarketingLayout = ({ children }: Props) => {
    return (
        <>
            {/* The background div can remain as is, or be simplified if desired for a portfolio */}
            <div id="home" className="absolute inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] h-full" />
            <Navbar /> {/* Navbar will need its links updated */}
            <main className="mt-20 mx-auto w-full z-0 relative">
                {children}
            </main>
            <Footer /> {/* Footer will need its content updated */}
        </>
    );
};

export default MarketingLayout;
