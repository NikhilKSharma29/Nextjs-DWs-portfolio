import React from 'react'
import {
    FaFacebookF,
    FaInstagram,
    FaBehance,
  } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-10 md:px-20 md:py-14 text-sm">
      {/* Top Row */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        {/* Left Email */}
        <h2 className="text-xl md:text-2xl font-bold">sharmanikhil2188@gmail.com</h2>

        {/* Right Phone */}
        <h2 className="text-xl md:text-2xl font-bold">(+91) 9729729729</h2>
      </div>

      {/* Middle Row */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 text-sm gap-4">
        <div>
          <p>Indore, INDIA</p>
          <p>2025</p>
        </div>
        <div>
          <p>Office hours</p>
          <p>Monday – Friday 11 AM - 2 PM</p>
        </div>
        <div className="col-span-2 flex justify-end items-center space-x-4 text-sm">
          <p>Say hello</p>
          <a href="#" className="underline">Work with us</a>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-xs gap-4">
        {/* Left Text */}
        <p>
          Thank you for visiting my portfolio. <a href="#" className="underline">Nikhil Kumar Sharma</a> | 
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-4 text-base">
          <FaBehance className="cursor-pointer" />
          <FaInstagram className="cursor-pointer" />
          <FaFacebookF className="cursor-pointer" />
          <a href="#" className="text-xs underline">Privacy Policy</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer