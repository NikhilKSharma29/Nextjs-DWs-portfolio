"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

// Dynamically import ThemeToggle to avoid SSR issues with theme
const ThemeToggle = dynamic(() => import("../common/ThemeToggle"), {
  ssr: false,
});

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full bg-transparent dark:bg-gray-900/80 backdrop-blur-sm text-white z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-[5vw] py-4">
            {/* Logo / Name */}
            {/* <h5 className="text-lg font-semibold dark:text-white">Nikhil</h5> */}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-gray-300 hover:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M3 12h18M12 15h.01M12 9h.01" />
                )}
              </svg>
            </button>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-6">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="nav-item hover:text-gray-300 dark:hover:text-gray-400 transition"
                >
                  {item.label}
                </Link>
              ))}
              <ThemeToggle />
              <Link
                href="#contact"
                className="nav-item lets-talk flex items-center gap-1 text-base font-medium hover:text-cyan-300 transition"
              >
                Let&apos;s talk
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-y-0 right-0 w-full lg:hidden transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="h-full flex flex-col bg-gray-900/80 dark:bg-gray-900/80 p-8">
            <div className="flex justify-between items-center mb-8">
              <h5 className="text-xl font-semibold text-white">Nikhil</h5>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white"
              >
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex-1">
              <nav className="space-y-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-base text-gray-300 hover:text-white transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="mt-auto flex flex-col space-y-4">
              <ThemeToggle />
              <Link
                href="#contact"
                className="block text-base text-gray-300 hover:text-cyan-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Let&apos;s talk
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
