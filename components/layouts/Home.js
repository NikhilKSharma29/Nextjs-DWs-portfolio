
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useTheme } from "next-themes";

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
    <div className="w-full min-h-[90vh] bg-white dark:bg-black relative text-black dark:text-white page1 transition-colors duration-300">
      <div className="w-full h-full relative z-[1] flex flex-col items-center justify-center page1-content">
        {/* Big Heading */}
        <h1 className="Nikhil overflow-y-hidden text-[25vw] sm:text-[25vw] md:text-[25vw] relative text-left tracking-[5px] text-black dark:text-white">
          Nikhil
        </h1>

        {/* Footer Text + Icon */}
        <div className="flex items-center justify-between absolute bottom-0 w-full px-[3vw] py-[2vw] footer-content">
          {/* Roles Text */}
          <div className="flex gap-[2vw] items-center footer-content-text flex-wrap sm:gap-[1vw] sm:mt-[10vh] ">
            <h4 className="max-w-[16vw] sm:max-w-[20vw] md:max-w-[16vw] font-light cursor-pointer hover:opacity-80 transition-opacity text-sm sm:text-base">
              Web Developer
            </h4>
            <h4 className="max-w-[16vw] sm:max-w-[20vw] md:max-w-[16vw] font-light cursor-pointer hover:opacity-80 transition-opacity text-sm sm:text-base">
              Ui/UX Designer
            </h4>
            <h4 className="max-w-[16vw] sm:max-w-[20vw] md:max-w-[16vw] font-light cursor-pointer hover:opacity-80 transition-opacity text-sm sm:text-base">
              Web Animator
            </h4>
          </div>
        </div>
      </div>

      {/* Optional: Canvas */}
      {/* <canvas id="three-canvas" className="absolute top-0 left-0 w-full h-full z-0" /> */}
    </div>
  );
};

export default Home;
