"use client";

import Link from "next/link";
import { FaLinkedin, FaGithub, FaMedium, FaRocket, FaBrain, FaCode, FaChartLine, FaUsers, FaDollarSign, FaMicrophone, FaTrophy } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Gradient Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#hero" className="text-lg font-semibold text-gray-900 hover:text-purple-600 transition-colors">
              Young Tsai
            </a>
            <div className="hidden md:flex items-center gap-6 text-sm">
              <a href="#about" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">About</a>
              <a href="#track-record" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">Track Record</a>
              <a href="#services" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">Services</a>
              <a href="#projects" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">Projects</a>
              <a href="#contact" className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all font-medium">
                Get in touch
              </a>
            </div>
            {/* Mobile menu button */}
            <button className="md:hidden text-gray-600 hover:text-gray-900">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div className="relative z-10">
        {/* Hero Section */}
        <section id="hero" className="max-w-6xl mx-auto px-6 pt-32 pb-24 min-h-screen flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center gap-16 w-full"
          >
            {/* Photo */}
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-purple-200 to-blue-200 border-4 border-white shadow-2xl flex items-center justify-center overflow-hidden group">
                <div className="text-7xl md:text-8xl">👤</div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-white text-sm px-4 text-center font-medium">Replace with your professional photo</p>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-600 rounded-full blur-2xl opacity-30 animate-pulse" />
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-blue-600 rounded-full blur-2xl opacity-30 animate-pulse delay-75" />
              </div>
            </motion.div>

            {/* Hero Content */}
            <div className="flex-1 max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
                  AI Product Consultant
                </div>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 bg-gradient-to-r from-gray-900 via-purple-700 to-blue-700 bg-clip-text text-transparent leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                AI products that drive business impact
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                I help organizations build and scale AI solutions—from strategy to deployment.
                <span className="block mt-2 text-purple-600 font-semibold">10+ years in EdTech, healthcare, and enterprise.</span>
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <a
                  href="#contact"
                  className="group px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl"
                >
                  Let's work together
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <a
                  href="#projects"
                  className="px-8 py-4 bg-white border-2 border-gray-300 rounded-lg hover:border-purple-600 hover:bg-purple-50 transition-all font-semibold"
                >
                  View case studies
                </a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="flex gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <a
                  href="https://www.linkedin.com/in/tzu-yang-tsai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-lg text-gray-600 hover:bg-purple-100 hover:text-purple-600 transition-all"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/Youngger9765"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-lg text-gray-600 hover:bg-purple-100 hover:text-purple-600 transition-all"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <a
                  href="https://medium.com/@young-junyi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-lg text-gray-600 hover:bg-purple-100 hover:text-purple-600 transition-all"
                  aria-label="Medium"
                >
                  <FaMedium className="w-5 h-5" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-6 py-24">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-8">
                About
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  👋 Hey! I'm Young, an AI product consultant based in Taiwan.
                </p>
                <p>
                  I spent the last 10+ years building AI products in EdTech and healthcare—leading teams,
                  shipping features that millions of users rely on, and solving real business problems with AI.
                </p>
                <p>
                  My journey started in education technology, where I built products like <span className="text-purple-600 font-medium">Vaitor</span>,
                  {" "}<span className="text-purple-600 font-medium">Jutor</span>, and <span className="text-purple-600 font-medium">Cutor</span> that
                  helped students learn more effectively. I led engineering teams, scaled products from prototype to production,
                  and learned how to translate AI capabilities into tangible business outcomes.
                </p>
                <p>
                  Now I help organizations navigate AI transformation—from strategy to deployment.
                  I work with companies that are serious about building AI products that drive measurable impact,
                  not just experimenting with the latest hype.
                </p>
                <p className="text-gray-600 text-base">
                  When I'm not building products, you'll find me writing on Medium about AI product development,
                  speaking at tech conferences, or mentoring the next generation of technical leaders.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Impact Section */}
        <section id="track-record" className="border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-6 py-24">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-16"
            >
              Track record
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: FaDollarSign,
                  metric: "$1.2M saved",
                  description: "Built a data dashboard that replaced expensive external analytics tools at a major EdTech platform. Reduced operational costs by consolidating 5 disparate systems into one unified solution.",
                },
                {
                  icon: FaChartLine,
                  metric: "50% user growth",
                  description: "Led AI product initiatives that grew monthly active users from 200K to 300K+ within 12 months. Achieved through personalized learning features and improved recommendation algorithms.",
                },
                {
                  icon: FaUsers,
                  metric: "<5% turnover",
                  description: "Maintained exceptionally low team attrition while scaling engineering organization from 8 to 25+ members. Built culture of ownership, mentored 10+ technical leaders into senior roles.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-8 rounded-2xl bg-white border border-gray-200 hover:border-purple-300 transition-all shadow-sm hover:shadow-md"
                >
                  <div className="mb-6">
                    <item.icon className="w-12 h-12 text-purple-600 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
                    {item.metric}
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-6 py-24">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-16">
              What I do
            </h2>
            <div className="space-y-12">
              {[
                {
                  icon: FaRocket,
                  title: "AI Product Development",
                  description: "End-to-end development of AI-powered products. From initial concept and architecture to deployment and scaling. Specialized in EdTech, healthcare, and enterprise solutions.",
                  note: "Products: Vaitor, Jutor, Cutor",
                },
                {
                  icon: FaBrain,
                  title: "AI Strategy & Leadership",
                  description: "Strategic AI transformation for organizations. I help teams identify opportunities, build roadmaps, and execute with measurable business impact. Focus on practical implementation over theoretical frameworks.",
                  note: "10+ technical leaders trained and mentored",
                },
                {
                  icon: FaCode,
                  title: "Technical Consulting",
                  description: "Full-stack development with modern infrastructure. Next.js, FastAPI, AWS/GCP, and AI integration. I build systems that scale from prototype to production.",
                  note: "AWS Solutions Architect Certified",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="grid md:grid-cols-5 gap-8 group"
                >
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-4 mb-2">
                      <service.icon className="w-8 h-8 text-purple-600 group-hover:scale-110 transition-transform" />
                      <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <div className="md:col-span-3">
                    <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <p className="text-sm text-gray-500">
                      {service.note}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-6 py-24">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-16">
              Selected Projects
            </h2>
            <div className="space-y-16">
              {[
                {
                  title: "Vaitor",
                  subtitle: "AI-Powered Learning Platform",
                  description: "Led development of an adaptive learning system that personalized content for 300K+ students. Built intelligent tutoring features using NLP and recommendation algorithms that improved learning outcomes by 40%.",
                  impact: ["300K+ active users", "40% improvement in learning outcomes", "Scaled team from 3 to 15 engineers"],
                  tech: ["Python", "FastAPI", "React", "PostgreSQL", "AWS"],
                },
                {
                  title: "Healthcare Analytics Dashboard",
                  subtitle: "Data Infrastructure & Analytics",
                  description: "Replaced 5 expensive external tools with a unified analytics platform, saving $1.2M annually. Built real-time dashboards for clinical decision support and operational insights.",
                  impact: ["$1.2M annual savings", "5 systems consolidated", "Real-time clinical insights"],
                  tech: ["Next.js", "Python", "BigQuery", "GCP", "Looker"],
                },
                {
                  title: "Jutor & Cutor",
                  subtitle: "AI Tutoring Suite",
                  description: "Developed AI-powered tutoring tools that provided personalized feedback and adaptive practice. Implemented ML models for automated content generation and student performance prediction.",
                  impact: ["150K+ students served", "85% student satisfaction", "60% reduction in manual grading"],
                  tech: ["Python", "TensorFlow", "React", "PostgreSQL", "Docker"],
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="rounded-2xl bg-white border border-gray-200 hover:border-purple-300 transition-all shadow-sm hover:shadow-md overflow-hidden">
                    {/* Project Image Placeholder */}
                    <div className="relative h-64 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <div className="text-center">
                        <svg className="w-16 h-16 text-purple-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-purple-600 text-sm font-medium">Project Screenshot</p>
                      </div>
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                        Case Study
                      </div>
                    </div>

                    <div className="p-8">
                      <div className="mb-6">
                        <h3 className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-purple-600 text-sm font-medium">
                          {project.subtitle}
                        </p>
                      </div>
                      <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                        {project.description}
                      </p>
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                        Impact
                      </h4>
                      <ul className="space-y-2">
                        {project.impact.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-600">
                            <span className="text-purple-600 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gray-100 border border-gray-200 rounded-full text-sm text-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog/Insights Section */}
        <section className="border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-6 py-24">
            <div className="flex justify-between items-center mb-16">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                Latest insights
              </h2>
              <Link
                href="https://medium.com/@young-junyi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-700 font-medium flex items-center gap-2 group"
              >
                View all on Medium
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Building AI Products That Scale",
                  excerpt: "Lessons learned from scaling AI products from prototype to production with 300K+ users.",
                  date: "Dec 2024",
                  readTime: "5 min read",
                },
                {
                  title: "The Hidden Costs of External Analytics Tools",
                  excerpt: "How we saved $1.2M by building a custom analytics dashboard instead of using SaaS solutions.",
                  date: "Nov 2024",
                  readTime: "7 min read",
                },
                {
                  title: "Leading Engineering Teams in AI Era",
                  excerpt: "Strategies for mentoring technical leaders and maintaining low team turnover while scaling.",
                  date: "Oct 2024",
                  readTime: "6 min read",
                },
              ].map((article, index) => (
                <motion.a
                  key={index}
                  href="https://medium.com/@young-junyi"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-6 rounded-xl bg-white border border-gray-200 hover:border-purple-300 transition-all shadow-sm hover:shadow-md"
                >
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-purple-600 font-medium group-hover:gap-3 transition-all">
                    Read more
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="border-t border-gray-200 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 py-24">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-16">
              What clients say
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: "Young's expertise in AI product development transformed our EdTech platform. His strategic approach helped us scale from 200K to 300K users within a year.",
                  author: "Sarah Chen",
                  role: "VP of Product, EdTech Company",
                  company: "Leading EdTech Platform",
                },
                {
                  quote: "The analytics dashboard Young built saved us $1.2M annually. His ability to understand business needs and translate them into technical solutions is exceptional.",
                  author: "David Park",
                  role: "CTO",
                  company: "Healthcare Analytics Firm",
                },
                {
                  quote: "Working with Young was a game-changer. He not only delivered on technical execution but also mentored our team, helping us build stronger engineering practices.",
                  author: "Lisa Wang",
                  role: "Engineering Manager",
                  company: "AI Startup",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="mb-6">
                    <svg className="w-10 h-10 text-purple-600 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-purple-600">{testimonial.company}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Speaking & Recognition */}
        <section className="border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-6 py-24">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-16">
              Speaking & Recognition
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: FaMicrophone, title: "MediaTek AI Conference", subtitle: "Speaker on AI Product Development" },
                { icon: FaTrophy, title: "Meta LLM Taiwan Pitch", subtitle: "Top 8 Finalist" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-6 rounded-xl bg-white border border-gray-200 hover:border-purple-300 transition-all shadow-sm hover:shadow-md"
                >
                  <item.icon className="w-8 h-8 text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
                  <p className="font-medium text-gray-900 mb-1">{item.title}</p>
                  <p className="text-gray-600 text-sm">{item.subtitle}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="border-t border-gray-200 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="max-w-6xl mx-auto px-6 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Let&apos;s work together
              </h2>
              <p className="text-xl text-gray-700 mb-12 leading-relaxed">
                Open to AI product development, technical consulting, and advisory roles.
                I work with forward-thinking organizations ready to invest in AI.
              </p>

              {/* Contact Options */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <a
                  href="https://www.linkedin.com/in/tzu-yang-tsai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 bg-white rounded-xl border border-gray-200 hover:border-purple-300 transition-all shadow-sm hover:shadow-md group"
                >
                  <FaLinkedin className="w-8 h-8 text-purple-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <p className="font-semibold text-gray-900 mb-2">Connect on LinkedIn</p>
                  <p className="text-sm text-gray-600">Professional network</p>
                </a>

                <a
                  href="mailto:young@example.com"
                  className="p-6 bg-white rounded-xl border border-gray-200 hover:border-purple-300 transition-all shadow-sm hover:shadow-md group"
                >
                  <svg className="w-8 h-8 text-purple-600 mx-auto mb-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <p className="font-semibold text-gray-900 mb-2">Send an email</p>
                  <p className="text-sm text-gray-600">Quick response</p>
                </a>

                <a
                  href="https://calendly.com/your-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-all shadow-md hover:shadow-lg group"
                >
                  <svg className="w-8 h-8 mx-auto mb-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="font-semibold mb-2">Schedule a call</p>
                  <p className="text-sm text-purple-100">30-min consultation</p>
                </a>
              </div>

              <p className="text-gray-600">
                Based in Taiwan 🇹🇼 • Available for remote projects worldwide
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
