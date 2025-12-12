"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-5xl font-bold mb-6">About Me</h1>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Who I Am</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            I&apos;m Young, a full-stack developer with a passion for building innovative web applications
            and integrating AI technologies. I specialize in modern web development using Next.js,
            React, and TypeScript, combined with backend expertise in FastAPI and Python.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            My journey in software development has led me to work on diverse projects ranging from
            educational platforms to medical AI applications, always focusing on creating solutions
            that make a real impact.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">What I Do</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Full-Stack Development</h3>
              <p className="text-gray-600 dark:text-gray-300">
                I build end-to-end web applications using modern frameworks and best practices.
                From responsive frontends to scalable backends, I handle the entire development lifecycle.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">AI Integration</h3>
              <p className="text-gray-600 dark:text-gray-300">
                I integrate AI capabilities into applications using Claude, OpenAI, and other
                cutting-edge AI tools to create intelligent, user-friendly experiences.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Project Management</h3>
              <p className="text-gray-600 dark:text-gray-300">
                I manage multiple projects simultaneously using modern development workflows,
                automation, and AI-assisted development tools.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Frontend</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Next.js 15 & React 19</li>
                <li>• TypeScript</li>
                <li>• Tailwind CSS</li>
                <li>• MDX & Content Management</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Backend</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• FastAPI & Python</li>
                <li>• Node.js</li>
                <li>• PostgreSQL</li>
                <li>• RESTful APIs</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">AI & ML</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Claude AI (Anthropic)</li>
                <li>• OpenAI Integration</li>
                <li>• Vertex AI</li>
                <li>• AI Agent Development</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">DevOps & Tools</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• AWS & Cloud Infrastructure</li>
                <li>• Docker</li>
                <li>• Git & GitHub</li>
                <li>• CI/CD Pipelines</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Current Projects</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            I&apos;m currently managing and developing 6 active projects:
          </p>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>• <strong>Language Learning Platform</strong> - AI-powered learning platform</li>
            <li>• <strong>Card Consultation Platform</strong> - Online consultation platform</li>
            <li>• <strong>AI Square</strong> - Multi-language AI learning platform</li>
            <li>• <strong>Medical Decision Platform</strong> - AI-powered medical platform</li>
            <li>• <strong>Professional Consultation Platform</strong> - Consultation API</li>
            <li>• <strong>Healthcare Platform</strong> - AWS infrastructure migration</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            Feel free to chat with my AI assistant or reach out directly!
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => {
                const chatWidget = document.querySelector('[data-chat-widget]') as HTMLElement;
                if (chatWidget) {
                  chatWidget.click();
                }
              }}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Chat with AI Assistant
            </button>
            <Link
              href="/blog"
              className="px-8 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors inline-block"
            >
              Read My Blog
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
