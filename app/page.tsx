import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-b from-blue-500 to-blue-700 text-white">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">Jonathan Cho</h1>
        <p className="text-lg sm:text-xl max-w-2xl">
          Software Engineer
        </p>
        <a
          href="#projects"
          className="mt-6 px-6 py-3 bg-white text-blue-700 rounded-full shadow-md hover:bg-gray-200 transition"
        >
          View My Work
        </a>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 px-8 sm:px-20">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <p className="text-lg max-w-3xl mx-auto text-center">
          I specialize in React, Next.js, and TailwindCSS to create seamless digital experiences.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-8 sm:px-20 bg-gray-200 dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
            <Image
              src="/project1.png"
              alt="Easy Invoice"
              width={400}
              height={200}
              className="rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4">Easy Invoice</h3>
            <p className="text-sm mt-2">
              A simple invoice generator that allows users to create and manage invoices easily. Built with React, TailwindCSS, Typescript, and Electron.
            </p>
            <a
              href="#"
              className="inline-block mt-4 text-blue-500 hover:underline"
            >
              View Project →
            </a>
          </div>
          {/* Project 2 */}
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
            <Image
              src="/project2.png"
              alt="BrainMax"
              width={400}
              height={200}
              className="rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4">BrainMax</h3>
            <p className="text-sm mt-2">
              A simple invoice generator that allows users to create and manage invoices easily. Built with React, TailwindCSS, Typescript, and Electron.
            </p>
            <a
              href="#"
              className="inline-block mt-4 text-blue-500 hover:underline"
            >
              View Project →
            </a>
          </div>
          {/* Add more projects as needed */}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-8 sm:px-20">
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
      </section>
      {/* Footer */}
      <footer className="py-6 text-center bg-gray-300 dark:bg-gray-700">
        <p className="text-sm">
          © {new Date().getFullYear()} Jonathan. All rights reserved.
        </p>
      </footer>
    </div>
  );
}