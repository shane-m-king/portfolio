import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import TetrisBackdrop from "@/components/TetrisBackdrop";

export default function HomePage() {
  const featured = projects[0];

  return (
    <>
      <div className="hidden md:block"><TetrisBackdrop layout="home" /></div>
      <p className="nk-heading-pixel md:text-[calc(var(--tetris-unit)*0.4)] text-[calc(var(--tetris-unit)*1.2)] uppercase tracking-[0.25em] text-nk-accent">
          SOFTWARE ENGINEER • SEATTLE
      </p>
      <section
        className="
          relative z-5
          mt-[calc(var(--tetris-unit)*0.3)]
          space-y-[calc(var(--tetris-unit)*1.2)]
          md:space-y-[calc(var(--tetris-unit)*1.5)]
        "
      >
        {/* TWO-COLUMN HERO SECTION */}
        <div
          className="
            grid
            items-start
            gap-[calc(var(--tetris-unit)*1)]
            md:grid-cols-[minmax(0,2fr)_minmax(0,1.8fr)]
            mx-auto
            max-w-[calc(var(--tetris-unit)*120)]
            px-[calc(var(--tetris-unit)*1.2)]
          "
        > 
          {/* LEFT COLUMN: intro text */}
          <div className="space-y-[calc(var(--tetris-unit)*0.7)] mt-[calc(var(--tetris-unit)*0.6)]">
            <h1 className="md:text-3xl text-2xl font-semibold tracking-tight max-w-[92%]">
              I build full-stack web apps with{" "}
              <span className="text-nk-accent">Next.js</span> and a focus on
              clean architecture, great UX, and game-inspired polish.
            </h1>

            <p className="text-slate-300 max-w-xl text-base md:text-lg">
              Former Twitch creator turned software engineer. I love building
              game-adjacent tools, applications, and systems that feel responsive,
              intuitive, and fun to use.
            </p>
          </div>

          {/* RIGHT COLUMN: CTA panel */}
          <div className="space-y-[calc(var(--tetris-unit)*0.7)] mt-[calc(var(--tetris-unit)*0.6)]">
            <div className="nk-card-elevated p-[calc(var(--tetris-unit)*0.4)] flex flex-col gap-[calc(var(--tetris-unit)*0.3)] bg-slate-800/60 backdrop-blur-sm border-nk-accent-muted/60">
              <p className="nk-heading-pixel text-center text-lg text-slate-300 mb-1">
                START HERE
              </p>

              <p className="text-[1.1rem] text-center text-slate-300 mb-1">
                Jump into my projects to see what I've been up to, or learn a bit more about me.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/projects"
                  className="nk-btn-primary w-full justify-center text-base py-3"
                >
                  View Projects
                </Link>

                <Link
                  href="/about"
                  className="nk-btn-ghost w-full justify-center text-base py-3"
                >
                  About Me
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* FEATURED PROJECT — BELOW BOTH COLUMNS */}
        <div className="flex justify-center">
          <div className="md:w-full md:max-w-[calc(var(--tetris-unit)*14)] max-w-[calc(var(--tetris-unit)*24)] ">
            <p className="nk-heading-pixel text-lg text-slate-400 mb-2 text-center">
              FEATURED PROJECT
            </p>
            <ProjectCard project={featured} compact />
          </div>
        </div>
      </section>
    </>
  );
}
