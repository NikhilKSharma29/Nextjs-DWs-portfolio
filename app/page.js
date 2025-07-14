"use client";
import React from "react";
import { ThemeProvider } from "@/context/ThemeContext";

import { Navbar } from "@/components/layouts/Navbar";
import Home from "@/components/layouts/Home";
import About from "@/components/layouts/About";
import Footer from "@/components/layouts/Footer";
import ReactHookForm from "@/components/form/rhf/rhf";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const page = () => {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ReactHookForm />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default page;
