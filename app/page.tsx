"use client";

import Link from "next/link";
import { FaLinkedin, FaGithub, FaMedium } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center py-20">
        <div className="mb-4 inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
          🏆 Meta LLM Taiwan Pitch - Top 8 Finalist
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Tzu-Yang Tsai
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4">
          CAIO at Junyi Academy
        </p>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8">
          10+ years building data products and AI solutions across education, healthcare, and enterprise sectors
        </p>

        {/* Social Links */}
        <div className="flex gap-4 justify-center mb-12">
          <a
            href="https://www.linkedin.com/in/tzu-yang-tsai/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/Youngger9765"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://medium.com/@young-junyi"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Medium"
          >
            <FaMedium className="w-6 h-6" />
          </a>
        </div>

        {/* Tagline */}
        <div className="mb-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg inline-block">
          <p className="text-lg font-medium text-blue-900 dark:text-blue-100">
            不只做 AI，更教你如何做 AI
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/services"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            查看服務方案
          </Link>
          <Link
            href="/projects"
            className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            View AI Products
          </Link>
          <button
            onClick={() => {
              const chatWidget = document.querySelector('[data-chat-widget]') as HTMLElement;
              if (chatWidget) {
                chatWidget.click();
              }
            }}
            className="px-8 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            Chat with AI Me
          </button>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="max-w-6xl mx-auto py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Key Achievements</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">💰</div>
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">$1.2M</div>
            <p className="text-gray-600 dark:text-gray-400">Saved with data dashboard</p>
          </div>
          <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">📈</div>
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">+50%</div>
            <p className="text-gray-600 dark:text-gray-400">Active user growth</p>
          </div>
          <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">👥</div>
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">&lt;5%</div>
            <p className="text-gray-600 dark:text-gray-400">Team turnover rate</p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">🎤</div>
            <p className="font-semibold mb-2">Speaker</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">MediaTek AI Conference</p>
          </div>
          <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">🎓</div>
            <p className="font-semibold mb-2">AWS Certified</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Solutions Architect</p>
          </div>
          <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">🚀</div>
            <p className="font-semibold mb-2">10+ Leaders</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Trained & mentored</p>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="max-w-6xl mx-auto py-20 px-4 bg-gray-50 dark:bg-gray-900 rounded-2xl">
        <h2 className="text-4xl font-bold text-center mb-12">What I Do</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg">
            <h3 className="font-semibold text-xl mb-3">AI Product Development</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Building AI-powered products from concept to launch. Specialized in EdTech, healthcare, and enterprise solutions.
            </p>
            <div className="text-sm text-gray-500">Vaitor · Jutor · Cutor</div>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg">
            <h3 className="font-semibold text-xl mb-3">AI Strategy & Leadership</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Leading AI transformation initiatives. From strategy to implementation, with focus on measurable business impact.
            </p>
            <div className="text-sm text-gray-500">CAIO at Junyi Academy</div>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg">
            <h3 className="font-semibold text-xl mb-3">Full-Stack Development</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              End-to-end development with modern tech stack. Next.js, FastAPI, cloud infrastructure, and AI integration.
            </p>
            <div className="text-sm text-gray-500">6 Active Projects</div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="max-w-4xl mx-auto py-20 px-4 text-center">
        <div className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl">
          <h2 className="text-3xl font-bold mb-6">My Philosophy</h2>
          <blockquote className="text-2xl font-serif italic text-gray-700 dark:text-gray-300 mb-4">
            &ldquo;選擇困難的路，有更大機會讓人生累積的故事更精彩&rdquo;
          </blockquote>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Choose the difficult path — it gives you a greater chance to accumulate stories that make life extraordinary
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto py-20 px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Let&apos;s Work Together</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Open to AI product development, EdTech consulting, and technical leadership opportunities
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/about"
            className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Learn More About Me
          </Link>
          <Link
            href="https://www.linkedin.com/in/tzu-yang-tsai/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
          >
            Connect on LinkedIn
          </Link>
        </div>
      </section>
    </div>
  );
}
