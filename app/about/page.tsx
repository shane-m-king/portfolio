import TetrisBackdrop from "@/components/TetrisBackdrop";

export default function AboutPage() {
  return (
    <>
      <div className="hidden md:block"><TetrisBackdrop layout="about" /></div>
      <p className="nk-heading-pixel text-[calc(var(--tetris-unit)*0.4)] uppercase tracking-[0.25em] text-nk-accent">
         About Me
      </p>
      <section className="mt-[calc(var(--tetris-unit)*0.5)]">
        {/* HERO */}
        <div className="
          grid
          md:grid-cols-2
          mx-[2%]
          gap-[calc(var(--tetris-unit)*0.05)]
          items-start
          max-w-[calc(var(--tetris-unit)*120)]
        ">
        
          {/* LEFT COLUMN */}
          <div className="space-y-[calc(var(--tetris-unit)*0.8)] mx-[calc(var(--tetris-unit)*0.8)] my-[calc(var(--tetris-unit)*0.3)]">        
            <h1 className="text-3xl font-semibold tracking-tight">
              Hey, I'm Shane — a full-stack software engineer based in Seattle.
            </h1>
        
            <p className="text-slate-300 text-[1.08rem] leading-relaxed">
              I love using logic to solve problems and I think programming is fun.
              Whether I'm designing APIs, structuring database models,
              or polishing UI interactions, I enjoy turning complex
              requirements into intuitive, reliable software.
            </p>
        
            {/* BACKGROUND SECTION */}
            <section className="nk-card p-[calc(var(--tetris-unit)*0.4)] space-y-[calc(var(--tetris-unit)*0.2)] bg-slate-800/60 backdrop-blur-sm border-nk-accent-muted/60">
              <h2 className="text-2xl font-semibold tracking-wide text-center">
                Background
              </h2>

    
              <p className="text-[1.08rem] text-slate-200 leading-relaxed">
                Before engineering, I spent seven years as a professional content
                creator on Twitch. What started as a creative outlet evolved into a
                business that taught me self-management, project ownership, audience
                psychology, and the importance of good UX—skills that now shape the
                way I approach product development.
              </p>
    
              <p className="text-[1.08rem] text-slate-200 leading-relaxed">
                After moving to the U.S., I decided to pursue a career
                in software engineering. I completed Springboard's
                Software Engineering Bootcamp in November 2025, building full-stack
                applications with Next.js, Node, and MongoDB, while deepening my
                understanding of computer science fundamentals and modern web
                architecture.
              </p>
            </section>            
             {/* GOALS */}
            <section className="nk-card p-[calc(var(--tetris-unit)*0.4)] space-y-[calc(var(--tetris-unit)*0.2)] bg-slate-800/60 backdrop-blur-sm border-nk-accent-muted/60">
              <h2 className="text-2xl font-semibold tracking-wide text-center">
                What I'm Looking For
              </h2>
    
              <p className="text-[1.08rem] text-slate-200 leading-relaxed">
                I'm a fast learner, motivated by challenge, and excited to join a
                team where I can build software that people enjoy using. My focus is
                on creating products that are maintainable, scalable, and
                thoughtfully designed.
              </p>
    
              <p className="text-[1.08rem] text-slate-200 leading-relaxed">
                I'm currently seeking full-time opportunities as a software
                engineer— ideally with a team that values collaboration and
                continuous learning.
              </p>
            </section>
          </div>
        
          {/* RIGHT COLUMN */}
          <div className="flex flex-col place-items-center gap-[calc(var(--tetris-unit)*0.7)]">
            {/* CTA PANEL */}
            <div className="nk-card p-[calc(var(--tetris-unit)*0.3)] flex flex-col items-center gap-[calc(var(--tetris-unit)*0.2)] bg-slate-800/60 backdrop-blur-sm border-nk-accent-muted/60 w-full md:max-w-[calc(var(--tetris-unit)*10)]">
              <h3 className="text-base font-semibold uppercase tracking-wide text-slate-300">Quick Links</h3>
            
              <div className="flex gap-[calc(var(--tetris-unit)*0.4)] text-sm">
                <a
                  href="/Shane-King-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nk-btn-primary text-base px-[calc(var(--tetris-unit)*0.4)]"
                >
                  Resume
                </a>
            
                <a
                  href="https://www.linkedin.com/in/shane-m-king"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nk-btn-ghost text-base px-[calc(var(--tetris-unit)*0.4)] mx-[calc(var(--tetris-unit)*0.3)]"
                >
                  LinkedIn
                </a>
            
                <a
                  href="https://github.com/shane-m-king"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nk-btn-ghost text-base px-[calc(var(--tetris-unit)*0.4)]"
                >
                  GitHub
                </a>
              </div>
            </div>
        
            {/* IMAGE */}
            <div className="relative w-[calc(var(--tetris-unit)*6)] h-[calc(var(--tetris-unit)*7)] rounded-lg overflow-hidden">
              <img
                src="/images/ProfilePicturev2.png"
                alt="Shane King"
                className="object-cover w-full h-full"
              />
            </div>
        
            {/* SKILLS  */}
            <div
              className="
                grid
                grid-cols-2
                gap-[calc(var(--tetris-unit)*0.2)]
                w-full
                max-w-[calc(var(--tetris-unit)*11)]
              "
            >
              <div className="nk-card p-[calc(var(--tetris-unit)*0.2)] space-y-[calc(var(--tetris-unit)*0.2)] bg-slate-800/60 backdrop-blur-sm border-nk-accent-muted/60">
                <h3 className="text-base font-semibold uppercase tracking-wide text-slate-300 text-center mb-[calc(var(--tetris-unit)*0.2)]">
                  Languages
                </h3>
                <ul className="text-[0.9rem] text-slate-200 space-y-[calc(var(--tetris-unit)*0.15)]">
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>Python</li>
                  <li>SQL</li>
                  <li>HTML/CSS</li>
                </ul>
              </div>
            
              <div className="nk-card p-[calc(var(--tetris-unit)*0.2)] space-y-[calc(var(--tetris-unit)*0.2)] bg-slate-800/60 backdrop-blur-sm border-nk-accent-muted/60">
                <h3 className="text-base font-semibold uppercase tracking-wide text-slate-300 text-center mb-[calc(var(--tetris-unit)*0.2)]">
                  Frameworks
                </h3>
                <ul className="text-[0.9rem] text-slate-200 space-y-[calc(var(--tetris-unit)*0.15)]">
                  <li>React</li>
                  <li>Next.js</li>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>Tailwind</li>
                </ul>
              </div>
            
              <div className="nk-card col-span-2 p-[calc(var(--tetris-unit)*0.2)] space-y-[calc(var(--tetris-unit)*0.2)] bg-slate-800/60 backdrop-blur-sm border-nk-accent-muted/60">
                <h3 className="text-base font-semibold uppercase tracking-wide text-slate-300 text-center mb-[calc(var(--tetris-unit)*0.2)]">
                  Databases & Tools
                </h3>
                <ul className="text-[0.9rem] text-slate-200 space-y-[calc(var(--tetris-unit)*0.15)]">
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
