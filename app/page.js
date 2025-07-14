"use client";
import React from "react";
import { ThemeProvider } from "@/context/ThemeContext";

import { Navbar } from "@/components/layouts/Navbar";
import Home from "@/components/layouts/Home";
import About from "@/components/layouts/About";
import Experience from "@/components/layouts/Experience";
import Footer from "@/components/layouts/Footer";
import ReactHookForm from "@/components/form/rhf/rhf";

const page = () => {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <Home />
        <About />
        {/* <Experience /> */}
        <ReactHookForm />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default page;
