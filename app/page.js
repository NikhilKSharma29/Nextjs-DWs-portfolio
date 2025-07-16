"use client";
import React from "react";
import { ThemeProvider } from "@/context/ThemeContext";

import { Navbar } from "@/components/layouts/Navbar";
import Home from "@/components/layouts/Home";
import About from "@/components/layouts/About";
import Footer from "@/components/layouts/Footer";
import ReactHookForm from "@/components/form/rhf/rhf";
import { Toaster } from "react-hot-toast";

const page = () => {
  return (
    <ThemeProvider>
      <Navbar />

      <Toaster position="top-center" reverseOrder={false} />
      <Home id="home" />
      <About id="about" />
      <ReactHookForm id="contact" />
      <Footer />
    </ThemeProvider>
  );
};

export default page;
