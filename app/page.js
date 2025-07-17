"use client";
import React, { useState } from "react";
import { ThemeProvider } from "@/context/ThemeContext";

import { Navbar } from "@/components/layouts/Navbar";
import Home from "@/components/layouts/Home";
import About from "@/components/layouts/About";
import Footer from "@/components/layouts/Footer";
import ReactHookForm from "@/components/form/rhf/rhf";
import { Toaster } from "react-hot-toast";
import ChatBot from "@/components/chatbot/ChatBot";

const page = () => {
  const [showChat, setShowChat] = useState(false);
  const toggleChat = () => setShowChat((prev) => !prev);
  return (
    <ThemeProvider>
      <Navbar onChatToggle={toggleChat} />

      <Toaster position="top-center" reverseOrder={false} />
      <Home id="home" />
      <About id="about" />
      <ReactHookForm id="contact" />
      <Footer />
      <div
        className={`transition-all duration-300 ${
          showChat ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        } fixed bottom-1 right-4`}
      >
        <ChatBot />
      </div>
    </ThemeProvider>
  );
};

export default page;
