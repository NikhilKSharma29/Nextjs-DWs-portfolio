
import React from "react";

export const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 w-full h-[5vw] bg-transparent flex justify-between items-center text-white p-[3vw] z-10">
        {/* Left: Logo / Name */}
        <h5 className="nav-item text-lg font-semibold">Nikhil</h5>

        {/* Center: Menu Links */}
        <div className="menu relative left-[10%]">
          <h5 className="space-x-6 text-base font-medium">
            <a href="#home" className="nav-item hover:text-gray-300 transition">
              Home
            </a>
            <a
              href="#about"
              className="nav-item hover:text-gray-300 transition"
            >
              About
            </a>
            <a
              href="#contact"
              className="nav-item hover:text-gray-300 transition"
            >
              Contact
            </a>
          </h5>
        </div>

        {/* Right: Let's Talk */}
        <h5 className="nav-item lets-talk flex items-center gap-1 text-base font-medium hover:text-cyan-300 transition">
          Let&apos;s talk 
        </h5>
      </nav>
    </>
  );
};
