import React from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
const Home = () => {
    useGSAP(() => {
        const breaktext = ()=>{
         var text = document.querySelector(".Nikhil");
         var rejouice = text.textContent;
       
         var splitrejouice = rejouice.split("");
       
         var clutter = "";
       
         splitrejouice.forEach(function (elem) {
           clutter = clutter + "<span>" + elem + "</span>";
         });
       
         text.innerHTML = clutter;
        }
        breaktext();   
 
        gsap.from(".Nikhil", {
         y: -100,
         opacity: 0,
         duration: 1.5,
         ease: "power3.out",
         stagger: 1,
        })
     })
  return (
    <div className="w-full h-[90vh] bg-black relative text-white page1">
    <div className="w-full h-full relative z-[1] flex flex-col items-center page1-content">
      
      {/* Big Heading */}
      <h1 className="Nikhil overflow-y-hidden  text-[25vw] relative text-left tracking-[5px] text-white">
        Nikhil
      </h1>

      {/* Footer Text + Icon */}
      <div className="flex items-center justify-between absolute bottom-0 w-full px-[3vw] py-[2vw] footer-content">
        
        {/* Roles Text */}
        <div className="flex gap-[2vw] items-center footer-content-text">
          <h4 className="max-w-[16vw] font-light cursor-pointer">Web Developer</h4>
          <h4 className="max-w-[16vw] font-light cursor-pointer">Ui/UX Designer</h4>
          <h4 className="max-w-[16vw] font-light cursor-pointer">Web Animator</h4>
        </div>

        {/* Arrow Icon */}
      </div>
    </div>

    {/* Optional: Canvas */}
    {/* <canvas id="three-canvas" className="absolute top-0 left-0 w-full h-full z-0" /> */}
  </div>
)
}

export default Home