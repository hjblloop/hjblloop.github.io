'use client'

import Image from "next/image";
import VolleyBall from './VolleyBall';
import {useState} from 'react';

export default function Home() {
  const [showSpeech, setShowSpeech] = useState(false);

  const handleVolleyBallAnimationEnd = () => {
    setShowSpeech(true);
  };

  return (
    <div className="scroll-smooth bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-center px-6 py-3">
          <div className="space-x-6">
            <a href="#experience" className="text-2xl text-gray-700 dark:text-gray-100 hover:text-blue-600 transition font-medium">
              Work Experience
            </a>
            <a href="#skills" className="text-2xl text-gray-700 dark:text-gray-100 hover:text-blue-600 transition font-medium">
              Skills
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
      <header className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-b from-blue-400 to-blue-500 text-black">
        {/* Profile Picture */}
        <div className="mb-6">
          {!showSpeech ? (
            <Image
              src="/profile1.png" 
              alt="Jonathan Cho"
              width={500}
              height={500}
              className="rounded-full border-4 border-white shadow-lg mx-auto"
              priority
            />) : (
            <Image
              src="/profile2.png" 
              alt="Jonathan Cho"
              width={500}
              height={500}
              className="rounded-full border-4 border-white shadow-lg mx-auto"
              priority
            />
          )
          }
        </div>
        <p className="text-lg font-bold sm:text-3xl max-w-5xl">
          Hey, I'm  <span className="font-extrabold">Jonathan Cho</span>. I love learning new things and building fun and elegant projects. You can see what I'm learning here.
        </p>
        <a
          href="#projects"
          className="mt-6 px-6 py-3 bg-white text-blue-700 rounded-full shadow-md hover:bg-gray-200 transition"
        >
          View My Work
        </a>
      </header>
      <VolleyBall onAnimationEnd={handleVolleyBallAnimationEnd}/>
      {/* Work Experience Section */}
      <section id="experience" className="py-10 px-8 sm:px-20 bg-orange-300 dark:bg-orange-800">
        <h2 className="text-4xl font-extrabold text-center mb-8">Work Experience</h2>
        <div className="mx-auto flex flex-col md:flex-row gap-6" style={{ maxWidth: "100rem" }}>
          {/* Job 1 */}
          <div className="flex-1 bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">Software Engineer</h3>
              <p className="text-sm text-gray-500">Aug 2022 - May 2024</p>
            </div>
            <p className="text-sm text-gray-500">Epic Systems - Verona, WI</p>
            <p className="mt-2">
              Worked with cross-functional teams to design and both internal and customer-facing software applications. Mainly used <span className="font-bold text-orange-500">C#, TypeScript, React, and SQL</span> to develop responsive software applications at scale.
            </p>
          </div>
          {/* Job 2 */}
          <div className="flex-1 bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">Researcher</h3>
              <p className="text-sm text-gray-500">Jan 2020 - May 2022</p>
            </div>
            <p className="text-sm text-gray-500">Burton Lab - Atlanta, GA</p>
            <p className="mt-2">
              Managed multiple online and in-person research projects to analyze soft matter behavior in different environments. Mainly used <span className="font-bold text-orange-500">Python, MATLAB, and TensorFlow</span> to incorporate machine learning into research projects.
            </p>
            <p className="mt-2">
              Honors Thesis: 
              <a 
                href="https://etd.library.emory.edu/concern/etds/m900nv74g?locale=en" 
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer">
                "Accurate Imaging of Particle Motion in Dusty Plasmas"
              </a>
            </p>
            <p className="mt-2">
              Publications: 
              <a href="https://journals.aps.org/pre/abstract/10.1103/PhysRevE.106.035303" 
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer">
                "Extracting forces from noisy dynamics in dusty plasmas"
              </a>
            </p>
          </div>
          {/* Job 3 */}
          <div className="flex-1 bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">Tutor</h3>
              <p className="text-sm text-gray-500">Forever</p>
            </div>
            <p className="text-sm text-gray-500">Wherever I am</p>
            <p className="mt-2">
              As much as I like to learn, I love to help others learn even more.
            </p>
            <ul className="list-disc list-outside pl-5">
              <li className="flex items-start">
                <span className="min-w-[6rem] text-gray-500">2013-present</span>
                <span className="ml-2">Math tutor</span>
              </li>
              <li className="flex items-start">
                <span className="min-w-[6rem] text-gray-500">2018-present</span>
                <span className="ml-2">SAT tutor</span>
              </li>
              <li className="flex items-start">
                <span className="min-w-[6rem] text-gray-500">2020-2022</span>
                <span className="ml-2">Organic Chemistry Teaching Assistant</span>
              </li>
              <li className="flex items-start">
                <span className="min-w-[6rem] text-gray-500">2024-present</span>
                <span className="ml-2">Computer Science tutor</span>
              </li>
            </ul>
            <p className="mt-2">My learning resources:</p>
            <a 
              className="text-blue-500 hover:underline" 
              href="https://github.com/hjblloop/Brainmax"
              target="_blank"
              rel="noopener noreferrer">
              GongBu
            </a>
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section id="skills" className="py-10 px-8 sm:px-20 bg-gradient-to-b from-blue-400 to-blue-500">
        <h2 className="text-4xl font-extrabold text-center mb-8">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 flex flex-col items-center justify-center text-center">
            <div className="flex items-center justify-center mb-4">
              <Image
                src="/logos/TypeScript_logo.svg"
                alt="Typescript Logo"
                width={100}
                height={64}
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold">TypeScript</h3>
          </div>
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 flex flex-col items-center justify-center text-center">
            <div className="flex items-center justify-center mb-4">
              <Image
                src="/logos/React-icon.svg"
                alt="Node.js"
                width={100}
                height={64}
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold">React</h3>
          </div>
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 flex flex-col items-center justify-center text-center">
            <div className="flex items-center justify-center mb-7">
              <Image
                src="/logos/Nextjs-logo.svg"
                alt="Node.js"
                width={180}
                height={64}
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold">Next.js</h3>
          </div>
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 flex flex-col items-center justify-center text-center">
            <div className="flex items-center justify-center mb-4">
              <Image
                src="/logos/Node.js_logo.svg"
                alt="Node.js"
                width={130}
                height={64}
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold">Node.js</h3>
          </div>
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 flex flex-col items-center justify-center text-center">
            <div className="flex items-center justify-center mb-4">
              <Image
                src="/logos/Postgresql_elephant.svg"
                alt="Node.js"
                width={100}
                height={64}
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold">PostgreSQL</h3>
          </div>
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 flex flex-col items-center justify-center text-center">
            <div className="flex items-center justify-center mb-4">
              <Image
                src="/logos/Python-logo-notext.svg"
                alt="Node.js"
                width={100}
                height={64}
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold">Python</h3>
          </div>
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 flex flex-col items-center justify-center text-center">
            <div className="flex items-center justify-center mb-4">
              <Image
                src="/logos/Javascript_Logo.png"
                alt="Node.js"
                width={100}
                height={64}
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold">JavaScript</h3>
          </div>
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 flex flex-col items-center justify-center text-center">
            <div className="flex items-center justify-center mb-4">
              <Image
                src="/logos/Git-logo.svg"
                alt="Node.js"
                width={100}
                height={64}
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold">Git</h3>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-8 sm:px-20 bg-orange-300 dark:bg-orange-800">
        <h2 className="text-4xl font-extrabold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 items-center justify-center flex flex-col">
            <Image
              src="/GongBu.png"
              alt="Easy Invoice"
              width={400}
              height={200}
              className="rounded-md items-center justify-center"
            />
            <h3 className="text-2xl font-semibold mt-4">GongBu</h3>
            <p className="text-sm mt-2">
              An AI-powered interactive learning tool allowing users to learn specific topics through personalized learning. Built with <span className="text-blue-600 font-bold">TypeScript, React, PostgreSQL</span> and <span className="text-blue-600 font-bold">Google Gemini</span>.
            </p>
            <a
              href="https://github.com/hjblloop/Brainmax"
              className="inline-block mt-4 text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project →
            </a>
          </div>
          {/* Project 2 */}
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 flex flex-col justify-center items-center">
            <Image
              src="/HeatEquation.png"
              alt="BrainMax"
              width={400}
              height={200}
              className="rounded-md"
            />
            <h3 className="text-2xl font-semibold mt-4">Math Modeling</h3>
            <p className="text-sm mt-2">
              A math library to visualize advanced math and physics concepts. Built with <span className="text-blue-600 font-bold">Python, pandas</span> and <span className="text-blue-600 font-bold">numpy</span>.
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
          {/* Add more projects as needed */}
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
      {/* Footer */}
      <footer className="py-6 text-center bg-gray-300">
        <p className="text-sm">
          © {new Date().getFullYear()} Jonathan Cho. All rights reserved.
        </p>
      </footer>
    </div>
  );
}