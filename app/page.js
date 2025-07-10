"use client";
import React from "react";

import { Navbar } from "@/components/Navbar";
import Home from "@/components/Home";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
const page = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default page;
