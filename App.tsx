
import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <section id="education" className="py-20 bg-white">
          <Education />
        </section>
        <section id="experience" className="py-20 bg-slate-50">
          <Experience />
        </section>
        <section id="skills" className="py-20 bg-white">
          <Skills />
        </section>
      </main>
      <Chatbot />
      <Footer />
    </div>
  );
};

export default App;
