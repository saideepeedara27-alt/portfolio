"use client";

import dynamic from "next/dynamic";

// Lazy load heavy client components
const SplashCursor = dynamic(() => import("@/components/splash-cursor"), {
    ssr: false,
});

const SmoothScroll = dynamic(() => import("@/components/smooth-scroll").then(mod => ({ default: mod.SmoothScroll })), {
    ssr: false,
});

export function ClientComponents() {
    return (
        <>
            <SmoothScroll />
            <SplashCursor />
        </>
    );
}
