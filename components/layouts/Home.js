
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useTheme } from "next-themes";
import { FaArrowDown } from "react-icons/fa";
const Home = () => {
  const { theme } = useTheme();

  // Update background color based on theme
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--home-bg-color",
      theme === "dark" ? "#000" : "#fff"
    );
    document.documentElement.style.setProperty(
      "--home-text-color",
      theme === "dark" ? "#fff" : "#000"
    );
  }, [theme]);

  useGSAP(() => {
    const breaktext = () => {
      var text = document.querySelector(".Nikhil");
      var rejouice = text.textContent;

      var splitrejouice = rejouice.split("");

      var clutter = "";

      splitrejouice.forEach(function (elem) {
        clutter = clutter + "<span>" + elem + "</span>";
      });

      text.innerHTML = clutter;
    };
    breaktext();

    gsap.from(".Nikhil", {
        y: -100,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        stagger: 1,
    });
  });
  return (
    <div className="w-full min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 flex flex-col justify-between relative overflow-hidden z-[-1]">

  {/* Hero Content */}
  <div className="flex flex-col justify-center items-center text-center px-6 md:px-16 py-28 lg:py-40 z-10 relative">
    {/* Big Name */}
    <h1 className="Nikhil text-[18vw] md:text-[14vw] font-black uppercase tracking-wider leading-none">
      Nikhil
    </h1>

    {/* Role Tags */}
    <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm md:text-base font-light tracking-wide">
      <span className="px-5 py-2 border border-gray-300 dark:border-gray-700 rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition duration-300">
        Web Developer
      </span>
      <span className="px-5 py-2 border border-gray-300 dark:border-gray-700 rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition duration-300">
        UI/UX Designer
      </span>
      <span className="px-5 py-2 border border-gray-300 dark:border-gray-700 rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition duration-300">
        Web Animator
      </span>
    </div>
  </div>

  {/* Scroll Arrow */}
  <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
    <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 dark:border-gray-600 animate-bounce">
      <i className="ri-arrow-down-line text-xl text-gray-700 dark:text-gray-300"><FaArrowDown /></i>
    </div>
  </div>

  {/* Optional Blurred Glow Background */}
  <div className="absolute -top-20 left-[20%] w-[300px] h-[300px] bg-blue-500 dark:bg-blue-400 rounded-full blur-[150px] opacity-30 pointer-events-none"></div>
</div>

  
  
  );
};

export default Home;
