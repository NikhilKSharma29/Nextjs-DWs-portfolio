"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Link } from "react-router-dom";

// Dynamically import ThemeToggle to avoid SSR issues with theme
const ThemeToggle = dynamic(() => import("../common/ThemeToggle"), {
  ssr: false,
});

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white/30 dark:bg-black/30 border-b border-white/10 dark:border-gray-800 shadow-sm transition-all duration-300">
  <div className="max-w-7xl mx-auto px-5 sm:px-10">
    <div className="flex justify-between items-center h-[70px]">
      
      {/* Logo */}
      <Link to="/" className="text-xl font-bold tracking-wide text-black dark:text-white">
        Nikhil<span className="text-blue-500">.</span>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-8">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-all font-medium"
          >
            {item.label}
          </Link>
        ))}

        <ThemeToggle />

        <Link
          to="/contact"
          className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition"
        >
          Let’s Talk
        </Link>
      </div>

      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden p-2 text-gray-800 dark:text-white focus:outline-none"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          {isOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
    </div>
  </div>

  {/* Mobile Menu Slide-In */}
  <div
    className={`lg:hidden fixed top-0 right-0 h-full w-3/4 max-w-xs bg-black/90 text-white z-50 transform transition-transform duration-300 ease-in-out ${
      isOpen ? 'translate-x-0' : 'translate-x-full'
    }`}
  >
    <div className="p-6 flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold">Menu</h2>
        <button
          onClick={() => setIsOpen(false)}
          className="text-white hover:text-red-400"
        >
          <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Menu Items */}
      <nav className="flex flex-col gap-4 flex-1">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            onClick={() => setIsOpen(false)}
            className="text-base text-white hover:text-blue-400 transition"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Bottom CTA */}
      <div className="mt-auto pt-6 border-t border-white/10">
        <ThemeToggle />
        <Link
          to="/contact"
          onClick={() => setIsOpen(false)}
          className="mt-4 inline-block w-full text-center px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
        >
          Let’s Talk
        </Link>
      </div>
    </div>
  </div>
</nav>

    </>
  );
};
