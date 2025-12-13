"use client";

import Link from "next/link";
import ContactCTA from '@/components/ContactCTA';

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  status: 'completed' | 'in-progress' | 'planning';
  category: 'ai-product' | 'active' | 'past';
  highlight?: string;
}

// AI Products (自主產品)
const aiProducts: Project[] = [
  {
    id: 'vaitor',
    title: 'Vaitor - AI Video Tutor',
    description: 'AI-powered video tutoring system that analyzes educational videos and provides interactive learning experiences',
    tech: ['Next.js', 'Claude AI', 'Video Processing', 'TypeScript'],
    status: 'in-progress',
    category: 'ai-product',
  },
  {
    id: 'jutor',
    title: 'Jutor - AI English Tutor',
    description: 'Personalized AI English tutor with real-time feedback and pronunciation analysis',
    tech: ['FastAPI', 'OpenAI', 'Speech Recognition', 'Python'],
    status: 'in-progress',
    category: 'ai-product',
    highlight: 'Meta LLM Taiwan Pitch Top 8',
  },
  {
    id: 'cutor',
    title: 'Cutor - AI Writing Assistant',
    description: 'AI-powered writing assistant that helps users optimize content and writing style',
    tech: ['Claude AI', 'GPT-4', 'Next.js', 'TypeScript'],
    status: 'in-progress',
    category: 'ai-product',
  },
];

// Active Client Projects
const activeProjects: Project[] = [
  {
    id: 'language-learning',
    title: 'Language Learning Platform',
    description: 'AI-powered language learning platform with assignment grading, pronunciation analysis, and progress tracking',
    tech: ['FastAPI', 'PostgreSQL', 'Redis', 'Claude AI', 'Python'],
    status: 'in-progress',
    category: 'active',
  },
  {
    id: 'consultation-platform',
    title: 'Professional Consultation Platform',
    description: 'RESTful API backend for professional consultation mobile app with authentication and data management',
    tech: ['FastAPI', 'PostgreSQL', 'Python'],
    status: 'in-progress',
    category: 'active',
  },
  {
    id: 'card-consultation',
    title: 'Card Consultation Platform',
    description: 'Online consultation platform with CRM and booking system',
    tech: ['Vue.js', 'FastAPI', 'Python'],
    status: 'in-progress',
    category: 'active',
  },
  {
    id: 'healthcare-platform',
    title: 'Healthcare Platform - AWS Migration POC',
    description: 'AWS cloud infrastructure migration and optimization proof-of-concept for healthcare client',
    tech: ['AWS', 'Cloud Architecture', 'DevOps'],
    status: 'in-progress',
    category: 'active',
  },
  {
    id: 'ai-square',
    title: 'AI Square - AI Learning Platform',
    description: 'Multi-language AI learning platform supporting 14 languages with interactive exercises',
    tech: ['Next.js 15', 'React 19', 'Vertex AI', 'i18n'],
    github: 'https://github.com/junyiacademy/ai-square',
    status: 'in-progress',
    category: 'active',
  },
  {
    id: 'medical-decision-platform',
    title: 'Medical Decision Platform',
    description: 'AI-assisted shared decision-making platform for medical procedures with patient education tools',
    tech: ['FastAPI', 'React', 'Claude AI', 'Medical AI'],
    status: 'in-progress',
    category: 'active',
  },
];

const statusColors = {
  completed: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  'in-progress': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  planning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
};

const statusLabels = {
  completed: 'Completed',
  'in-progress': 'In Progress',
  planning: 'Planning',
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-bold">{project.title}</h3>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[project.status]}`}>
          {statusLabels[project.status]}
        </span>
      </div>

      {project.highlight && (
        <div className="mb-3 inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-xs font-medium">
          🏆 {project.highlight}
        </div>
      )}

      <p className="text-gray-600 dark:text-gray-400 mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Live Demo →
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            GitHub →
          </a>
        )}
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <h1 className="text-5xl font-bold mb-6 text-center">Projects</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-16 max-w-2xl mx-auto">
        From AI products to client projects — building solutions across education, healthcare, and enterprise
      </p>

      {/* AI Products Section */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-purple-600"></div>
          <h2 className="text-3xl font-bold">AI Products</h2>
          <div className="text-sm text-gray-500">(Self-developed)</div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiProducts.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Active Projects Section */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-1 w-12 bg-gradient-to-r from-green-600 to-blue-600"></div>
          <h2 className="text-3xl font-bold">Active Client Projects</h2>
          <div className="text-sm text-gray-500">(6 ongoing)</div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {activeProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <div className="text-center mt-20 p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl">
        <h2 className="text-3xl font-bold mb-4">Have an Interesting Project?</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          I&apos;m open to AI product development, EdTech consulting, and technical leadership opportunities
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="https://www.linkedin.com/in/tzu-yang-tsai/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            💼 Book Consultation
          </Link>
          <button
            className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            onClick={() => alert('Make a Wish feature coming soon! For now, please reach out via LinkedIn.')}
          >
            ✨ Make a Wish
          </button>
        </div>
      </div>

      {/* Contact CTA */}
      <ContactCTA />
    </div>
  );
}
