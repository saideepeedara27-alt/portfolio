"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <button className="relative h-10 w-10 rounded-full border border-border bg-surface/50 backdrop-blur-sm" />
        );
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="group relative h-10 w-10 rounded-full border border-border bg-surface/50 backdrop-blur-sm transition-all hover:border-accent-primary hover:bg-accent-primary/10"
            aria-label="Toggle theme"
        >
            <Sun className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rotate-0 scale-100 transition-all group-hover:text-accent-primary dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rotate-90 scale-0 transition-all group-hover:text-accent-primary dark:rotate-0 dark:scale-100" />
        </button>
    );
}
