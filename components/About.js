import React, { useEffect } from 'react'
import { useTheme } from 'next-themes'

const About = () => {
  const { theme } = useTheme()
  
  // Update text color based on theme
  useEffect(() => {
    document.documentElement.style.setProperty(
      '--about-text-color',
      theme === 'dark' ? '#fff' : '#000'
    )
    document.documentElement.style.setProperty(
      '--about-bg-color',
      theme === 'dark' ? '#000' : '#fff'
    )
  }, [theme])
  
  return (
    <div className="w-full min-h-screen bg-white dark:bg-black relative text-black dark:text-white transition-colors duration-300">
      <div className="px-[10vw] py-[5vw] page2-content">
        <div className="flex flex-col items-center justify-center about-content">
          {/* Heading */}
          <h1 className="text-[6.5vw] text-center tracking-[5px] font-extralight hello-text text-black dark:text-white">
            Hello! I&apos;m Nikhil*
          </h1>

          {/* About Text & Title */}
          <div className="flex items-center justify-center mt-6 about-content-text">
            <p className="w-[40%] text-justify text-black/80 dark:text-white/80">
              As a developer and web designer, I bridge the gap between code and creativity. I build websites that are
              both functional and visually stunning. I take pride in my attention to detail and ability to bring a
              design to life. I am passionate about creating a user experience that is both intuitive and engaging. I am
              always looking for new ways to push the boundaries of what is possible on the web.
            </p>
            <h1 className="font-black text-[6.5vw] text-right w-[60%] text-black dark:text-white">
              Designer & Developer
            </h1>
          </div>

          {/* Bottom Text */}
          <h1 className="text-[6.5vw] text-center tracking-[5px] font-extralight lives-text mt-12 text-black dark:text-white">
            lives by Design
          </h1>
        </div>
      </div>
    </div>
  )
}

export default About