'use client'

import Image from "next/image";
// import VolleyBall from './VolleyBall';
import {useState, useRef} from 'react';
import "./globals.css";
import { projectData, Project } from "./api/contact/components/project";
import ProjectModal from "./api/contact/components/ProjectModal";
import ExperienceSection from "./api/contact/components/ExperienceSection";

export default function Home() {
  const [activeProject, setActiveProject] = useState<any>(null);

  const openModal = (id: string) => {
    setActiveProject(projectData[id]);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="scroll-smooth bg-gray-200 text-gray-900 dark:text-gray-100 min-h-screen">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-center px-6 py-3">
          <div className="space-x-6">
            <a href="#deepDives" className="text-2xl text-gray-700 dark:text-gray-100 hover:text-blue-600 transition font-medium">
              Deep Dives
            </a>
            <a href="#experience" className="text-2xl text-gray-700 dark:text-gray-100 hover:text-blue-600 transition font-medium">
              Professional Experience
            </a>
            <a href="#projects" className="text-2xl text-gray-700 dark:text-gray-100 hover:text-blue-600 transition font-medium">
              Projects
            </a>
            <a target="_blank"
                rel="noopener noreferrer" href="https://github.com/hjblloop/" className="text-2xl text-gray-700 dark:text-gray-100 hover:text-blue-600 transition font-medium">
              GitHub
            </a>
          </div>
        </div>
      </nav>
      {/* Add padding to offset fixed nav */}
      <div className="" />
      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center text-center py-20 text-black h-screen">
        {/* Profile Picture */}
        <div className="mb-6">
          <Image
            src="/profile1.png" 
            alt="Jonathan Cho"
            width={300}
            height={300}
            className="rounded-full border-4 border-white shadow-lg mx-auto"
            priority
          />
        </div>
        <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
          Software Engineer & Problem Solver
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
         I build elegant solutions to complex problems by applying first principles from Physics, Computer Science, and Mathematics. Specialize in translating theory
         to scalable, real-world applications.
        </p>
      </header>
      {/* System Deep Dives Section */}
      <section className=" font-sans">
        <div id="modal-backdrop" className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] hidden flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-5xl max-h-[90vh] rounded-2xl shadow-2xl overflow-y-auto">
            <div id="modal-content" className="p-6 md:p-12">
              </div>
          </div>
        </div>
        <section id="deepDives" className="max-w-5xl mx-auto mb-20 px-6">
          <h2 className="text-4xl font-extrabold text-center mb-8">System Deep Dives</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <button onClick={() => openModal('pos-system')} className="group p-4 text-left bg-white border border-slate-200 rounded-2xl overflow-hidden cursor-pointer hover:border-blue-500 hover:shadow-lg transition-all">
              <div className="aspect-[16/12] bg-slate-100 overflow-hidden flex items-center justify-center">
                <img 
                  src='pos.png'
                  alt={`POS Preview`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold group-hover:text-blue-600 transition">Cross-Platform POS</h3>
                <p className="text-slate-600 text-sm mt-2 line-clamp-2">Developed a centralized retail ecosystem for multi-location enterprises. Engineered a single source of truth for inventory, payroll, and tax accounting while supporting fragmented payment hardware (Stripe/Clover) into a unified process.</p>
                <p className="mt-4 text-blue-600 text-xs font-bold uppercase tracking-wider">View Deep Dive &rarr;</p>
              </div>
            </button>
            <button onClick={() => openModal('financial-advisory-ecosystem')} className="group p-4 text-left bg-white border border-slate-200 rounded-2xl overflow-hidden cursor-pointer hover:border-blue-500 hover:shadow-lg transition-all">
              <div className="aspect-[16/12] bg-slate-100 overflow-hidden flex items-center justify-center">
                <img 
                  src='AdviseMe.png'
                  alt={`POS Preview`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy" 
                />
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-bold group-hover:text-blue-600 transition">Financial Advisory Ecosystem</h3>
                <p className="text-slate-600 text-sm mt-2 line-clamp-2">Developed a high-security financial ecosystem designed to bridge the gap between professional advisors and eager investors. </p>
                <p className="mt-4 text-blue-600 text-xs font-bold uppercase tracking-wider">View Deep Dive &rarr;</p>
              </div>
            </button>
          </div>
        </section>
      </section>
      {/* Work Experience Section */}
      <section id="experience" className="py-10 px-8 sm:px-20">
        <h2 className="text-4xl font-extrabold text-center mb-8">Professional Experience</h2>
        <div className="flex-1 max-w-4xl mx-auto">
          <ExperienceSection />
        </div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="py-20 px-8 sm:px-20">
        <h2 className="text-4xl font-extrabold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-2 gap-8 ">
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 flex flex-col justify-center items-center">
            <Image
              src="/trading.png"
              alt="Trading"
              width={400}
              height={200}
              className="rounded-md"
            />
            <h3 className="text-2xl font-semibold mt-4">Market Replay Engine</h3>
            <p className="text-sm mt-2">
              A deterministic market replay engine in C++ designed to simulate trading environments. Engineered a synchronized event-loop that streams historical 1-minute OHLCV data at variable timescales, allowing for the rigorous backtesting of trading strategies against authentic market volatility and liquidity patterns. 
            </p>
            <div
              className="inline-block mt-4 text-red-500"
            >
              Under Construction
            </div>
          </div>
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 flex flex-col justify-center items-center">
            <Image
              src="/HeatEquation.png"
              alt="BrainMax"
              width={400}
              height={200}
              className="rounded-md"
            />
            <h3 className="text-2xl font-semibold mt-4">Math, Physics, and Game Laboratory</h3>
            <p className="text-sm mt-2">
              A personal playground dedicated to the application of mathematical and physical models. This environment serves as a laboratory for converting self-study theory to performant code, focusing on simulating complex systems and algorithmic game theory.
            </p>
            <a
              href="https://github.com/hjblloop/makemathprettyagain"
              className="inline-block mt-4 text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project →
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section id="contact" className="py-20 px-8 sm:px-20">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
        <form className="max-w-lg mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
      </section> */}
      {/* The Modal Instance */}
      <ProjectModal 
        project={activeProject} 
        onClose={closeModal} 
      />
      {/* Footer */}
      <footer className="py-6 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Jonathan Cho. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
