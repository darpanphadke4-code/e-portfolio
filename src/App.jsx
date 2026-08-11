export default function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      {/* Glowing background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-120px] left-[-120px] h-72 w-72 rounded-full bg-purple-500/20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[-120px] right-[-120px] h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl animate-pulse"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-4 left-1/2 z-50 w-[92%] max-w-md -translate-x-1/2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl shadow-lg">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold tracking-wide text-white">
            Darpan.dev
          </span>

          <div className="flex gap-3 text-xs text-zinc-300 sm:gap-4 sm:text-sm">
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex min-h-screen items-center justify-center px-4 py-24 sm:py-28">
        <div className="max-w-2xl text-center">
          <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.25em] text-cyan-300 backdrop-blur sm:text-xs">
            Welcome to my portfolio
          </div>

          <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Hi, I'm
            <span className="block bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Darpan Phadke
            </span>
          </h1>

          <div className="mt-5 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-zinc-200 backdrop-blur sm:text-sm">
            IT Engineering Student • AI & Cloud Enthusiast • Full Stack Learner
          </div>

          <p className="mx-auto mt-6 max-w-2xl px-2 text-sm leading-7 text-zinc-300 sm:text-base lg:text-lg">
            I build modern web applications, cloud-based projects, and academic e-portfolios with a strong focus on responsive design, smooth user experience, and practical problem solving.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="#projects"
              className="rounded-2xl bg-purple-500 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-purple-400"
            >
              View Projects
            </a>

            <a
              href="mailto:darpanphadke4@gmail.com"
              className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              About Me
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
              Building modern web & cloud experiences
            </h2>

            <p className="mx-auto mt-5 max-w-2xl px-2 text-sm leading-7 text-zinc-300 sm:text-base lg:text-lg">
              I am an IT Engineering student from VIT Mumbai with interests in Full Stack Development, AI & ML, Cloud Computing, and Data Analysis. I enjoy transforming ideas into responsive, user-friendly applications and continuously improving my development skills through practical projects.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:border-purple-400/30 hover:bg-white/10">
              <h3 className="text-lg font-semibold text-white">
                🎓 Education
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                B.Tech in Information Technology Engineering at VIT Mumbai, currently focused on practical software development and cloud technologies.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:border-cyan-400/30 hover:bg-white/10">
              <h3 className="text-lg font-semibold text-white">
                💻 Interests
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                React, Tailwind CSS, Node.js, Spring Boot, SQL, Cloud Computing, and AI-powered applications.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:border-fuchsia-400/30 hover:bg-white/10 md:col-span-2 lg:col-span-1">
              <h3 className="text-lg font-semibold text-white">
                🚀 Current Goal
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                Create a premium academic e-portfolio where assignments, projects, cloud practicals, and technical reports can be showcased without any backend or database.
              </p>
            </div>
          </div>
        </div>
      </section>
            {/* Skills Section */}
      <section id="skills" className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Skills
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              Technologies I work with
            </h2>

            <p className="mx-auto mt-5 max-w-2xl px-2 text-sm leading-7 text-zinc-300 sm:text-base">
              A collection of tools and technologies I use for web development, cloud projects, and academic applications.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {[
              "HTML5",
              "CSS3",
              "JavaScript",
              "React",
              "Tailwind CSS",
              "Node.js",
              "Express.js",
              "Spring Boot",
              "SQL",
              "PostgreSQL",
              "Git & GitHub",
              "Cloud Computing",
            ].map((skill) => (
              <div
                key={skill}
                className="group rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-purple-400/30 hover:bg-white/10"
              >
                <p className="text-sm font-semibold text-zinc-200 transition group-hover:text-white sm:text-base">
                  {skill}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
            {/* Projects Section */}
      <section id="projects" className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Featured Projects
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              Things I've been building
            </h2>

            <p className="mx-auto mt-5 max-w-2xl px-2 text-sm leading-7 text-zinc-300 sm:text-base">
              A few selected projects that showcase my interest in full stack development, cloud computing, and modern web applications.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Project 1 */}
            <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-purple-400/30 hover:bg-white/10">
              <div className="h-44 bg-gradient-to-br from-purple-500/20 via-fuchsia-500/10 to-cyan-500/20"></div>

              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-bold text-white">CloudVault</h3>
                  <span className="rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-purple-200">
                    Cloud
                  </span>
                </div>

                <p className="mt-3 text-sm leading-6 text-zinc-300">
                  A cloud-based file storage application with user authentication and Azure Blob Storage integration for secure upload and download management.
                </p>

                <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-300">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Flask</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Azure Blob</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">SQLAlchemy</span>
                </div>

                <div className="mt-6 flex gap-3">
                  <a
                    href="https://github.com/darpanphadke4-code"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 rounded-xl bg-purple-500 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-purple-400"
                  >
                    GitHub
                  </a>
                  <a
                    href="#"
                    className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/10">
              <div className="h-44 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-purple-500/20"></div>

              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-bold text-white">QuickBill</h3>
                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-cyan-200">
                    Full Stack
                  </span>
                </div>

                <p className="mt-3 text-sm leading-6 text-zinc-300">
                  A self-billing system for malls featuring product management, shopping cart functionality, payment integration, and PostgreSQL-based inventory handling.
                </p>

                <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-300">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">React</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Node.js</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">PostgreSQL</span>
                </div>

                <div className="mt-6 flex gap-3">
                  <a
                    href="https://github.com/darpanphadke4-code"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 rounded-xl bg-cyan-500 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-cyan-400"
                  >
                    GitHub
                  </a>
                  <a
                    href="#"
                    className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-fuchsia-400/30 hover:bg-white/10">
              <div className="h-44 bg-gradient-to-br from-fuchsia-500/20 via-purple-500/10 to-cyan-500/20"></div>

              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-bold text-white">MediBooth</h3>
                  <span className="rounded-full border border-fuchsia-400/20 bg-fuchsia-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-fuchsia-200">
                    Frontend
                  </span>
                </div>

                <p className="mt-3 text-sm leading-6 text-zinc-300">
                  A responsive campus medical assistance portal with emergency support, interactive SVG maps, and a modern Tailwind CSS user interface optimized for mobile devices.
                </p>

                <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-300">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">React</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Tailwind CSS</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Netlify</span>
                </div>

                <div className="mt-6 flex gap-3">
                  <a
                    href="https://github.com/darpanphadke4-code"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 rounded-xl bg-fuchsia-500 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-fuchsia-400"
                  >
                    GitHub
                  </a>
                  <a
                    href="#"
                    className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
            {/* Academic E-Portfolio Section */}
      <section id="academic" className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Academic E-Portfolio
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              EWEM Assignments
            </h2>

            <p className="mx-auto mt-5 max-w-2xl px-2 text-sm leading-7 text-zinc-300 sm:text-base">
              A dedicated section for my Environmental and Waste Engineering Management (EWEM) assignments and activity submissions.
            </p>
          </div>

          <div className="mt-10">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-green-400/30 hover:bg-white/10">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    🌱 EWEM
                  </h3>
                  <p className="mt-2 text-sm text-zinc-300">
                    Environmental and Waste Engineering Management
                  </p>
                </div>

                <span className="rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-green-200">
                  Subject
                </span>
              </div>

              <p className="mt-4 text-sm leading-6 text-zinc-300">
                This section contains my EWEM course assignments and activity-based submissions organized in a simple frontend-only e-portfolio.
              </p>

              <div className="mt-6 space-y-3">
                <a
                  href="#"
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-200 transition hover:bg-white/10 hover:text-white"
                >
                  <span>📄 EWEM Pledge</span>
                  <span className="text-xs text-zinc-400">View</span>
                </a>

                <a
                  href="#"
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-200 transition hover:bg-white/10 hover:text-white"
                >
                  <span>🧩 EWEM Crossword Puzzle</span>
                  <span className="text-xs text-zinc-400">View</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
            {/* Contact Section */}
      <section id="contact" className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">
              08 — Contact
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
              Let's build something together.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg">
              Have an idea, internship opportunity or software project? Send a message.
            </p>
          </div>

          {/* Contact Card */}
          <div className="rounded-[2rem] border border-white/10 bg-[#070b1a]/90 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[340px_1fr]">
              {/* Left Side */}
              <div className="flex flex-col">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/20 ring-1 ring-purple-400/20">
                  <svg className="h-8 w-8 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 7l9 6 9-6m-18 10h18a2 2 0 002-2V7a2 2 0 00-2-2H3a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white">Get in touch</h3>

                <p className="mt-4 text-sm leading-7 text-zinc-300 sm:text-base">
                  I'm open to discussing projects, internships, collaborations and software-development opportunities.
                </p>

                <div className="mt-8 space-y-4 text-sm text-zinc-200 sm:text-base">
                  <a href="mailto:darpanphadke4@gmail.com" className="flex items-center gap-3 transition hover:text-white">
                    <svg className="h-5 w-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 7l9 6 9-6m-18 10h18a2 2 0 002-2V7a2 2 0 00-2-2H3a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span>darpanphadke4@gmail.com</span>
                  </a>

                  <a href="https://github.com/darpanphadke4-code" target="_blank" rel="noreferrer" className="flex items-center gap-3 transition hover:text-white">
                    <svg className="h-5 w-5 text-zinc-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.43 7.88 10.96.58.1.8-.25.8-.56 0-.28-.01-1.03-.02-2.02-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.72-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.3 1.19-3.12-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.19 1.19a11.1 11.1 0 015.8 0c2.22-1.5 3.19-1.19 3.19-1.19.63 1.59.23 2.77.11 3.06.74.82 1.19 1.86 1.19 3.12 0 4.43-2.69 5.4-5.26 5.69.41.35.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.14 0 .31.21.67.8.56A11.51 11.51 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
                    </svg>
                    <span>GitHub</span>
                  </a>

                  <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="flex items-center gap-3 transition hover:text-white">
                    <svg className="h-5 w-5 text-zinc-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.98 3.5C4.98 4.6 4.1 5.5 3 5.5S1.02 4.6 1.02 3.5 1.9 1.5 3 1.5s1.98.9 1.98 2zM1.5 8h3V22h-3V8zm7 0h2.88v1.91h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59V22h-3v-6.2c0-1.48-.03-3.39-2.06-3.39-2.06 0-2.38 1.61-2.38 3.28V22h-3V8z" />
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Right Side Form */}
              <form className="space-y-5">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-zinc-200">Name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-2xl border border-white/10 bg-[#0a1022] px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none transition focus:border-purple-400/50 focus:ring-2 focus:ring-purple-500/20"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-zinc-200">Email</label>
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full rounded-2xl border border-white/10 bg-[#0a1022] px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none transition focus:border-purple-400/50 focus:ring-2 focus:ring-purple-500/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-zinc-200">Message</label>
                  <textarea
                    rows={6}
                    placeholder="Tell me about your idea..."
                    className="w-full resize-none rounded-2xl border border-white/10 bg-[#0a1022] px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none transition focus:border-purple-400/50 focus:ring-2 focus:ring-purple-500/20"
                  ></textarea>
                </div>

                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 transition hover:-translate-y-1 hover:from-purple-400 hover:to-indigo-400"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}