"use client";

import { useEffect, useState } from "react";
import Logo from "../logo";
import { getImgPath } from "@/utils/image";

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark" || (!storedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
            setDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            setDarkMode(false);
            document.documentElement.classList.remove("dark");
        }
    }, []);

    const toggleDarkMode = () => {
        if (darkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setDarkMode(true);
        }
    };

    return (
        <header className="navbar top-0 left-0 z-999 w-full absolute">
            <div className="container">
                <nav className="py-7">
                    <div className="flex items-center justify-between gap-4 sm:gap-8">
                        <div>
                            <Logo />
                        </div>

                        <div className="flex items-center gap-3 sm:gap-4">
                            <button
                                onClick={toggleDarkMode}
                                aria-label="Toggle Dark or Light Mode"
                                className="theme-toggle-btn no-print relative p-2.5 sm:p-3 rounded-full border border-primary text-black dark:text-white hover:bg-primary/10 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 cursor-pointer shadow-sm overflow-hidden"
                            >
                                {darkMode ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400">
                                        <circle cx="12" cy="12" r="4"></circle>
                                        <path d="M12 2v2"></path>
                                        <path d="M12 20v2"></path>
                                        <path d="m4.93 4.93 1.41 1.41"></path>
                                        <path d="m17.66 17.66 1.41 1.41"></path>
                                        <path d="M2 12h2"></path>
                                        <path d="M20 12h2"></path>
                                        <path d="m6.34 17.66-1.41 1.41"></path>
                                        <path d="m19.07 4.93-1.41 1.41"></path>
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-800">
                                        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                                    </svg>
                                )}
                            </button>

                            <a
                                href={getImgPath("/Sachindu_Himsara_Resume.pdf")}
                                download="Sachindu_Himsara_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative overflow-hidden cursor-pointer w-fit py-2 sm:py-3 md:py-5 px-4 sm:px-5 md:px-7 border border-primary rounded-full group inline-flex items-center justify-center"
                            >
                                <span className="relative z-10 text-xl font-medium text-black group-hover:text-white transition-colors duration-300">
                                    Download PDF Resume
                                </span>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
