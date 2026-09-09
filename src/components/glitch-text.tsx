"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function GlitchText({ text, className = "" }: { text: string; className?: string }) {
    return (
        <div className={`relative inline-block ${className}`}>
            <span className="relative z-10 block">{text}</span>
            <motion.span
                className="absolute left-0 top-0 -z-10 block w-full text-accent-primary opacity-70"
                animate={{
                    x: [-2, 2, -1, 0],
                    y: [1, -1, 0],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 2, // Slower duration for continuous effect
                    repeatType: "mirror",
                    repeatDelay: 3, // Pause between glitches
                }}
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)" }}
                aria-hidden="true"
            >
                {text}
            </motion.span>
            <motion.span
                className="absolute left-0 top-0 -z-10 block w-full text-accent-secondary opacity-70"
                animate={{
                    x: [2, -2, 1, 0],
                    y: [-1, 1, 0],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 2,
                    repeatType: "mirror",
                    delay: 0.1,
                    repeatDelay: 3,
                }}
                style={{ clipPath: "polygon(0 55%, 100% 55%, 100% 100%, 0 100%)" }}
                aria-hidden="true"
            >
                {text}
            </motion.span>
        </div>
    );
}
