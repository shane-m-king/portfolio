import TetrisBackdrop from "@/components/TetrisBackdrop";

export default function AboutPage() {
  return (
    <>
      <TetrisBackdrop layout="about" />
      <p className="ml-8 nk-heading-pixel text-lg uppercase tracking-[0.25em] text-nk-accent">
         About Me
      </p>
      <section className="space-y-2 mt-6">
        {/* HERO */}
        <div className="grid md:grid-cols-2 gap-2 items-start">
        
          {/* LEFT COLUMN */}
          <div className="space-y-6 ml-28">        
            <h1 className="text-3xl font-semibold tracking-tight">
              Hey, I'm Shane — a full-stack software engineer based in Seattle.
            </h1>
        
            <p className="text-slate-300 text-[1.1rem] leading-relaxed">
              I love using logic to solve problems and I think programming is fun.
              Whether I'm designing APIs, structuring database models,
              or polishing UI interactions, I enjoy turning complex
              requirements into intuitive, reliable software.
            </p>
        
            {/* BACKGROUND SECTION */}
            <section className="nk-card p-6 space-y-4 max-w-3xl bg-slate-800/60 backdrop-blur-sm border-nk-accent-muted/60">
              <h2 className="text-2xl font-semibold tracking-wide text-center">Background</h2>
    
              <p className="text-base text-slate-200 leading-relaxed">
                Before engineering, I spent seven years as a professional content
                creator on Twitch. What started as a creative outlet evolved into a
                business that taught me self-management, project ownership, audience
                psychology, and the importance of good UX—skills that now shape the
                way I approach product development.
              </p>
    
              <p className="text-base text-slate-200 leading-relaxed">
                After moving to the U.S., I decided to pursue a career
                in software engineering. I completed Springboard's
                Software Engineering Bootcamp in November 2025, building full-stack
                applications with Next.js, Node, and MongoDB, while deepening my
                understanding of computer science fundamentals and modern web
                architecture.
              </p>
            </section>            
             {/* CURRENT GOALS */}
            <section className="nk-card p-6 space-y-4 max-w-3xl bg-slate-800/60 backdrop-blur-sm border-nk-accent-muted/60">
              <h2 className="text-2xl font-semibold tracking-wide text-center">
                What I'm Looking For
              </h2>
    
              <p className="text-base text-slate-200 leading-relaxed">
                I'm a fast learner, motivated by challenge, and excited to join a
                team where I can build software that people enjoy using. My focus is
                on creating products that are maintainable, scalable, and
                thoughtfully designed.
              </p>
    
              <p className="text-base text-slate-200 leading-relaxed">
                I'm currently seeking full-time opportunities as a software
                engineer— ideally with a team that values collaboration and
                continuous learning.
              </p>
            </section>
          </div>
        
          {/* RIGHT COLUMN */}
          <div className="flex flex-col place-items-center gap-6">
            {/* CTA PANEL */}
            <div className="nk-card p-4 flex flex-col items-center gap-2 bg-slate-800/60 backdrop-blur-sm w-full md:w-80 lg:w-96 border-nk-accent-muted/60">
              <h3 className="text-base font-semibold uppercase tracking-wide text-slate-300">Quick Links</h3>
            
              <div className="flex gap-3 text-sm">
                <a
                  href="/Shane-King-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nk-btn-primary px-4 py-2 text-base"
                >
                  Resume
                </a>
            
                <a
                  href="https://www.linkedin.com/in/shane-m-king"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nk-btn-ghost px-4 py-2 text-base"
                >
                  LinkedIn
                </a>
            
                <a
                  href="https://github.com/shane-m-king"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nk-btn-ghost px-4 py-2 text-base"
                >
                  GitHub
                </a>
              </div>
            </div>
        
            {/* IMAGE */}
            <div className="relative w-78 h-78md:w-92 md:h-92 rounded-lg overflow-hidden">
              <img
                src="/images/ProfilePicturev2.png"
                alt="Shane King"
                className="object-cover w-full h-full"
              />
            </div>
        
            {/* SKILLS  */}
            <div className="grid grid-cols-2 gap-4 w-full md:w-100 lg:w-120">
        
              <div className="nk-card p-4 space-y-1 bg-slate-800/60 backdrop-blur-sm border-nk-accent-muted/60">
                <h3 className="text-base font-semibold uppercase tracking-wide text-slate-300 text-center mb-4">Languages</h3>
                <ul className="text-[0.9rem] text-slate-200 space-y-0.5">
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>Python</li>
                  <li>SQL</li>
                  <li>HTML/CSS</li>
                </ul>
              </div>
        
              <div className="nk-card p-4 space-y-1 bg-slate-800/60 backdrop-blur-sm border-nk-accent-muted/60">
                <h3 className="text-base font-semibold uppercase tracking-wide text-slate-300 text-center mb-4">Frameworks</h3>
                <ul className="text-[0.9rem] text-slate-200 space-y-0.5">
                  <li>React</li>
                  <li>Next.js</li>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>Tailwind</li>
                </ul>
              </div>
        
              <div className="nk-card p-4 space-y-1 col-span-2 bg-slate-800/60 backdrop-blur-sm border-nk-accent-muted/60">
                <h3 className="text-base font-semibold uppercase tracking-wide text-slate-300 text-center mb-4">Databases & Tools</h3>
                <ul className="text-[0.9rem] text-slate-200 space-y-0.5">
                  <li>MongoDB, PostgreSQL</li>
                  <li>REST APIs, Auth</li>
                  <li>Git/GitHub, CI/CD</li>
                  <li>Testing (Jest)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
